import { apiSlice } from "../../api/apiSlice";
import { eventList, registrationList } from "./eventSlice";



export const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
        query: () => ({
          url: "events",
          method: "GET",
        }),
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
          try {
            const result = await queryFulfilled;
            dispatch(
              eventList({
                events: result.data.events,
              })
            );
          } catch (error: any) {
            console.log(error);
          }
        },
      }),

      getEventsById: builder.query({
        query: (id: string) => ({
          url: `events/${id}`,
          method: "GET",
        }),
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
          try {
            const result = await queryFulfilled;
            return result.data;
          } catch (error: any) {
            console.log(error);
          }
        },
      }),

      
     

      createEvent: builder.mutation({
        query: (data:any) => ({
          url: "events",
          method: "POST",
          body: data,
          credentials: "include" as const,
        }),
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
          try {
            const result = await queryFulfilled;
            console.log(result);
          } catch (error: any) {
            console.log(error);
          }
        },
      }),


      getEventsByUserId: builder.query({
        query: (userId: string) => ({
          url: `events/user/${userId}`,
          method: "GET",
        }),
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
          try {
            const result = await queryFulfilled;
            return result.data;
          } catch (error: any) {
            console.log(error);
          }
        },
      }),


      chatWithAI: builder.mutation({
        query: (data: any) => ({
          url: `ai-chat/proactive-response`,
          method: "POST",
          body: data,
        }),
      }),
      

      // New endpoints
      getFeedbackForm: builder.query({
        query: (eventId) => `/feedback/form/event/${eventId}`,
        providesTags: ['Feedback'],
      }),
      submitFeedbackResponse: builder.mutation({
        query: ({ id, formFields }) => ({
          url: `/feedback/form/event/${id}/submit`,
          method: 'POST',
          body: { formFields },
        }),
        invalidatesTags: ['Feedback'],
      }),
      
  }),
});

export const {
  useGetEventsQuery,
  useCreateEventMutation,
  useGetEventsByIdQuery,
  useGetEventsByUserIdQuery,
  useChatWithAIMutation,

  useGetFeedbackFormQuery,
  useSubmitFeedbackResponseMutation,
} = eventApi;
