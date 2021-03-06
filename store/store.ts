import { configureStore } from "@reduxjs/toolkit";

import logReducer from "./features/logSlice";

export const store = configureStore({
  reducer: {
    log: logReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
