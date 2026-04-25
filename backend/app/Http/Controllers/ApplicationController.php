<?php

namespace App\Http\Controllers;

use App\Services\ApplicationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function __construct(private ApplicationService $applicationService)
    {
    }

    /**
     * Apply for a job
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'job_id' => 'required|integer|exists:jobs,id',
            'cover_letter' => 'nullable|string',
        ]);

        $application = $this->applicationService->applyForJob(
            $validated['job_id'],
            $request->user()->id,
            $validated
        );

        if (!$application) {
            return response()->json([
                'message' => 'Failed to apply for job or already applied',
            ], 400);
        }

        return response()->json([
            'message' => 'Application submitted successfully',
            'data' => $application,
        ], 201);
    }

    /**
     * Get candidate's applications
     */
    public function myCandidateApplications(Request $request): JsonResponse
    {
        $perPage = (int)$request->query('per_page', 15);
        $applications = $this->applicationService->getCandidateApplications($request->user()->id, $perPage);

        return response()->json([
            'data' => $applications->items(),
            'pagination' => [
                'total' => $applications->total(),
                'per_page' => $applications->perPage(),
                'current_page' => $applications->currentPage(),
                'last_page' => $applications->lastPage(),
            ],
        ]);
    }

    /**
     * Get applications for a job
     */
    public function jobApplications(Request $request, int $jobId): JsonResponse
    {
        $perPage = (int)$request->query('per_page', 15);
        $applications = $this->applicationService->getJobApplications($jobId, $perPage);

        return response()->json([
            'data' => $applications->items(),
            'pagination' => [
                'total' => $applications->total(),
                'per_page' => $applications->perPage(),
                'current_page' => $applications->currentPage(),
                'last_page' => $applications->lastPage(),
            ],
        ]);
    }

    /**
     * Update application status
     */
    public function updateStatus(Request $request, int $applicationId): JsonResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,accepted,rejected,withdrawn',
        ]);

        $success = $this->applicationService->updateApplicationStatus(
            $applicationId,
            $validated['status']
        );

        if (!$success) {
            return response()->json([
                'message' => 'Application not found',
            ], 404);
        }

        return response()->json([
            'message' => 'Application status updated successfully',
        ]);
    }

    /**
     * Get application detail
     */
    public function show(int $applicationId): JsonResponse
    {
        $application = $this->applicationService->getApplicationById($applicationId);

        if (!$application) {
            return response()->json([
                'message' => 'Application not found',
            ], 404);
        }

        return response()->json([
            'data' => $application,
        ]);
    }
}
