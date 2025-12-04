import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/lib/axios'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  const token = ref(localStorage.getItem('auth_token'))

  const loginWithAsana = async () => {
    try {
      const response = await api.get('/auth/url')
      const asanaUrl = response.data.data.url
      window.location.href = asanaUrl
    } catch (error) {
      console.error('Error al conectar con Laravel:', error)
      alert('No se pudo conectar con el servidor. Checa que el backend esté corriendo.')
    }
  }

  const handleCallback = async (code) => {
    try {
      const response = await api.post('/auth/callback', { code })
      const { access_token, user: userData } = response.data.data
      token.value = access_token
      user.value = userData
      localStorage.setItem('auth_token', access_token)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error en la autenticación:', error)
      throw error
    }
  }
  const loginFromCallback = async (code) => {
    if (!code) {
      console.warn('Código de autorización faltante.')
      router.push('/login')
      return
    }

    try {
      const response = await api.post('/auth/callback', { code })

      const { access_token, user: userData } = response.data.data

      token.value = access_token
      user.value = userData
      localStorage.setItem('auth_token', access_token)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error crítico en login:', error)
      alert('Ocurrió un error al conectar con Asana. Intenta nuevamente.')
      router.push('/login')
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('auth_token')
    router.push('/login')
  }

  return {
    user,
    token,
    loginWithAsana,
    handleCallback,
    logout,
    loginFromCallback,
  }
})
