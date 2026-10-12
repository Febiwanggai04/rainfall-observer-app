import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import observationReducer from './slices/observationSlice';
import stationReducer from './slices/stationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    observations: observationReducer,
    stations: stationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
