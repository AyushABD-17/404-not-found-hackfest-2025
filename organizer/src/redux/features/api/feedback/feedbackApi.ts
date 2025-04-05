import { apiSlice } from "../apiSlice";




export const feedbackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFeedback: builder.mutation({
      query: (feedback) => ({
        url: '/feedback/create',
        method: 'POST',
        body: feedback,
        credentials: 'include' as const,
      }),
      invalidatesTags: ['Feedback'],
    }),
  
    // Update existing feedback
    updateFeedback: builder.mutation({
      query: ({ id, ...feedback }) => ({
        url: `/feedback/${id}`,
        method: 'PUT',
        body: feedback,
      }),
      invalidatesTags: ['Feedback'],
    }),
  
    // Get feedback by ID
    getFeedbackById: builder.query({
      query: (id) => `/feedback/${id}`,
      providesTags: ['Feedback'],
    }),
  
    // Optional: Get all feedback (if needed elsewhere in your app)
    getAllFeedback: builder.query({
      query: () => '/feedback/all',
      providesTags: ['Feedback'],
    }),
  }),

});

export const {
  useCreateFeedbackMutation,
  useUpdateFeedbackMutation,
  useGetFeedbackByIdQuery,
  useGetAllFeedbackQuery,
} = feedbackApi;
