<template>
  <!-- Desktop-Navbar -->

  <div class="bg-[#1C1E53]">
    <div class="hidden md:block">
      <div
        class="max-w-[1280px] mx-auto md:py-5 py-3 xs:px-5 xl:px-5 2xl:px-0 2xl:py-8 flex flex-col md:flex-row gap-3 justify-between items-center"
      >
        <div>
          <router-link to="/">
            <p
              class="text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400 light transition duration-300 ease-in-out hover:scale-125"
              data-text="{FINSWEET"
            >{FINSWEET</p>
          </router-link>
        </div>
        <div
          class="flex flex-col sm:flex-row items-center text-[#BBBBCB] md:gap-6 md:text-lg text-sm"
        >
          <router-link to="/">
            <p
              class="cursor-pointer transition duration-300 ease-in-out hover:scale-125"
            >Home</p>
          </router-link>
          <router-link to="/aboutus">
            <p class="cursor-pointer transition duration-300 ease-in-out hover:scale-125">About us</p>
          </router-link>
          <router-link to="/features">  <p class="cursor-pointer transition duration-300 ease-in-out hover:scale-125">Features</p> </router-link>
          <p class="cursor-pointer transition duration-300 ease-in-out hover:scale-125">Pricing</p>
          <router-link to="/FAQ"> <p class="cursor-pointer transition duration-300 ease-in-out hover:scale-125">FAQ</p></router-link>
          <router-link to="/Blogs">
            <p class="cursor-pointer transition duration-300 ease-in-out hover:scale-125">Blog</p>
          </router-link>
          <router-link to="/ContactUs"> <p
            class="border-[2px] border-[#474975] rounded-[41px] md:py-2 py-1 md:px-6 px-5 cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-[#1C1E53] hover:font-medium hover:bg-white"
          >Contact us</p></router-link>
        </div>
      </div>
    </div>
    <!-- Mobile-Navbar -->

    <div class="bg-[#1C1E53] md:hidden px-5">
      <nav class="container py-2 mx-auto">
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400"
          >
            <p class="light" data-text="{FINSWEET">{FINSWEET</p>
          </router-link>
          <!-- Mobile menu button -->

          <div @click="toggleNav" class="flex md:hidden">
            <div class="relative py-3 sm:max-w-xl mx-auto">
              <nav x-data="{ open: false }">
                <button
                  class="w-14 h-14 relative focus:outline-none bg-[#1C1E53] rounded"
                  @click="open = !open"
                >
                  <div
                    class="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <span
                      class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out"
                      :class="{'rotate-45': open,' -translate-y-1.5': !open }"
                    ></span>
                    <span
                      class="block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out"
                      :class="{'opacity-0': open } "
                    ></span>
                    <span
                      class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out"
                      :class="{'-rotate-45': open, ' translate-y-1.5': !open}"
                    ></span>
                  </div>
                </button>
              </nav>
            </div>
          </div>
        </div>
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col items-center space-y-7 mb-2">
          <router-link to="/">
            <li
              class="text-gray-100 hover:text-indigo-400 cursor-pointer transition duration-300 ease-in-out hover:scale-150"
              @click="toggleNav"
            >Home</li>
          </router-link>
          <p class="max-w-xs w-full bg-white h-[1px] opacity-50"></p>
          <router-link to="/aboutus"><li
            class="text-gray-100 hover:text-indigo-400 cursor-pointer transition duration-300 ease-in-out hover:scale-150"
            @click="toggleNav"
          >About us</li></router-link>
          <p class="max-w-xs w-full bg-white h-[1px] opacity-50"></p>
          <router-link to="/features"> <li
            class="text-gray-100 hover:text-indigo-400 cursor-pointer transition duration-300 ease-in-out hover:scale-150"
            @click="toggleNav"
          >Features</li></router-link>
          <p class="max-w-xs w-full bg-white h-[1px] opacity-50"></p>
          <li
            class="text-gray-100 hover:text-indigo-400 cursor-pointer transition duration-300 ease-in-out hover:scale-150"
            @click="toggleNav"
          >Pricing</li>
          <p class="max-w-xs w-full bg-white h-[1px] opacity-50"></p>
          <router-link to="/FAQ"><li
            class="text-gray-100 hover:text-indigo-400 cursor-pointer transition duration-300 ease-in-out hover:scale-150"
            @click="toggleNav"
          >FAQ</li></router-link>
          <p class="max-w-xs w-full bg-white h-[1px] opacity-50"></p>
          <router-link to="/Blogs"><li
            class="text-gray-100 hover:text-indigo-400 cursor-pointer transition duration-300 ease-in-out hover:scale-150"
            @click="toggleNav"
          >Blog</li></router-link>
          <p class="max-w-xs w-full bg-white h-[1px] opacity-50"></p>
          <router-link to="/ContactUs"><li
            class="border-[2px] border-[#474975] text-gray-100 hover:text-indigo-400 rounded-[41px] md:py-2 py-1 md:px-6 px-5 text-center cursor-pointer transition duration-300 ease-in-out hover:scale-125"
            @click="toggleNav"
          >Contact us</li></router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
.light {
  font-size: rem;
  color: var(--var-color);
  position: relative;
  font-weight: bold;
}

.light::before {
  position: absolute;
  content: attr(data-text);
  text-shadow: 0px 0px 20px var(--var-color);
  filter: blur(10px) brightness(0);
  animation: flicker 10s linear forwards;
  animation-delay: 1s;
}

@keyframes flicker {
  0% {
    filter: blur(5px) brightness(1);
  }
  3% {
    filter: blur(5px) brightness(0);
  }
  6% {
    filter: blur(5px) brightness(0);
  }
  7% {
    filter: blur(5px) brightness(1);
  }
  8% {
    filter: blur(5px) brightness(0);
  }
  9% {
    filter: blur(5px) brightness(1);
  }
  10% {
    filter: blur(5px) brightness(0);
  }
  20% {
    filter: blur(5px) brightness(1);
  }
  50% {
    filter: blur(5px) brightness(1);
  }
  70% {
    filter: blur(5px) brightness(1);
  }
  100% {
    filter: blur(5px) brightness(1);
  }
}
</style>



<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  }
};
</script>
