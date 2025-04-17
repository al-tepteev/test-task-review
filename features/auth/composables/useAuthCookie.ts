// composables/useAuthCookie.ts
import { useCookie } from '#app'
import type { UserOrNull } from '../types/index'

const COOKIE_NAME = 'auth'
const COOKIE_OPTIONS = {
  maxAge: 60 * 60 * 24 * 7,
  secure: true,
  sameSite: 'strict' as const,
}

export function useAuthCookie() {
  const cookie = useCookie<UserOrNull>(COOKIE_NAME, COOKIE_OPTIONS)

  function getUserFromCookie(): UserOrNull {
    return cookie.value || null
  }

  function setUserToCookie(user: UserOrNull) {
    cookie.value = user
  }

  function clearCookie() {
    cookie.value = null
  }

  return {
    getUserFromCookie,
    setUserToCookie,
    clearCookie,
  }
}