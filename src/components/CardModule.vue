<script setup>
defineProps({
  title: String,
  descriptionModule: String,
})
</script>

<template>
  <div
    class="relative h-[18em] w-[20em] border-2 border-slate-500/50 rounded-[1.5em] bg-slate-500/50 text-white font-nunito p-[1.5em] flex justify-center items-left flex-col gap-[1em] shadow-lg mt-10 mx-auto"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-500/50 via-slate-500/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(71,85,105,0.1),transparent_60%)] group-hover/card:animate-pulse"
    ></div>

    <div class="absolute top-4 right-4 flex gap-2">
      <div class="w-2 h-2 rounded-full bg-white/50"></div>
      <div class="w-2 h-2 rounded-full bg-white/30"></div>
      <div class="w-2 h-2 rounded-full bg-white/10"></div>
    </div>

    <div
      class="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3"
    >
      <h1
        class="text-[2.2em] font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent"
      >
        {{ title }}
      </h1>
      <p class="text-[0.9em] text-gray-300 leading-relaxed font-light">
        {{ descriptionModule }}
      </p>
    </div>

    <button
      class="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-white/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-white/50 hover:shadow-lg hover:shadow-slate-500/20 active:scale-95 transition-all duration-300 bg-white text-slate-500 hover:bg-slate-100"
    >
      <p class="relative z-10 font-medium tracking-wide">Перейти</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        ></path>
      </svg>
    </button>

    <div
      class="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-sm group-hover/card:animate-pulse"
    ></div>
  </div>
</template>
