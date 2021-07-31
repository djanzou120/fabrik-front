import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialStateType = {
  logs: any;
};

const initialState = {
  logs: [],
};

export const logSlice = createSlice({
  name: "editor",
  initialState: initialState,
  reducers: {
    update_logs: (state: InitialStateType, { payload }) => {
      state.logs = [...state.logs, payload];
    },
    clear_logs: (state: InitialStateType) => {
      state.logs = [];
    },
  },
});

export const { update_logs, clear_logs } = logSlice.actions;

export const editor_state = (state: RootState) => state.log;

export default logSlice.reducer;
