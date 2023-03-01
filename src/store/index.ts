import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "../store/feature/user/userSlice";
import { carReducer } from "./feature/product/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
