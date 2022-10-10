import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const headerAdapter = createEntityAdapter();

const initialState = headerAdapter.getInitialState({
  headerLinksLoadingStatus: "idle",
  activeLanguage: "en",
});

export const fetchHeader = createAsyncThunk("header/headerLinks", (language) => {
  const { request } = useHttp();
  return request(`http://localhost:3001/header-${language}`);
});

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    activateLanguageChange: (state, action) => {
      state.activeLanguage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchHeader.pending, (state) => {
        state.headerLinksLoadingStatus = "loading";
      })
      .addCase(fetchHeader.fulfilled, (state, action) => {
        state.headerLinksLoadingStatus = "idle";
        headerAdapter.setAll(state, action.payload);
      })
      .addCase(fetchHeader.rejected, (state) => {
        state.headerLinksLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = headerSlice;

export default reducer;
export const { selectAll } = headerAdapter.getSelectors(
  (state) => state.header
);

export const { activateLanguageChange, headerFetching, headerFetched, headerFetchingError } = actions;
