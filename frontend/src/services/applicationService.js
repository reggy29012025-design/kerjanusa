import apiClient from '../utils/apiClient';
import { shouldUseMockData } from '../utils/mockMode';

const MOCK_APPLICATIONS_STORAGE_KEY = 'mock_job_applications';

const getStoredMockApplications = () => {
  const storedApplications = localStorage.getItem(MOCK_APPLICATIONS_STORAGE_KEY);

  if (!storedApplications) {
    return [];
  }

  try {
    const parsedApplications = JSON.parse(storedApplications);
    return Array.isArray(parsedApplications) ? parsedApplications : [];
  } catch (error) {
    return [];
  }
};

const saveMockApplications = (applications) => {
  localStorage.setItem(MOCK_APPLICATIONS_STORAGE_KEY, JSON.stringify(applications));
};

const getCurrentMockUser = () => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

class ApplicationService {
  /**
   * Apply for job
   */
  static async applyForJob(jobId, coverLetter = '') {
    if (shouldUseMockData) {
      const currentUser = getCurrentMockUser();

      if (!currentUser) {
        throw { message: 'Anda perlu login sebagai kandidat terlebih dahulu.' };
      }

      if (currentUser.role !== 'candidate') {
        throw { message: 'Hanya akun kandidat yang dapat melamar lowongan.' };
      }

      const applications = getStoredMockApplications();
      const alreadyApplied = applications.some(
        (application) =>
          Number(application.job_id) === Number(jobId) &&
          Number(application.candidate_id) === Number(currentUser.id)
      );

      if (alreadyApplied) {
        throw { message: 'Anda sudah pernah melamar lowongan ini.' };
      }

      const nextApplication = {
        id: applications.reduce((largestId, application) => Math.max(largestId, application.id), 0) + 1,
        job_id: Number(jobId),
        candidate_id: Number(currentUser.id),
        status: 'pending',
        cover_letter: coverLetter,
        applied_at: new Date().toISOString(),
      };

      saveMockApplications([...applications, nextApplication]);

      return {
        message: 'Lamaran demo berhasil dikirim.',
        data: nextApplication,
      };
    }

    try {
      const response = await apiClient.post('/apply', {
        job_id: jobId,
        cover_letter: coverLetter,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Get my applications (as candidate)
   */
  static async getMyApplications(page = 1, perPage = 15) {
    if (shouldUseMockData) {
      const currentUser = getCurrentMockUser();
      const applications = getStoredMockApplications().filter(
        (application) => Number(application.candidate_id) === Number(currentUser?.id)
      );

      return {
        data: applications,
        pagination: {
          total: applications.length,
          per_page: perPage,
          current_page: page,
          last_page: 1,
        },
      };
    }

    try {
      const params = new URLSearchParams({ page, per_page: perPage });
      const response = await apiClient.get(`/my-applications?${params}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Get applications for job (as recruiter)
   */
  static async getJobApplications(jobId, page = 1, perPage = 15) {
    if (shouldUseMockData) {
      const applications = getStoredMockApplications().filter(
        (application) => Number(application.job_id) === Number(jobId)
      );

      return {
        data: applications,
        pagination: {
          total: applications.length,
          per_page: perPage,
          current_page: page,
          last_page: 1,
        },
      };
    }

    try {
      const params = new URLSearchParams({ page, per_page: perPage });
      const response = await apiClient.get(`/jobs/${jobId}/applications?${params}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Update application status
   */
  static async updateApplicationStatus(applicationId, status) {
    if (shouldUseMockData) {
      let updatedApplication = null;
      const applications = getStoredMockApplications().map((application) => {
        if (Number(application.id) !== Number(applicationId)) {
          return application;
        }

        updatedApplication = {
          ...application,
          status,
        };

        return updatedApplication;
      });

      if (!updatedApplication) {
        throw { message: 'Lamaran demo tidak ditemukan.' };
      }

      saveMockApplications(applications);

      return {
        message: 'Status lamaran demo berhasil diperbarui.',
        data: updatedApplication,
      };
    }

    try {
      const response = await apiClient.put(`/applications/${applicationId}/status`, {
        status,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Get application detail
   */
  static async getApplicationById(applicationId) {
    if (shouldUseMockData) {
      const application = getStoredMockApplications().find(
        (item) => Number(item.id) === Number(applicationId)
      );

      if (!application) {
        throw { message: 'Lamaran demo tidak ditemukan.' };
      }

      return application;
    }

    try {
      const response = await apiClient.get(`/applications/${applicationId}`);
      return response.data.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
}

export default ApplicationService;
