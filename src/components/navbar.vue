<template>
  <div class="bg-[#1C1E53]">
<div class=" hidden md:block">
    <div class="max-w-[1280px] mx-auto md:py-5 py-3 xs:px-5 xl:px-0  flex flex-col md:flex-row gap-3 justify-between items-center">
      <div>
        <router-link to="/"> <img
          src="../../public/images/nav-icon.png"
          alt=""
          class="cursor-pointer"
        /></router-link>
      </div>
      <div class="flex flex-col sm:flex-row items-center gap-2 text-[#BBBBCB] md:gap-6 md:text-base text-sm " >
        <router-link to="/"><p class="text-white cursor-pointer">Home</p></router-link>
        <p class="cursor-pointer">About us</p>
        <p class="cursor-pointer">Features</p>
        <p class="cursor-pointer">Pricing</p>
        <p class="cursor-pointer">FAQ</p>
        <p class="cursor-pointer">Blog</p>
        <p
          class="border-[2px] border-[#474975] rounded-[41px] md:py-2 py-1 md:px-6 px-5 cursor-pointer"
        > 
          Contact us
        </p>
      
      </div>
    </div>
  </div>


    <!-- <nav class="bg-[#1C1E53] ">
    <div class="container px-6 py-3 mx-auto">
        <div class="md:flex justify-between items-center">
            left section
            <div class="flex justify-between items-center">
              <router-link to="/"><a href="#" class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"><img src="../../public/images/nav-icon.png" alt=""></a></router-link>
                <div class="md:hidden">
                    <button id="nav-button" type="button" class="text-white hover:text-gray-600 focus:text-gray-600 focus:outline-none">
                        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>  
                    </button>
                </div>
            </div>
            right section
            <div id="nav-menu" class="flex flex-col mt-3 md:flex-row md:mt-0 md:block ">
                <a href="#" class="text-white text-sm hover:font-medium md:mx-4">Home</a>
                <a href="#" class="text-white text-sm hover:font-medium md:mx-4">Contact</a>
                <a href="#" class="text-white text-sm hover:font-medium md:mx-4">About Us</a>
            </div>
        </div>
    </div>
</nav> -->

<div class="bg-[#1C1E53] md:hidden">
    <nav
      class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
            hover:text-indigo-400
          "
          ><img src="../../public/images/nav-icon.png" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
      <router-link to="/"><li class="text-white cursor-pointer">Home</li></router-link>
        <li class="text-gray-100 hover:text-indigo-400">About us</li>
        <li class="text-gray-100 hover:text-indigo-400">Features</li>
        <li class="text-gray-100 hover:text-indigo-400">Pricing</li>
        <li class="text-gray-100 hover:text-indigo-400">FAQ</li>
        <li class="text-gray-100 hover:text-indigo-400">Blog</li>
      </ul>
    </nav>
  </div>




  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
