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
      <div class="flex md:flex-row flex-col gap-5 md:gap-0 justify-between my-10 md:my-32 px-5 lg:px-0">
        <div class="max-w-[484px] text-[#282938] text-center md:text-left">
          <p class="md:text-lg font-medium leading-8 mb-2">About us</p>
          <p class="text-2xl md:text-[54px] font-semibold md:leading-[74px] mb-3 md:mb-7">Our designs solve problems</p>
          <p
            class="text-sm md:text-base font-normal md:leading-7 opacity-70"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div>
          <img src="../public/images/aboutus-img1.png" alt />
        </div>
      </div>
    </div>

    <!-- second-portion -->
    <div class="max-w-7xl bg-[#F4F5F5] mx-auto">
      <div class="my-10 md:my-32">
        <div class="text-[#282938] max-w-[950px] flex flex-col md:flex-row gap-8 md:gap-16 py-10 md:py-20 mx-5 lg:mx-auto  items-end">
          <div>
            <p class="text-sm md:text-base font-medium md:leading-7 mb-2">Who we are</p>
            <p class="text-lg md:text-[38px] font-semibold  md:leading-[56px] mb-2 md:mb-4">Goal focussed</p>
            <p
              class="text-sm md:text-base md:leading-7 opacity-70"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <p class="text-lg md:text-[38px] font-semibold   md:leading-[56px] mb-2 md:mb-4">Continuous improvement</p>
            <p
              class="text-sm md:text-base md:leading-7 opacity-70"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="px-5 lg:px-0">
          <img src="../public/images/aboutus-img2.png" class="pb-5 md:pb-0" alt />
        </div>
      </div>
    </div>

    <!-- third-portion -->
    <div class="max-w-7xl mx-5 lg:mx-auto text-[#282938] mb-32 ">
      <p class="text-2xl md:text-5xl font-semibold leading-[64px] mb-6 md:mb-12 text-center">The process we follow</p>
      <div class="flex flex-col lg:flex-row">
      <div class="">
        <div class="flex justify-center lg:justify-start items-center gap-6 my-4 md:my-8">
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

        <p class="text-xl md:text-2xl font-medium md:leading-9 mb-2 lg:text-start text-center">Planning</p>
        <p class="md:text-base md:leading-7 lg:text-start text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>

      <div class="">
        <div class="flex justify-center lg:justify-start items-center gap-6 my-4 md:my-8">
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

        <p class="text-xl md:text-2xl font-medium leading-9 mb-2 lg:text-start text-center">Conception</p>
        <p class="text-base md:leading-7 lg:text-start text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>

      <div class="">
        <div class="flex justify-center lg:justify-start items-center gap-6 my-4 md:my-8">
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

        <p class="text-xl md:text-2xl font-medium leading-9 mb-2 lg:text-start text-center">Design</p>
        <p class="text-base md:leading-7 lg:text-start text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>

      <div class="">
        <div class="flex justify-center lg:justify-start items-center gap-6 my-4 md:my-8">
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

        <p class="text-xl md:text-2xl font-medium leading-9 mb-2 lg:text-start text-center">Development</p>
        <p class="text-base md:leading-7 lg:text-start text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
      </div>


      </div>
    </div>

    <!-- fourth-portion -->
    <div class="bg-[#EEF4FA]">
<div class="max-w-7xl flex flex-col gap-12 md:gap-24 mx-5 lg:mx-auto py-10 md:py-32">
<div class="flex lg:flex-row flex-col items-center justify-between">
    <div class="max-w-[550px] text-[#282938]" >
        <p class="text-sm md:text-base font-medium md:leading-7 md:mb-4">
            Our Mission 
        </p>
        <p class="text-lg md:text-[38px] font-semibold leading-[56px] md:mb-4">
            Inspire, Innovate,Share
        </p>
<p class="text-sm md:text-base md:leading-7 opacity-70 mb-5 md:mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
    </div>
    <img src="../public/images/aboutus-img3.png" alt="">
</div>
<div class="flex flex-col lg:flex-row-reverse items-center justify-between">
    <div class="max-w-[550px] text-[#282938]" >
        <p class="text-sm md:text-base font-medium md:leading-7 md:mb-4">
            Our Vision        </p>
        <p class="text-lg md:text-[38px] font-semibold leading-[56px] md:mb-4">
            Laser focus        </p>
<p class="text-sm md:text-base md:leading-7 opacity-70 mb-5 md:mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
    </div>
    <img src="../public/images/aboutus-img4.png" alt="">
</div>
</div>
    </div>

    <!-- fifth-portion -->
    <div class="max-w-7xl mx-5 lg:mx-auto my-10 md:my-32">
<p class="text-[#282938] text-xl md:text-5xl font-semibold md:leading-[64px] text-center">
  The benefits of working with us
</p>
<div class="grid lg:grid-cols-3 gap-8 mx-5 md:mx-auto my-12">
<div class="bg-[#F4F6FC] p-12">
  <img src="../public/images/aboutus-icon1.png" class="mb-3 md:mb-5" alt="">
  <p class="text-[#282938] text-6 font-medium leading-9">
    Customize with ease
  </p>
  <p class="text-[#282938] text-4 max-w-[300px]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
  </p>
</div>
<div class="bg-[#F4F6FC] p-12">
  <img src="../public/images/aboutus-icon2.png" class="mb-3 md:mb-5" alt="">
  <p class="text-[#282938] text-6 font-medium leading-9">
    Perfectly Responsive  </p>
  <p class="text-[#282938] text-4 max-w-[300px]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
  </p>
</div>
<div class="bg-[#F4F6FC] p-12">
  <img src="../public/images/aboutus-icon3.png" class="mb-3 md:mb-5" alt="">
  <p class="text-[#282938] text-6 font-medium leading-9">
    Friendly Support  </p>
  <p class="text-[#282938] text-4 max-w-[300px]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
  </p>
</div>
</div>

<img src="../public/images/aboutus-icons.png" class="" alt="">
    </div>

    <!-- sixth-portion -->
    <div class="bg-[#F4F6FC]">
<div class="max-w-7xl md:py-32 mx-auto">
  <p class="text-[#282938] text-2xl md:text-5xl font-semibold leading-[64px] text-center">
    Meet our team</p>
    <div class="flex flex-col lg:flex-row mx-5 lg:mx-auto justify-center gap-8 py-6 md:my-12">
<div class="bg-white p-12 text-center">
  <img src="../public/images/aboutus-team1.png" class="mx-auto" alt="">
  <p class="text-[#282938] text-6 font-medium leading-9">
    John Smith
  </p>
  <p class="text-[#282938] text-4 max-w-[300px]  mx-auto">
    CEO  </p>
</div>
<div class="bg-white p-12 text-center">
  <img src="../public/images/aboutus-team2.png" class="mx-auto" alt="">
  <p class="text-[#282938] text-6 font-medium leading-9">
    Simon Adams</p>
  <p class="text-[#282938] text-4 max-w-[300px]  mx-auto">
    CTO  </p>
</div>
<div class="bg-white p-12 text-center">
  <img src="../public/images/aboutus-team3.png" class="mx-auto" alt="">
  <p class="text-[#282938] text-6 font-medium leading-9">
    Paul Jones  </p>
  <p class="text-[#282938] text-4 max-w-[300px]  mx-auto">
    Design Lead  </p>
</div>
<div class="bg-white p-12 text-center">
  <img src="../public/images/aboutus-team4.png" class="mx-auto" alt="">
  <p class="text-[#282938] text-6 font-medium leading-9">
    Sara Hardin  </p>
  <p class="text-[#282938] text-4 max-w-[300px]">
    Project Manager  </p>
</div>
</div>
</div>
    </div>

    <Footer />
  </div>
</template>