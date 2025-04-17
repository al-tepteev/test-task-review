// features/auth/stores/auth.store.ts
import { defineStore } from 'pinia'
import { useAuthCookie } from '../composables/useAuthCookie'
import type { UserOrNull, IAuthService } from '../types/index'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as UserOrNull,
    token: '',
    authService: null as IAuthService | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    setUser(user: UserOrNull) {
      this.user = user
      useAuthCookie().setUserToCookie(user)
    },

    initService(service: IAuthService) {
      this.authService = service
    },

    initialize() {
      this.user = useAuthCookie().getUserFromCookie()
    },
  },
})
