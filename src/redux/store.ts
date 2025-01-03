import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import dataReducer from "./slices/dataSlice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
