import { apiSlice } from "../../api/apiSlice";
import { eventList, registrationList } from "./eventSlice";



export const eventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    event: builder.query({
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
  }),
});

export const {
  useEventQuery,
  useCreateEventMutation,
 
} = eventApi;
