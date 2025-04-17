// ./auth/plugins/auth.ts
import { AuthService } from '../services/auth.service'
import { UserRepository } from '../services/userRepository.service'
import { useAuthStore } from '../stores/auth.store'

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore()
    const userRepo = new UserRepository()
    const service = new AuthService(userRepo)

    authStore.initService(service)
})
