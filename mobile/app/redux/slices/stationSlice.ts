import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Station {
  id: string;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  deviceType: string;
  installDate: string;
  operatorName: string;
  operatorPhone: string;
  notes: string;
}

interface StationState {
  stations: Station[];
  selectedStation: Station | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: StationState = {
  stations: [],
  selectedStation: null,
  isLoading: false,
  error: null,
};

const stationSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    setStations: (state, action: PayloadAction<Station[]>) => {
      state.stations = action.payload;
    },
    addStation: (state, action: PayloadAction<Station>) => {
      state.stations.push(action.payload);
    },
    updateStation: (state, action: PayloadAction<Station>) => {
      const index = state.stations.findIndex(
        (station) => station.id === action.payload.id
      );
      if (index !== -1) {
        state.stations[index] = action.payload;
      }
    },
    selectStation: (state, action: PayloadAction<Station | null>) => {
      state.selectedStation = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setStations,
  addStation,
  updateStation,
  selectStation,
  setLoading,
  setError,
} = stationSlice.actions;
export default stationSlice.reducer;
