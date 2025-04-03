<script setup>
import CardModule from './CardModule.vue'
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl p-4">
      <CardModule title="Модуль 1" description-module="Введение в ИИ." />
      <CardModule title="Модуль 2" description-module="Что-то продвинутое." />
      <CardModule title="Модуль 3" description-module="Что-то нечто продвинутое." />
      <CardModule title="Модуль 4" description-module="Что-то что уже ощущается как продвинутое." />
      <CardModule title="Модуль 5" description-module="Что-то ужас как продвинутое." />
      <CardModule title="Модуль 6" description-module="Чувак, молодец, ты дошел до сюда." />
    </div>
  </div>
</template>
