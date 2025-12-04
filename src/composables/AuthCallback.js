import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export function AuthCallback() {
  const route = useRoute()
  const authStore = useAuthStore()

  onMounted(() => {
    const code = route.query.code

    authStore.loginFromCallback(code)
  })
}
