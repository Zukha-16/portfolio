import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { useHttp } from "../../../hooks/http.hook";

const resumeLanguagesAdapter = createEntityAdapter();
const initialState = resumeLanguagesAdapter.getInitialState({
  resumeLanguagesLoadingStatus: "idle",
});

export const fetchResumeLanguages = createAsyncThunk("resume/resumeLanguages", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/languages");
});

const resumeLanguagesSlice = createSlice({
  name: "resumeLanguages",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeLanguages.pending, (state) => {
        state.resumeLanguagesLoadingStatus = "loading";
      })
      .addCase(fetchResumeLanguages.fulfilled, (state, action) => {
        state.resumeLanguagesLoadingStatus = "idle";
        resumeLanguagesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchResumeLanguages.rejected, (state) => {
        state.resumeLanguagesLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = resumeLanguagesSlice;

export default reducer;
export const { selectAll } = resumeLanguagesAdapter.getSelectors(
  (state) => state.resumeLanguages
);
export const {
  resumeLanguagesFetching,
  resumeLanguagesFetched,
  resumeLanguagesFetchingError,
} = actions;
