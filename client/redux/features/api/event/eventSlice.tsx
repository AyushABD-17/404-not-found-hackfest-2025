import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface eventState {
  events: Array<object>;
  registration: Array<object>;
}

const initialState: eventState = {
  events: [],
  registration: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventList: (state, action: PayloadAction<{ events: Array<object> }>) => {
      state.events = action.payload.events;
    },
    registrationList: (
      state,
      action: PayloadAction<{ registration: Array<object> }>
    ) => {
      state.registration = action.payload.registration;
    },
  },
});

export const { eventList, registrationList } = eventSlice.actions;

export default eventSlice.reducer;
