<template>
  <!-- Footer -->

  <div>
    <div class="bg-[#1C1E53]">
      <div class="max-w-[1280px] mx-auto">
        <div
          class="max-w-[1058px] flex items-start flex-col md:flex-row justify-between gap-10 md:pt-24 pt-10 px-5 2xl:px-0"
        >
          <div class="">
            <img src="/public/images/nav-icon.png" class="md:mb-[23px] xs:w-[100px] md:w-44 mb-3" />
            <p
              class="md:text-base text-sm md:font-medium md:leading-7 leading-4 text-white opacity-80 md:max-w-[399px]"
            >
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>

          <div>
            <p
              class="md:text-5xl text-xl font-semibold text-[white]  md:mb-[14px] mb-1"
            >Lets Talk!</p>
            <p
              class="max-w-[399px] text-[#F4F6FC] opacity-80 text-base font-normal md:leading-7 mb-7"
            >
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <img src="/public/images/footer-icons.png" />
          </div>
        </div>
        <div
          class="md:max-w-[517px] max-w-[275px] mt-5 flex gap-5 md:gap-10 bg-[#FCD980] py-1 pl-2 md:py-4 md:pl-9"
        >
          <div>
            <p class="text-[#282938] md:text-lg text-sm md:font-medium leading-32">Email me at</p>
            <p
              class="text-[#282938] opacity-80 md:text-base text-sm font-normal leading-7"
            >contact@website.com</p>
          </div>

          <div>
            <p class="text-[#282938] md:text-lg text-sm md:font-medium leading-32">Call us</p>
            <p
              class="text-[#282938] opacity-80 md:text-base text-sm font-normal leading-7"
            >0927 6277 28525</p>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[1280px] mx-5 xl:mx-auto flex justify-between md:py-8 py-2">
      <p
        class="text-[#282938] md:text-base text-sm md:font-medium font-normal md:leading-7 leading-5"
      >Copyright 2021, Finsweet.com</p>
      <div class="flex md:gap-8 gap-2 md:text-base text-sm font-medium md:leading-7 text-[#282938]">
        <router-link to="/">
          <p class="cursor-pointer">Home</p>
        </router-link>
        <router-link to="/aboutus"><p class="cursor-pointer">About us</p></router-link>
        <p class="cursor-pointer">Features</p>
        <p class="cursor-pointer">FAQ</p>
        <router-link to="/Blogs"><p class="cursor-pointer">Blog</p></router-link>
      </div>
    </div>
  </div>
</template>
