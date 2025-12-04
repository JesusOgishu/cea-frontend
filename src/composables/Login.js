import { useAuthStore } from '@/stores/auth'

export function Login() {
  const authStore = useAuthStore()

  const handleLogin = () => {
    authStore.loginWithAsana()
  }

  return {
    handleLogin,
  }
}
