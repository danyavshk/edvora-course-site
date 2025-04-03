<template>
  <div
    class="relative z-20 h-[25em] w-[22em] border-2 border-slate-500/70 rounded-[1.5em] bg-slate-500/80 text-white font-nunito p-[2em] flex flex-col gap-[1.5em] shadow-lg"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-500/70 via-slate-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5em]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(71,85,105,0.2),transparent_60%)] group-hover:animate-pulse"
    ></div>

    <h1
      class="text-[2em] font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent text-center"
    >
      Вход
    </h1>

    <form class="relative z-10 flex flex-col gap-[1em]">
      <div class="flex flex-col gap-[0.5em]">
        <label for="email" class="text-gray-300 text-sm">Email</label>
        <input
          id="email"
          type="email"
          class="h-[2.5em] px-[1em] rounded-full bg-slate-600/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
          placeholder="Введите ваш email"
        />
      </div>

      <div class="flex flex-col gap-[0.5em]">
        <label for="password" class="text-gray-300 text-sm">Пароль</label>
        <input
          id="password"
          type="password"
          class="h-[2.5em] px-[1em] rounded-full bg-slate-600/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        class="relative h-[3em] w-full mt-4 border-[1px] border-white/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group hover:border-white/50 hover:shadow-lg hover:shadow-slate-500/20 active:scale-95 transition-all duration-300 bg-white text-slate-500 hover:bg-slate-100"
      >
        <p class="relative z-10 font-medium tracking-wide">Войти</p>
        <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="relative z-10 w-5 h-5 group-hover:translate-x-[10%] transition-transform duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            ></path>
          </svg> -->
      </button>
    </form>

    <div
      class="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-sm group-hover:animate-pulse"
    ></div>
  </div>
</template>
