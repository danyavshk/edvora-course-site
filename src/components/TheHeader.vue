<script setup>
import { ref } from 'vue'
import AuthModal from './AuthModal.vue'
import RegisterFrom from './RegisterFrom.vue'

const isDrawerOpen = ref(false)
const isRegistrationOpen = ref(false)

const openDrawer = () => {
  isDrawerOpen.value = true
}

const closeDrawer = () => {
  isDrawerOpen.value = false
}

const openRegistration = () => {
  isRegistrationOpen.value = true
}

const closeRegistration = () => {
  isRegistrationOpen.value = false
}
</script>

<template>
  <div
    class="bg-slate-500/50 w-4/5 m-auto h-16 p-4 rounded-full flex items-center justify-between shadow-lg mt-3"
  >
    <div class="flex items-center gap-2">
      <div
        class="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-md relative"
        style="font-family: 'Permanent Marker', 'cursive'; overflow: hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 opacity-50 animate-pulse rounded-full"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-md"
        ></div>
        <span class="relative z-10">E</span>
      </div>
      <div
        class="text-white text-lg font-extrabold tracking-wide"
        style="font-family: 'Permanent Marker', 'cursive'"
      >
        Edvora
      </div>
    </div>
    <nav class="flex gap-4">
      <a href="#" class="text-white hover:text-gray-300 transition duration-200">Модули</a>
      <a href="#" class="text-white hover:text-gray-300 transition duration-200">Тесты</a>
    </nav>
    <div class="flex gap-2">
      <button
        class="bg-white text-slate-500 px-4 py-2 rounded-full hover:bg-slate-100"
        @click="openDrawer"
      >
        Войти
      </button>
      <button
        class="bg-white text-slate-500 px-4 py-2 rounded-full hover:bg-slate-100"
        @click="openRegistration"
      >
        Регистрация
      </button>
    </div>
  </div>

  <AuthModal v-if="isDrawerOpen" @close="closeDrawer" />
  <RegisterFrom v-if="isRegistrationOpen" @close="closeRegistration" />
</template>
