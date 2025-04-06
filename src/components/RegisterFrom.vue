<script setup>
import { reactive } from 'vue'

const formData = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})

const errors = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})

function validateForm() {
  // Reset errors
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''

  // Email validation
  if (!formData.email) {
    errors.email = 'Email обязателен'
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    errors.email = 'Неверный формат email'
  }

  // Password validation
  if (!formData.password) {
    errors.password = 'Пароль обязателен'
  } else if (formData.password.length < 6) {
    errors.password = 'Пароль должен быть не менее 6 символов'
  }

  // Confirm password validation
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Пароли не совпадают'
  }

  return !errors.email && !errors.password && !errors.confirmPassword
}

function submitForm() {
  if (validateForm()) {
    console.log('Форма отправлена', formData)
    // Add your form submission logic here
  }
}

defineEmits(['close'])
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div
      class="relative z-20 h-[28em] w-[22em] border-2 border-slate-500/70 rounded-[1.5em] bg-slate-500/80 text-white font-nunito p-[2em] flex flex-col gap-[1.5em] shadow-lg"
    >
      <h1
        class="text-[2em] font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent text-center"
      >
        Регистрация
      </h1>

      <form @submit.prevent="submitForm" class="relative z-10 flex flex-col gap-[1em]">
        <div class="flex flex-col gap-[0.5em]">
          <label for="email" class="text-gray-300 text-sm">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="h-[2.5em] px-[1em] rounded-full bg-slate-600/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
            placeholder="Введите ваш email"
          />
          <p v-if="errors.email" class="text-red-400 text-xs">{{ errors.email }}</p>
        </div>

        <div class="flex flex-col gap-[0.5em]">
          <label for="password" class="text-gray-300 text-sm">Пароль</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            class="h-[2.5em] px-[1em] rounded-full bg-slate-600/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
            placeholder="••••••••"
          />
          <p v-if="errors.password" class="text-red-400 text-xs">{{ errors.password }}</p>
        </div>

        <div class="flex flex-col gap-[0.5em]">
          <label for="confirm-password" class="text-gray-300 text-sm">Подтвердите пароль</label>
          <input
            id="confirm-password"
            v-model="formData.confirmPassword"
            type="password"
            class="h-[2.5em] px-[1em] rounded-full bg-slate-600/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
            placeholder="••••••••"
          />
          <p v-if="errors.confirmPassword" class="text-red-400 text-xs">
            {{ errors.confirmPassword }}
          </p>
        </div>

        <div class="flex justify-center mt-4">
          <button
            type="submit"
            class="relative h-[3em] w-full border-[1px] border-white/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group hover:border-white/50 hover:shadow-lg hover:shadow-slate-500/20 active:scale-95 transition-all duration-300 bg-white text-slate-500 hover:bg-slate-100"
          >
            <p class="relative z-10 font-medium tracking-wide">Зарегистрироваться</p>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
