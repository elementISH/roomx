import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useGetDataQuery } from "./dataApi";

const initialState = {
  items: [],
  status: null,
};

export const roomsFetch = createAsyncThunk("rooms/roomsFetch", async () => {
  const { data, error } = useGetDataQuery();
  return error ? console.error(error) : data;
});

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: {
    [roomsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [roomsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [roomsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default roomsSlice.reducer;
