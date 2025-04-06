<script setup>
import ModulesCard from './ModulesCard.vue'
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl p-4">
      <ModulesCard title="Модуль 1" description-module="Основы искусственного интеллекта." />
      <ModulesCard title="Модуль 2" description-module="Продвинутые концепции ИИ." />
      <ModulesCard title="Модуль 3" description-module="Углубленное изучение алгоритмов ИИ." />
      <ModulesCard
        title="Модуль 4"
        description-module="Практическое применение ИИ в реальных задачах."
      />
      <ModulesCard title="Модуль 5" description-module="Современные подходы и тренды в ИИ." />
      <ModulesCard
        title="Модуль 6"
        description-module="Заключительный модуль: подведение итогов и перспективы."
      />
    </div>
  </div>
</template>
