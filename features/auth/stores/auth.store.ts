// features/auth/stores/auth.store.ts
import { defineStore } from 'pinia'
import type { UserOrNull } from '../types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as UserOrNull,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user
  },

  actions: {
    setAuthData(user: UserOrNull) {
      this.user = user
    },
    
    clearAuthData() {
      this.user = null
    }
  }
})