import apiClient from '../utils/apiClient';
import { shouldUseMockData } from '../utils/mockMode';

const MOCK_USERS_STORAGE_KEY = 'mock_auth_users';
const DEFAULT_DEMO_PASSWORD = 'password123';

const defaultMockUsers = [
  {
    id: 1,
    name: 'Recruiter Demo',
    email: 'recruiter@example.com',
    phone: '081234567890',
    role: 'recruiter',
    company_name: 'KerjaNusa Studio',
    password: DEFAULT_DEMO_PASSWORD,
  },
  {
    id: 2,
    name: 'Candidate Demo',
    email: 'candidate@example.com',
    phone: '089876543210',
    role: 'candidate',
    company_name: '',
    password: DEFAULT_DEMO_PASSWORD,
  },
  {
    id: 3,
    name: 'Admin KerjaNusa',
    email: 'admin@kerjanusa.com',
    phone: '081122334455',
    role: 'internal',
    company_name: 'KerjaNusa Internal',
    password: DEFAULT_DEMO_PASSWORD,
  },
];

const stripPassword = ({ password, ...user }) => user;

const syncDemoUserPassword = (user) => {
  if (!user || typeof user !== 'object') {
    return user;
  }

  const normalizedEmail = user.email?.trim().toLowerCase();
  const isDemoUser =
    normalizedEmail === 'recruiter@example.com' ||
    normalizedEmail === 'candidate@example.com' ||
    normalizedEmail === 'admin@kerjanusa.com';

  if (!isDemoUser || user.password === DEFAULT_DEMO_PASSWORD) {
    return user;
  }

  return {
    ...user,
    password: DEFAULT_DEMO_PASSWORD,
  };
};

const getMockUsers = () => {
  const storedUsers = localStorage.getItem(MOCK_USERS_STORAGE_KEY);

  if (storedUsers) {
    try {
      const parsedUsers = JSON.parse(storedUsers);
      if (Array.isArray(parsedUsers)) {
        const normalizedUsers = parsedUsers.map(syncDemoUserPassword);
        const existingEmails = new Set(
          normalizedUsers.map((user) => user?.email?.trim().toLowerCase()).filter(Boolean)
        );
        const missingDefaultUsers = defaultMockUsers.filter(
          (user) => !existingEmails.has(user.email.toLowerCase())
        );
        const mergedUsers = [...normalizedUsers, ...missingDefaultUsers];
        const shouldPersistUpgrade =
          mergedUsers.length !== parsedUsers.length ||
          normalizedUsers.some((user, index) => user !== parsedUsers[index]);

        if (shouldPersistUpgrade) {
          saveMockUsers(mergedUsers);
        }

        return mergedUsers;
      }
    } catch (error) {
      // Fall back to the seeded mock users.
    }
  }

  localStorage.setItem(MOCK_USERS_STORAGE_KEY, JSON.stringify(defaultMockUsers));
  return defaultMockUsers;
};

const saveMockUsers = (users) => {
  localStorage.setItem(MOCK_USERS_STORAGE_KEY, JSON.stringify(users));
};

const persistMockSession = (user) => {
  const sessionToken = `mock-token-${user.id}`;
  localStorage.setItem('auth_token', sessionToken);
  localStorage.setItem('user', JSON.stringify(stripPassword(user)));

  return sessionToken;
};

class AuthService {
  /**
   * Register new user
   */
  static async register(data) {
    if (shouldUseMockData) {
      if (data.password !== data.password_confirmation) {
        throw { message: 'Konfirmasi password tidak cocok.' };
      }

      const users = getMockUsers();
      const email = data.email?.trim().toLowerCase();

      if (users.some((user) => user.email.toLowerCase() === email)) {
        throw { message: 'Email sudah terdaftar di mode demo.' };
      }

      const nextUser = {
        id: users.reduce((largestId, user) => Math.max(largestId, user.id), 0) + 1,
        name: data.name?.trim() || 'User Demo',
        email,
        phone: data.phone || '',
        role: data.role || 'recruiter',
        company_name: data.company_name || '',
        password: data.password,
      };

      const updatedUsers = [...users, nextUser];
      saveMockUsers(updatedUsers);

      return {
        user: stripPassword(nextUser),
        token: persistMockSession(nextUser),
      };
    }

    try {
      const response = await apiClient.post('/register', data);
      if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Login user
   */
  static async login(email, password) {
    if (shouldUseMockData) {
      const users = getMockUsers();
      const matchingUser = users.find(
        (user) => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password
      );

      if (!matchingUser) {
        throw { message: 'Email atau password tidak cocok.' };
      }

      return {
        user: stripPassword(matchingUser),
        token: persistMockSession(matchingUser),
      };
    }

    try {
      const response = await apiClient.post('/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Logout user
   */
  static async logout() {
    if (shouldUseMockData) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      return;
    }

    try {
      await apiClient.post('/logout');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    } catch (error) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      throw error.response?.data || error.message;
    }
  }

  /**
   * Get current user
   */
  static async getCurrentUser() {
    if (shouldUseMockData) {
      const user = this.getStoredUser();

      if (!user) {
        throw { message: 'Anda belum login.' };
      }

      return user;
    }

    try {
      const response = await apiClient.get('/me');
      return response.data.user;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Update profile
   */
  static async updateProfile(data) {
    if (shouldUseMockData) {
      const currentUser = this.getStoredUser();

      if (!currentUser) {
        throw { message: 'Anda belum login.' };
      }

      const updatedUser = { ...currentUser, ...data };
      const users = getMockUsers().map((user) =>
        user.id === currentUser.id ? { ...user, ...data } : user
      );

      saveMockUsers(users);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      return { user: updatedUser };
    }

    try {
      const response = await apiClient.put('/profile', data);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Change password
   */
  static async changePassword(oldPassword, newPassword, newPasswordConfirmation) {
    if (shouldUseMockData) {
      const currentUser = this.getStoredUser();

      if (!currentUser) {
        throw { message: 'Anda belum login.' };
      }

      if (newPassword !== newPasswordConfirmation) {
        throw { message: 'Konfirmasi password baru tidak cocok.' };
      }

      const users = getMockUsers();
      const matchingUser = users.find((user) => user.id === currentUser.id);

      if (!matchingUser || matchingUser.password !== oldPassword) {
        throw { message: 'Password lama tidak cocok.' };
      }

      matchingUser.password = newPassword;
      saveMockUsers([...users]);

      return { message: 'Password demo berhasil diperbarui.' };
    }

    try {
      const response = await apiClient.put('/change-password', {
        old_password: oldPassword,
        new_password: newPassword,
        new_password_confirmation: newPasswordConfirmation,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  /**
   * Get token from storage
   */
  static getToken() {
    return localStorage.getItem('auth_token');
  }

  /**
   * Get stored user
   */
  static getStoredUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  /**
   * Check if user is authenticated
   */
  static isAuthenticated() {
    return !!this.getToken();
  }
}

export default AuthService;
