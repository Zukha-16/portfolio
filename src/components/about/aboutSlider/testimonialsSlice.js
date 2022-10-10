import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const testimonialsAdapter = createEntityAdapter();

const initialState = testimonialsAdapter.getInitialState({
  testimonialsLoadingStatus: "idle",
});

export const fetchTestimonials = createAsyncThunk(
  "testimonials/testimonialsData",
  () => {
    const { request } = useHttp();
    return request("http://localhost:3001/testimonials");
  }
);

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.testimonialsLoadingStatus = "loading";
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.testimonialsLoadingStatus = "idle";
        testimonialsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTestimonials.rejected, (state) => {
        state.testimonialsLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = testimonialsSlice;

export default reducer;
export const { selectAll } = testimonialsAdapter.getSelectors(
  (state) => state.testimonials
);

export const {
  testimonialsFetching,
  testimonialsFetched,
  testimonialsFetchingError,
} = actions;
