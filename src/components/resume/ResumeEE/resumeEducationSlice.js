import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";


const resumeEducationAdapter = createEntityAdapter();
const initialState = resumeEducationAdapter.getInitialState({
  resumeEducationLoadingStatus: "idle",
});

export const fetchResumeEducation = createAsyncThunk("resume/resumeEducation", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/education");
});


const resumeEducationSlice = createSlice({
  name: "resumeEducation",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeEducation.pending, (state) => {
        state.resumeEducationLoadingStatus = "loading";
      })
      .addCase(fetchResumeEducation.fulfilled, (state, action) => {
        state.resumeEducationLoadingStatus = "idle";
        resumeEducationAdapter.setAll(state, action.payload);
      })
      .addCase(fetchResumeEducation.rejected, (state) => {
        state.resumeEducationLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = resumeEducationSlice;

export default reducer;
export const { selectAll } = resumeEducationAdapter.getSelectors(
  (state) => state.resumeEducation
);

export const {
  resumeEducationFetching,
  resumeEducationFetched,
  resumeEducationFetchingError,
} = actions;
