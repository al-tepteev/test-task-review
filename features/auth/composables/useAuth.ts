// features/auth/composables/useAuth.ts
import { useAuthStore } from '../stores/auth.store'
import type { IAuthService, Credentials, UserOrNull } from '../types'

export const useAuth = (service: IAuthService) => {
  const store = useAuthStore();
  let data: UserOrNull = initializeFromCookie();
  
  function initializeFromCookie(): UserOrNull {
    return useAuthCookie().getUserFromCookie()
  }
  async function login(credentials: Credentials) {
    data ||= await service.login(credentials);

    store.setAuthData(data)
  }

  return {
    store,
    login,
  }
}