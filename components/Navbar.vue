<template>
  <header
    class="fixed top-0 left-0 right-0 h-20 flex justify-between items-center px-9 tracking-normal z-[3]"
  >
    <a
      class="w-20 mt-1 min-w-16 inline-block hover:cursor-pointer"
    >
      <img
        :src="Logo"
        alt="Disney+ Logo"
        class="block w-full"
      />
    </a>

    <ul
      v-if="username"
      class="hidden md:flex items-center flex-nowrap h-full justify-end relative ml-6 mr-auto"
    >
      <li class="navmenu-link flex items-center px-3 gap-2">
        <img
          :src="HOME"
          alt="HOME"
          class="h-5 min-w-[1.25rem] w-5"
        />
        <span
          class="navmenu-text text-sm tracking-widest py-[2px] whitespace-nowrap relative"
        >
          HOME
        </span>
      </li>
      <li class="navmenu-link flex items-center px-3 gap-2">
        <img
          :src="SEARCH"
          alt="SEARCH"
          class="h-5 min-w-[1.25rem] w-5"
        />
        <span
          class="navmenu-text tracking-widest text-sm py-[2px] whitespace-nowrap relative"
        >
          SEARCH
        </span>
      </li>
      <li class="navmenu-link flex items-center px-3 gap-2">
        <img
          :src="WATCHLIST"
          alt="WATCHLIST"
          class="h-5 min-w-[1.25rem] w-5"
        />
        <span
          class="navmenu-text tracking-widest text-sm py-[2px] whitespace-nowrap relative"
        >
          WATCHLIST
        </span>
      </li>
      <li class="navmenu-link flex items-center px-3 gap-2">
        <img
          :src="ORIGINALS"
          alt="ORIGINALS"
          class="h-5 min-w-[1.25rem] w-5"
        />
        <span
          class="navmenu-text tracking-widest text-sm py-[2px] whitespace-nowrap relative"
        >
          ORIGINALS
        </span>
      </li>
      <li class="navmenu-link flex items-center px-3 gap-2">
        <img
          :src="MOVIES"
          alt="MOVIES"
          class="h-5 min-w-[1.25rem] w-5"
        />
        <span
          class="navmenu-text tracking-widest text-sm py-[2px] whitespace-nowrap relative"
        >
          MOVIES
        </span>
      </li>
      <li class="navmenu-link flex items-center px-3 gap-2">
        <img
          :src="SERIES"
          alt="SERIES"
          class="h-5 min-w-[1.25rem] w-5"
        />
        <span
          class="navmenu-text tracking-widest text-sm py-[2px] whitespace-nowrap relative"
        >
          SERIES
        </span>
      </li>
    </ul>

    <NuxtLink
      v-if="!username"
      to="/login"
      class="py-2 px-4 uppercase border border-solid border-[#f9f9f9] rounded transition-all hover:bg-[#f9f9f9] hover:text-black hover:border-transparent"
    >
      Login
    </NuxtLink>
    <UserCard
      :username="username"
      v-else
    />
  </header>
</template>

<script lang="ts" setup>
import Logo from "@/assets/img/logo.svg";

import HOME from "@/assets/img/home-icon.svg";
import SEARCH from "@/assets/img/search-icon.svg";
import WATCHLIST from "@/assets/img/watchlist-icon.svg";
import ORIGINALS from "@/assets/img/original-icon.svg";
import MOVIES from "@/assets/img/movie-icon.svg";
import SERIES from "@/assets/img/series-icon.svg";

const user = useSupabaseUser();
const username = computed(() => {
  if (user.value === null) {
    return null;
  }

  return user?.value.user_metadata.full_name;
});
</script>

<style lang="scss" scoped>
.navmenu-link {
  .navmenu-text {
    color: rgb(249, 249, 249);

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms
        cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    cursor: pointer;
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
}
</style>
