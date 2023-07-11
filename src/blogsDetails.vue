<script setup>
import Navbar from "./components/navbar.vue";
import Cards from "./components/cards.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <div>
    <navbar />
    <div class="max-w-[1280px] mx-auto text-center md:mt-24 mt-10">
      <h1 
        class="text-[#282938] text-xl md:text-3xl lg:text-5xl lg-px-0 px-5 font-semibold text-center md:leading-10 lg:leading-[64px] leading-8 max-w-4xl mx-auto"
      >
        A UX Case Study on Creating a Studious Environment for Students
      </h1>
      <p class="text-[#282938] md:text-base text-sm font-medium leading-7 md:mt-4 mt-2 md:mb-8 mb-4">
        Andrew Jonson Posted on 27th January 2021
      </p>
      <img
        src="/images/first-page-img.png"
        alt=""
        class="max-w-[1280px] w-full px-5 2xl:px-0"
      />
    </div>

    <div class="max-w-[840px] mx-auto md:my-[90px] my-12">
      <p class="text-[#282938] text-xl md:text-3xl lg:text-4xl px-5 lg:px-0 mb-3 lg:mb-0 font-semibold leading-8 md:leading-10 lg:leading-[64px] max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p
        class="md:text-base text-sm font-normal text-[#282938] opacity-70 md:leading-7 leading-5 md:mb-10 mb-5 px-5 lg:px-0"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p
        class="text-[#282938] text-xl md:text-3xl lg:text-4xl px-5 lg:px-0 mb-3 lg:mb-0 font-semibold leading-8 md:leading-10 lg:leading-[64px] max-w-4xl mx-auto"
      >
        Ut enim ad minim veniam, quis nostrud.
      </p>

      <p class="md:text-base text-sm font-normal text-[#282938] opacity-70 md:leading-7 leading-5 md:mb-10 mb-5 px-5 lg:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ul
        class="list-disc md:text-base text-sm font-normal text-[#282938] opacity-70 md:leading-7 leading-5 md:mb-10 mb-5 px-5 lg:px-0"
      >
        <li class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </li>
        <li class="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </li>
        <li class="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </li>
      </ul>
      <p class="md:text-base text-sm font-normal text-[#282938] opacity-70 md:leading-7 leading-5 md:mb-10 mb-5 px-5 lg:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <img src="/images/page-2-img.jpg" class="md:mb-14 mb-7 px-5 lg:px-0" />
      <p
        class="text-[#282938] text-xl md:text-3xl lg:text-4xl px-5 lg:px-0 mb-3 lg:mb-0 font-semibold leading-8 md:leading-10 lg:leading-[64px] max-w-4xl mx-auto"
      >
        Ut enim ad minim veniam, quis nostrud.
      </p>
      <p
        class="md:text-base text-sm font-normal text-[#282938] opacity-70 md:leading-7 leading-5 md:mb-10 mb-5 px-5 lg:px-0"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <Footer/>
  </div>
</template>
