import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducer from "./reducer";
import authMiddleware from "./middlewares/authMiddleware";

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, authMiddleware)
});

export default store;