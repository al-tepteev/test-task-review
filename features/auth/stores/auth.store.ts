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
    initService(service: IAuthService) {
      this.authService = service
    },

    initialize() {
      this.user = useAuthCookie().getUserFromCookie()
    },

    async login(credentials: { username: string; password: string }) {
      if (!this.authService) throw new Error('AuthService not initialized')
      const userData = await this.authService.login(credentials)
      
      useAuthCookie().setUserToCookie(userData)
      this.user = userData
    },
  },
})
