<script setup>
import { Login } from '@/composables/Login'
const { handleLogin } = Login()
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-cea-bg">
    <div class="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
      <div class="mb-6 flex justify-center">
        <span class="material-icons-outlined text-6xl text-cea-primary">api</span>
      </div>

      <h1 class="text-3xl font-bold text-gray-800 mb-2">Bienvenido a CEA</h1>
      <p class="text-gray-500 mb-8">Gestiona tus proyectos de Asana como un pro.</p>

      <button
        @click="handleLogin"
        class="w-full flex items-center justify-center gap-3 bg-[#F06A6A] hover:bg-[#d95555] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
          />
        </svg>
        Iniciar sesión con Asana
      </button>

      <p class="mt-8 text-sm text-gray-400">
        &copy; 2024 CEA Tasks. Todos los derechos reservados.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Si necesitas importar iconos de Google, hazlo en index.html del root */
</style>
