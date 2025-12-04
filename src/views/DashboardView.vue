<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav
      class="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center"
    >
      <div class="flex items-center gap-2">
        <span class="material-icons-outlined text-cea-primary text-3xl">dashboard</span>
        <span class="font-bold text-xl text-gray-800">CEA Dashboard</span>
      </div>

      <div class="flex items-center gap-4">
        <span class="text-gray-600 font-medium">
          Hola, {{ authStore.user?.username || 'Usuario' }} 👋
        </span>

        <button
          @click="authStore.logout"
          class="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 font-semibold transition"
        >
          <span class="material-icons-outlined text-sm">logout</span>
          Salir
        </button>
      </div>
    </nav>

    <main class="p-8">
      <div class="bg-white rounded-xl shadow p-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">¡Ya estás dentro, padrino! 🚀</h1>
        <p class="text-gray-600">
          Si estás viendo esto, el flujo de autenticación
          <strong>Vue + Laravel + Asana</strong> funcionó al 100%.
        </p>

        <div class="mt-6 p-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
          <strong>Tu Token:</strong>
          <span class="block truncate text-xs mt-1 font-mono">{{ authStore.token }}</span>
        </div>
      </div>
    </main>
  </div>
</template>
