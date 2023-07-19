<script setup>
import Navbar from "./components/navbar.vue";
import Cards from "./components/cards.vue";
import Footer from "./components/footer.vue";
</script>
<template>
<div>
    <navbar/>

    <div class="bg-white bg-opacity-50 md:min-h-[750px] flex flex-col justify-center">
      <div class="max-w-7xl w-full mx-auto">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-52 mx-5 lg:mx-0">
          <div class="max-w-[328px] text-[#282938] mt-5 md:mt-0">
            <p
              class="text-lg md:text-[38px] font-semibold leading-8 md:leading-[56px]"
            >Frequently asked questions</p>
            <p class="text-[#2405F2] text-[18px] leading-8 font-medium">Contact us for more info</p>
          </div>
          <div class="max-w-[846.31px] text-[#282938]">
            <div class="flex justify-between mb-4 md:mb-8">
              <div class="flex justify-items-start gap-10">
                <p class="text-[#2405F2] text-base md:text-2xl font-medium leading-9">01</p>
                <div class="max-w-[624px]">
                  <p
                    class="text-sm md:text-[24px] font-medium md:leading-9"
                  >How much time does it take?</p>
                  <p
                    class="text-xs md:text-lg font-medium leading-5 md:leading-8 opacity-90"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <svg
                class="opacity-70 cursor-pointer"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z"
                  fill="#282938"
                />
              </svg>
            </div>
            <hr class="text-[#ECECF1] border-[1px]" />
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-between gap-10">
                <p class="text-[#2405F2] md:text-2xl font-medium md:leading-9">02</p>
                <div
                  class="max-w-[624px] text-sm md:text-[24px] font-medium md:leading-9 my-3 md:my-6"
                >
                  <p>What is your class naming convention?</p>
                </div>
              </div>
              <svg class="opacity-70 cursor-pointer"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z"
                  fill="#282938"
                />
              </svg>
            </div>
            <hr class="text-[#ECECF1] border-[1px]" />
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-between gap-10">
                <p class="text-[#2405F2] text-base md:text-2xl font-medium leading-9">03</p>
                <div
                  class="max-w-[624px] text-sm md:text-[24px] font-medium md:leading-9 my-3 md:my-6"
                >
                  <p>How do you communicate?</p>
                </div>
              </div>
              <svg class="opacity-70 cursor-pointer"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z"
                  fill="#282938"
                />
              </svg>
            </div>
            <hr class="text-[#ECECF1] border-[1px]" />
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-between gap-10">
                <p class="text-[#2405F2] text-base md:text-2xl font-medium leading-9">04</p>
                <div
                  class="max-w-[624px] text-sm md:text-[24px] font-medium md:leading-9 my-3 md:my-6"
                >
                  <p>I have a bigger project. Can you handle it?</p>
                </div>
              </div>
              <svg class="opacity-70 cursor-pointer"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z"
                  fill="#282938"
                />
              </svg>
            </div>
            <hr class="text-[#ECECF1] border-[1px]" />
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-between gap-10">
                <p class="text-[#2405F2] text-base md:text-2xl font-medium leading-9">05</p>
                <div
                  class="max-w-[624px] text-sm md:text-[24px] font-medium md:leading-9 my-3 md:my-6"
                >
                  <p>What is your class naming convention?</p>
                </div>
              </div>
              <svg class="opacity-70 cursor-pointer"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z"
                  fill="#282938"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
</div>
</template>