import {create} from 'zustand';

export interface CounterState {
  count: number;

  incrementBy: (value: number) => void;
  decreaseBy: (value: number) => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
  count: 0,

  incrementBy: value => set({count: get().count + value}),
  decreaseBy: value => set({count: get().count - value}),
}));

//useCounterStore
