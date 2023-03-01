import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarsStructure } from "../../../types";

const intitialCarsState = [] as CarsStructure;

const carSlice = createSlice({
  name: "car",
  initialState: intitialCarsState,
  reducers: {
    loadCars: (
      currentCarState: CarsStructure,
      action: PayloadAction<CarsStructure>
    ) => [...action.payload],
  },
});

export const carReducer = carSlice.reducer;
export const { loadCars: loadCarsActionCreator } = carSlice.actions;
