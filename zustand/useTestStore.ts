import AsyncStorage from "@react-native-async-storage/async-storage";
import type { StateCreator } from "zustand";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  text: string;
};

type Actions = {
  setText: (text: string) => void;
};

const initialState: State = {
  text: "",
};

const testStoreInitializer: StateCreator<
  State & Actions,
  [["zustand/persist", unknown], ["zustand/immer", never]],
  [],
  State & Actions
> = (set) => ({
  ...initialState,
  setText: (text: string) =>
    set((state) => {
      state.text = text;
    }),
});

const createTestStore = persist(immer(testStoreInitializer), {
  name: "testStore",
  storage: createJSONStorage(() => AsyncStorage),
});

export const useTestStore = create(createTestStore);
