import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const resumeInterestsAdapter = createEntityAdapter();
const initialState = resumeInterestsAdapter.getInitialState({
  resumeInterestsLoadingStatus: "idle",
});

export const fetchResumeInterests = createAsyncThunk("resume/resumeInterests", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/interests");
});

const resumeInterestsSlice = createSlice({
  name: "resumeInterests",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchResumeInterests.pending, (state) => {
        state.resumeInterestsLoadingStatus = "loading";
      })
      .addCase(fetchResumeInterests.fulfilled, (state, action) => {
        state.resumeInterestsLoadingStatus = "idle";
        resumeInterestsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchResumeInterests.rejected, (state) => {
        state.resumeInterestsLoadingStatus = "error";
      })
      .addDefaultCase(() => {}),
});


const { actions, reducer } = resumeInterestsSlice;

export default reducer;
export const { selectAll } = resumeInterestsAdapter.getSelectors(
  (state) => state.resumeInterests
);

export const {
  resumeInterestsFetching,
  resumeInterestsFetched,
  resumeInterestsFetchingError,
} = actions;
