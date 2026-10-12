import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Observation {
  id: string;
  stationId: string;
  date: string;
  time: string;
  rainfall: number;
  weatherCondition: string;
  deviceStatus: string;
  notes: string;
  photoUrl?: string;
  latitude?: number;
  longitude?: number;
  synced: boolean;
  createdAt: string;
}

interface ObservationState {
  observations: Observation[];
  filteredObservations: Observation[];
  isLoading: boolean;
  error: string | null;
  selectedPeriod: 'daily' | 'weekly' | 'monthly';
}

const initialState: ObservationState = {
  observations: [],
  filteredObservations: [],
  isLoading: false,
  error: null,
  selectedPeriod: 'daily',
};

const observationSlice = createSlice({
  name: 'observations',
  initialState,
  reducers: {
    addObservation: (state, action: PayloadAction<Observation>) => {
      state.observations.push(action.payload);
    },
    setObservations: (state, action: PayloadAction<Observation[]>) => {
      state.observations = action.payload;
      state.filteredObservations = action.payload;
    },
    updateObservation: (state, action: PayloadAction<Observation>) => {
      const index = state.observations.findIndex(
        (obs) => obs.id === action.payload.id
      );
      if (index !== -1) {
        state.observations[index] = action.payload;
      }
    },
    deleteObservation: (state, action: PayloadAction<string>) => {
      state.observations = state.observations.filter(
        (obs) => obs.id !== action.payload
      );
    },
    filterObservationsByPeriod: (state, action: PayloadAction<string>) => {
      const period = new Date();
      const filtered = state.observations.filter((obs) => {
        const obsDate = new Date(obs.date);
        if (action.payload === 'daily') {
          return obsDate.toDateString() === period.toDateString();
        } else if (action.payload === 'weekly') {
          const weekAgo = new Date(period.getTime() - 7 * 24 * 60 * 60 * 1000);
          return obsDate >= weekAgo;
        } else if (action.payload === 'monthly') {
          return (
            obsDate.getMonth() === period.getMonth() &&
            obsDate.getFullYear() === period.getFullYear()
          );
        }
        return true;
      });
      state.filteredObservations = filtered;
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
  addObservation,
  setObservations,
  updateObservation,
  deleteObservation,
  filterObservationsByPeriod,
  setLoading,
  setError,
} = observationSlice.actions;
export default observationSlice.reducer;
