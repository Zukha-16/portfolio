import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";


const resumeExperienceAdapter = createEntityAdapter();
const initialState = resumeExperienceAdapter.getInitialState({
  resumeExperienceLoadingStatus: "idle",
});

export const fetchResumeExperience = createAsyncThunk("resume/resumeExperience", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/experience");
});


const resumeExperienceSlice = createSlice({
  name: "resumeExperience",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeExperience.pending, (state) => {
        state.resumeExperienceLoadingStatus = "loading";
      })
      .addCase(fetchResumeExperience.fulfilled, (state, action) => {
        state.resumeExperienceLoadingStatus = "idle";
        resumeExperienceAdapter.setAll(state, action.payload);
      })
      .addCase(fetchResumeExperience.rejected, (state) => {
        state.resumeExperienceLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = resumeExperienceSlice;

export default reducer;
export const { selectAll } = resumeExperienceAdapter.getSelectors(
  (state) => state.resumeExperience
);

export const {
  resumeExperienceFetching,
  resumeExperienceFetched,
  resumeExperienceFetchingError,
} = actions;
