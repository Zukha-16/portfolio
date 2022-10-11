import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const resumeSkillsAdapter = createEntityAdapter();
const initialState = resumeSkillsAdapter.getInitialState({
  resumeSkillsLoadingStatus: "idle",
});

export const fetchResumeSkills = createAsyncThunk("resume/resumeSkills", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/skills");
});

const resumeSkillsSlice = createSlice({
  name: "resumeSkills",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeSkills.pending, (state) => {
        state.resumeSkillsLoadingStatus = "loading";
      })
      .addCase(fetchResumeSkills.fulfilled, (state, action) => {
        state.resumeSkillsLoadingStatus = "idle";
        resumeSkillsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchResumeSkills.rejected, (state) => {
        state.resumeSkillsLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = resumeSkillsSlice;

export default reducer;

export const { selectAll } = resumeSkillsAdapter.getSelectors(
  (state) => state.resumeSkills
);

export const {
  resumeSkillsFetching,
  resumeSkillsFetched,
  resumeSkillsFetchingError,
} = actions;
