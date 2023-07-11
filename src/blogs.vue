<script setup>
import Navbar from "./components/navbar.vue";
import Cards from "./components/cards.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <div>
    <Navbar />
   
    <div class="max-w-[1280px] mx-auto text-center md:mt-24 mt-10">
      <h1
        class="text-[#282938] text-xl md:text-3xl lg:text-5xl md:px-5 font-semibold text-center md:leading-10 lg:leading-[64px] leading-8 max-w-4xl mx-auto"
      >
        A UX Case Study on Creating a Studious Environment for Students
      </h1>
      <p class="text-[#282938] md:text-base text-sm font-medium leading-7 md:mt-4 mt-2 md:mb-8 mb-4">
        Andrew Jonson Posted on 27th January 2021
      </p>
      <img
        src="/images/first-page-img.png"
        alt=""
        class="max-w-[1280px] w-full px-5 md:px-5 2xl:px-0"
      />
    </div>
    <div class="md:max-w-[830px] max-w-[450px] mx-auto md:mb-28 px-5 lg:px-0">
      <p class="md:text-base md:text-sm text-[#282938] font-normal opacity-70 md:leading-7 text-center md:mt-12 mt-6 max-w-[831px]">
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside.
      </p>
      <p
        class="text-base leading-7 text-[#2405F2] opacity-70 cursor-pointer text-center md:mt-4 mt-2"
      >
        Read more
      </p>
    </div>
    <p class="md:text-5xl text-xl text-[#282938] font-semibold md:leading-[64px] leading-8 text-center md:mt-32 mt-12 md:mb-16 mb-8">Our Blog</p>
    <Cards />

    <Footer/>
  </div>
</template>