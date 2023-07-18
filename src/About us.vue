<script setup>
import Navbar from "./components/navbar.vue";
import Cards from "./components/cards.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <div>
    <navbar />

    <!-- first-portion -->
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between my-32">
        <div class="max-w-[484px] text-[#282938]">
          <p class="text-lg font-medium leading-8 mb-2">About us</p>
          <p class="text-[54px] font-semibold leading[74px] mb-7">Our designs solve problems</p>
          <p
            class="text-base font-normal leading-7 opacity-70"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div>
          <img src="../public/images/aboutus-img1.png" alt />
        </div>
      </div>
    </div>

    <!-- second-portion -->
    <div class="max-w-7xl bg-[#F4F5F5] mx-auto">
      <div class="my-32">
        <div class="text-[#282938] max-w-[950px] py-20 mx-auto flex gap-16 items-end">
          <div>
            <p class="text-base font-medium leading-7 mb-2">Who we are</p>
            <p class="text-[38px] font-semibold leading[56px] mb-4">Goal focussed</p>
            <p
              class="text-base leading-7 opacity-70"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <p class="text-[38px] font-semibold leading[56px] mb-4">Continuous improvement</p>
            <p
              class="text-base leading-7 opacity-70"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div>
          <img src="../public/images/aboutus-img2.png" alt />
        </div>
      </div>
    </div>

    <!-- third-portion -->
    <div class="max-w-7xl mx-auto text-[#282938] mb-32">
      <p class="text-5xl font-semibold leading-[64px] mb-12 text-center">The process we follow</p>
      <div class="flex">
      <div class="">
        <div class="flex items-center gap-6 mb-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#2405F2" />
          </svg>

          <svg
            width="224"
            height="3"
            viewBox="0 0 224 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              opacity="0.4"
              x1="1"
              y1="1.36621"
              x2="223"
              y2="1.36621"
              stroke="#2405F2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="2 8"
            />
          </svg>
        </div>

        <p class="text-2xl font-medium leading-9 mb-2">Planning</p>
        <p class="text-base leading-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>

      <div class="">
        <div class="flex items-center gap-6 mb-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#2405F2" />
          </svg>

          <svg
            width="224"
            height="3"
            viewBox="0 0 224 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              opacity="0.4"
              x1="1"
              y1="1.36621"
              x2="223"
              y2="1.36621"
              stroke="#2405F2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="2 8"
            />
          </svg>
        </div>

        <p class="text-2xl font-medium leading-9 mb-2">Conception</p>
        <p class="text-base leading-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>

      <div class="">
        <div class="flex items-center gap-6 mb-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#2405F2" />
          </svg>

          <svg
            width="224"
            height="3"
            viewBox="0 0 224 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              opacity="0.4"
              x1="1"
              y1="1.36621"
              x2="223"
              y2="1.36621"
              stroke="#2405F2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="2 8"
            />
          </svg>
        </div>

        <p class="text-2xl font-medium leading-9 mb-2">Design</p>
        <p class="text-base leading-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>

      <div class="">
        <div class="flex items-center gap-6 mb-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#2405F2" />
          </svg>

          <svg
            width="224"
            height="3"
            viewBox="0 0 224 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              opacity="0.4"
              x1="1"
              y1="1.36621"
              x2="223"
              y2="1.36621"
              stroke="#2405F2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="2 8"
            />
          </svg>
        </div>

        <p class="text-2xl font-medium leading-9 mb-2">Development</p>
        <p class="text-base leading-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>


      </div>
    </div>

    <!-- fourth-portion -->
    <div class="bg-[#EEF4FA]">
<div class="max-w-7xl flex flex-col gap-24 mx-auto py-32">
<div class="flex items-center justify-between">
    <div class="max-w-[550px] text-[#282938]" >
        <p class="text-base font-medium leading-7 mb-4">
            Our Mission 
        </p>
        <p class="text-[38px] font-semibold leading-[56px] mb-4">
            Inspire, Innovate,Share
        </p>
<p class="text-base leading-7 opacity-70">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
    </div>
    <img src="../public/images/aboutus-img3.png" alt="">
</div>
<div class="flex flex-row-reverse items-center justify-between">
    <div class="max-w-[550px] text-[#282938]" >
        <p class="text-base font-medium leading-7 mb-4">
            Our Vision        </p>
        <p class="text-[38px] font-semibold leading-[56px] mb-4">
            Laser focus        </p>
<p class="text-base leading-7 opacity-70">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
    </div>
    <img src="../public/images/aboutus-img4.png" alt="">
</div>
</div>
    </div>

    <!-- fifth-portion -->
    <div class="max-w-7xl mx-auto">

    </div>
  </div>
</template>