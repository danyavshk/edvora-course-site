<script setup>
import TheFooter from './TheFooter.vue'
import { reactive } from 'vue'

const user = reactive({
  name: 'Вишиняков Данил',
  email: 'VT2022@ku.edu.kz',
  avatar: 'https://via.placeholder.com/150',
  bio: 'Студент СКУ, разработчик данного сайта.',
  username: 'danyavshk',
  location: 'Петропавловск, Казахстан',
  joinedAt: '04.03.2025',
})

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(undefined, options)
}
</script>

<template>
  <div
    class="relative max-w-2xl mx-auto mt-10 p-8 border-2 border-slate-500/50 rounded-[1.5em] bg-slate-500/50 text-white font-nunito shadow-lg"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-500/50 via-slate-500/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[1.5em]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(71,85,105,0.1),transparent_60%)]"
    ></div>

    <div class="flex items-center space-x-6 relative z-10">
      <img
        v-if="user.avatar"
        :src="user.avatar"
        alt="Аватар пользователя"
        class="w-20 h-20 rounded-full border-2 border-white/30"
      />
      <div>
        <h2
          class="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent"
        >
          {{ user.name }}
        </h2>
        <p class="text-gray-300">{{ user.email }}</p>
      </div>
    </div>

    <div class="mt-8 relative z-10">
      <h3 class="text-lg font-medium text-white">О пользователе</h3>
      <p class="text-gray-300 mt-2">{{ user.bio || 'Биография отсутствует.' }}</p>
    </div>

    <div class="mt-8 relative z-10">
      <h3 class="text-lg font-medium text-white">Детали</h3>
      <ul class="mt-2 text-gray-300 space-y-2">
        <li><strong>Имя пользователя:</strong> {{ user.username }}</li>
        <li><strong>Местоположение:</strong> {{ user.location || 'Не указано' }}</li>
        <li><strong>Дата регистрации:</strong> {{ formatDate(user.joinedAt) }}</li>
      </ul>
    </div>

    <button
      class="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-6 border-[1px] border-white/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden hover:border-white/50 hover:shadow-lg hover:shadow-slate-500/20 active:scale-95 transition-all duration-300 bg-white text-slate-500 hover:bg-slate-100"
    >
      <p class="relative z-10 font-medium tracking-wide">Изменить данные профиля</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="relative z-10 w-5 h-5 transition-transform duration-300"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        ></path>
      </svg>
    </button>
  </div>
  <TheFooter />
</template>
