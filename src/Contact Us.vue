<script setup>
import Navbar from "./components/navbar.vue";
import Cards from "./components/cards.vue";
import Footer from "./components/footer.vue";
</script>


<template>
    <div>
        <navbar />
        <div class="max-w-7xl w-full min-h-[920px] flex flex-col justify-center mx-auto">
      <div class="flex flex-col items-center lg:flex-row xs:mx-5">
        <div
          class="max-w-[640px] md:min-h-[691px] w-full"
          style="background-image: url(/images/seventh-page-bg.png); background-repeat: no-repeat; background-size: cover;"
        >
          <div class="max-w-[420px] text-white mx-5 md:mx-auto my-10">
            <p
              class="text-xl md:text-[54px] font-semibold md:leading-[74px] mb-5"
            >Building stellar websites for early startups</p>
            <p
              class="text-sm md:text-base font-medium md:leading-7"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
        </div>
        <div class="max-w-[640px] w-full md:min-h-[691px] bg-[#1C1E53]">
          <div class="max-w-[432px] xs:mx-5 sm:mx-auto text-white mt-24">
            <p class="md:text-[32px] font-medium md:leading-[48px] mb-2 md:mb-4">Send inquiry</p>
            <p
              class="text-[#F4F6FC] text-xs md:text-base font-medium leading-7 mb-5 md:mb-10"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <input
              type="text"
              placeholder="Your Name"
              class="w-full mb-6 text-sm md:text-base text-[#F4F6FC] font-normal leading-7 py-2 md:py-4 pl-4 md:pl-8 border-[2px] bg-[#1C1E53] border-[#FFFFFF0D] rounded-lg"
            />
            <br />
            <input
              type="Email"
              placeholder=" Email"
              class="w-full mb-6 text-sm md:text-base text-[#F4F6FC] font-normal leading-7 py-2 md:py-4 pl-4 md:pl-8 border-[2px] bg-[#1C1E53] border-[#FFFFFF0D] rounded-lg"
            />
            <br />
            <input
              type="text"
              placeholder="Paste your Figma design URL"
              class="w-full mb-6 text-sm md:text-base text-[#F4F6FC] font-normal leading-7 py-2 md:py-4 pl-4 md:pl-8 border-[2px] bg-[#1C1E53] border-[#FFFFFF0D] rounded-lg"
            />
            <br />
            <button
              class="text-[#1B1C2B] text-xs md:text-[18px] font-semibold leading-8 bg-[#FCD980] w-full rounded-full py-2 md:py-4"
            >Send an Inquiry</button>
            <div class="flex justify-center">
              <div class="flex items-center gap-3 cursor-pointer text-white my-3 md:my-7">
                <p class="text-base font-medium mx-auto leading-7">Get in touch with us</p>
                <svg
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                    fill="#F4F6FC"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
</template>