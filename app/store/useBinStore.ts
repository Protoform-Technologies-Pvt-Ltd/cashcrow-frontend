'use client';
import { create } from 'zustand';

type BinState = {
  selectedBin: { binId: string; location: string } | null;
  setSelectedBin: (bin: { binId: string; location: string }) => void;
};

export const useBinStore = create<BinState>((set) => ({
  selectedBin: null,
  setSelectedBin: (bin) => set({ selectedBin: bin }),
}));
