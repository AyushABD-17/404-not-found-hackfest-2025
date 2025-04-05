import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface FeedbackFormField {
  id: string;
  type: 'text' | 'rating' | 'multiSelect' | 'hashtags' | 'anonymous';
  label: string;
  required: boolean;
  options?: string[];
  placeholder?: string;
  tags?: string[];
}

interface Feedback {
  _id: string;
  eventId: string;
  sessionId: string;
  submittedBy: string;
  isAnonymous: boolean;
  formFields: {
    [key: string]: {
      value: any;
      field: FeedbackFormField;
    };
  };
  status: 'draft' | 'submitted';
  createdAt: string;
  updatedAt: string;
}

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/feedback' }),
  tagTypes: ['Feedback'],
  endpoints: (builder) => ({
    // Create feedback
    createFeedback: builder.mutation<Feedback, Partial<Feedback>>({
      query: (feedback) => ({
        url: '/',
        method: 'POST',
        body: feedback,
      }),
      invalidatesTags: ['Feedback'],
    }),

    // Get all feedback
    getAllFeedback: builder.query<Feedback[], { eventId?: string; sessionId?: string; status?: string; isAnonymous?: boolean }>({
      query: (params) => ({
        url: '/',
        method: 'GET',
        params,
      }),
      providesTags: ['Feedback'],
    }),

    // Get feedback by ID
    getFeedbackById: builder.query<Feedback, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'Feedback', id }],
    }),

    // Update feedback
    updateFeedback: builder.mutation<Feedback, { id: string; data: Partial<Feedback> }>({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Feedback', id }],
    }),

    // Delete feedback
    deleteFeedback: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Feedback'],
    }),

    // Submit feedback
    submitFeedback: builder.mutation<Feedback, string>({
      query: (id) => ({
        url: `/${id}/submit`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Feedback', id }],
    }),

    // Get user's feedback
    getUserFeedback: builder.query<Feedback[], void>({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),

    // Get feedback for a specific event
    getEventFeedback: builder.query<Feedback[], string>({
      query: (eventId) => ({
        url: `/event/${eventId}`,
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),

    // Get feedback for a specific session
    getSessionFeedback: builder.query<Feedback[], string>({
      query: (sessionId) => ({
        url: `/session/${sessionId}`,
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),



    



  }),
});

export const {
  useCreateFeedbackMutation,
  useGetAllFeedbackQuery,
  useGetFeedbackByIdQuery,
  useUpdateFeedbackMutation,
  useDeleteFeedbackMutation,
  useSubmitFeedbackMutation,
  useGetUserFeedbackQuery,
  useGetEventFeedbackQuery,
  useGetSessionFeedbackQuery,

} = feedbackApi; 