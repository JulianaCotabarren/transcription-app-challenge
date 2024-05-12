import { type AudioStore } from '@/types/types'
import { createWithEqualityFn } from 'zustand/traditional'

export const useAudioStore = createWithEqualityFn<AudioStore>((set) => ({
  audioTime: null,
  currentAudioTime: 0,
  setAudioTime: (audioTime) => { set({ audioTime }) },
  setCurrentAudioTime: (currentAudioTime) => { set({ currentAudioTime }) }
}))
