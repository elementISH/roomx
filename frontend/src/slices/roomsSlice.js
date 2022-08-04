import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const roomsFetch = createAsyncThunk("rooms/roomsFetch", async () => {
  try {
    const response = await axios.get("http://localhost:8080/rooms");
    return response.data;
  } catch (error) {
    console.log(error);
  }
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
