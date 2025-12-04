<script setup>
import { AuthCallback } from '@/composables/AuthCallback'
AuthCallback()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-cea-bg">
    <div
      class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cea-primary mb-4"
    ></div>

    <h2 class="text-xl font-bold text-gray-700">Autenticando...</h2>
    <p class="text-gray-500">Estamos conectando con Asana, aguanta vara.</p>
  </div>
</template>
