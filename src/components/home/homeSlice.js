import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const homeAdapter = createEntityAdapter();
const initialState = homeAdapter.getInitialState({
  homeContentLoadingStatus: "idle",
});
export const fetchHome = createAsyncThunk("home/homeContent", (language) => {
  const { request } = useHttp();
  return request(`http://localhost:3001/home-${language}`);
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHome.pending, (state) => {
        state.homeContentLoadingStatus = "loading";
      })
      .addCase(fetchHome.fulfilled, (state, action) => {
        state.homeContentLoadingStatus = "idle";
        homeAdapter.setAll(state, action.payload);
      })
      .addCase(fetchHome.rejected, (state) => {
        state.homeContentLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = homeSlice;
export default reducer;
export const { selectAll } = homeAdapter.getSelectors((state) => state.home);

export const { homeFetching, homeFetched, homeFetchingError } = actions;
