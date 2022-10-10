import header from "../components/header/headerSlice";
import home from "../components/home/homeSlice";
import testimonials from "../components/about/aboutSlider/testimonialsSlice";
import { configureStore } from "@reduxjs/toolkit";

const middleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const reducers = { header: header, home: home, testimonials: testimonials};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
