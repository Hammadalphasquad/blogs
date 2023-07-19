<script setup>
import Navbar from "./components/navbar.vue";
import Cards from "./components/cards.vue";
import Footer from "./components/footer.vue";
</script>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          icon: "/images/fourth-page-icon1.png",
          title: "Uses Client First",
          subtitle:
            "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
        },
        {
          id: 2,
          icon: "/images/fourth-page-icon2.png",
          title: "Two Free Revision Round",
          subtitle:
            "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
        },
        {
          id: 3,
          icon: "/images/fourth-page-icon3.png",
          title: "Template Customization",
          subtitle:
            "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
        },
        {
          id: 4,
          icon: "/images/fourth-page-icon4.png",
          title: "24/7 Support",
          subtitle:
            "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
        },
        {
          id: 5,
          icon: "images/fourth-page-icon5.png",
          title: "Quick Delivery",
          subtitle:
            "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
        },
        {
          id: 6,
          icon: "/images/fourth-page-icon6.png",
          title: "Hands-on approach",
          subtitle:
            "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
        }
      ]
    };
  }
};
</script>

<template>
  <div>
    <navbar />
    <!-- First-portion -->
    <div class="bg-[#1C1E53] xs:min-h-[300px] md:min-h-[760px] flex flex-col justify-center">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-28 xs:px-5 md:px-5 lg:px-0">
        <div class="max-w-[582px] md:flex-none flex flex-col gap-3">
          <p
            class="text-2xl md:text-[54px] font-semibold md:leading-[74px] text-white lg:mb-6"
          >Building stellar websites for early startups</p>
          <p
            class="xs:text-xs md:text-base text-white font-normal md:leading-7 opacity-70 md:mb-12"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div class="flex xs:flex-col md:flex-row gap-6 my-4 md:my-0 md:gap-10 items-center">
            <p
              class="text-xs lg:text-[18px] font-semibold text-[#1B1C2B] md:leading-8 bg-[#FCD980] border-[#FCD980] rounded-[41px] px-3 md:px-6 py-2 md:py-2 cursor-pointer"
            >View our work</p>
            <div class="flex items-center gap-2 lg:gap-5 cursor-pointer text-white">
              <p class="md:text-base  text-xs font-medium md:leading-7">View More</p>
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
        <div class="xs:mb-10">
          <img
            src="../public/images/first-page-bg.png"
            alt/>
        </div>
      </div>
    </div>

    <!-- Second-portion -->
    <div class="bg-[#F4F6FC] py-16 md:py-32">
      <div
        class="max-w-7xl px-6 lg:px-0 mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-48"
      >
        <div class="max-w-[405px] flex flex-col gap-4 md:gap-8">
          <p class="text-[#282938] text-lg md:text-2xl lg:text-5xl font-semibold leading[64px]">How we work</p>
          <p class="text-[#282938] opacity-70 text-sm md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur
            <br />adipiscing elit, sed do eiusmod tempor.
          </p>
          <div class="flex items-center gap-5 cursor-pointer">
            <p class="text-[#2405F2] text-sm md:text-lg font-medium leading-8">Get in touch with us</p>
            <svg
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#2405F2"
              />
            </svg>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-8 md:gap-12 mr-5 lg:mr-0">
          <div class="max-w-[328px]">
            <img src="../public/images/second-page-icon1.png" alt class="mb-2 md:mb-4" />
            <p class="text-[#282938] text-[32px] font-medium leading[48px] md:mb-2">Strategy</p>
            <p
              class="text-[#282938] text-base leading-7 opacity-70"
            >Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          </div>

          <div class="max-w-[328px]">
            <img src="../public/images/second-page-icon2.png" alt class="mb-2 md:mb-4" />
            <p class="text-[#282938] text-[32px] font-medium leading[48px] md:mb-2">Wireframing</p>
            <p
              class="text-[#282938] text-base leading-7 opacity-70"
            >Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          </div>

          <div class="max-w-[328px]">
            <img src="../public/images/second-page-icon3.png" alt class="mb-2 md:mb-4" />
            <p class="text-[#282938] text-[32px] font-medium leading[48px] md:mb-2">Design</p>
            <p
              class="text-[#282938] text-base leading-7 opacity-70"
            >Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          </div>

          <div class="max-w-[328px]">
            <img src="../public/images/second-page-icon4.png" alt class="mb-2 md:mb-4" />
            <p class="text-[#282938] text-[32px] font-medium leading[48px] md:mb-2">Development</p>
            <p
              class="text-[#282938] text-base leading-7 opacity-70"
            >Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          </div>
        </div>
      </div>
    </div>

    <!-- third-portion -->
    <div class="max-w-7xl mx-auto flex flex-col gap-6 md:gap-16 justify-center px-5 lg:px-0">
      <div class="flex justify-between items-center mt-10 md:mt-16">
        <p
          class="text-[#282938] text-lg md:text-5xl font-semibold md:leading-[64px]"
        >View our projects</p>
        <div class="flex items-center gap-5 cursor-pointer">
          <p class="text-[#282938] text-sm md:text-base font-medium md:leading-7">View More</p>
          <svg
            width="25"
            height="12"
            viewBox="0 0 25 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
              fill="#282938"
            />
          </svg>
        </div>
      </div>
      <div class="relative flex flex-col md:flex-row gap-6 mb-20">
        <div>
          <img src="../public/images/third-por-img1.png" alt class />
          <div
            class="md:max-w-[396px] flex flex-col justify-end pb-12 z-10 xs:hidden lg:block md:absolute top-0 min-h-[200px] md:min-h-[600px] bg-gradient-to-tl from-[#0d0f43] to-[#797cb9] opacity-80"
          >
            <div class="max-w-[313px] mx-8">
              <p
                class="text-white text-sm md:text-2xl font-semibold md:leading-9 mb-2 md:mb-4"
              >Workhub office Webflow Webflow Design</p>
              <p
                class="text-white text-xs font-medium md:leading-7 opacity-80 mb-3 md:mb-7"
              >Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
              <p class="text-[#FCD980] text-base font-medium leading-7 cursor-pointer">View project</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-7">
          <img src="../public/images/third-por-img2.png" alt />
          <img src="../public/images/third-por-img3.png" alt />
        </div>
      </div>
    </div>

    <!-- fourth-portion -->
    <div class="bg-[#F4F6FC] flex flex-col justify-center sm:min-h-[850px] md:min-h-[1191px] xs:px-5 lg:px-0">
      <div class="max-w-7xl mx-auto flex flex-col gap-10">
        <div class="max-w-[625px] mx-auto">
          <p class="text-sm md:text-base font-medium leading-7 text-center my-5 md:mb-5">Features</p>
          <p
            class="text-xl md:text-5xl font-semibold md:leading-[64px] text-center"
          >Design that solves problems, one product at a time</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-auto pb-5 lg:pb-0">
          <div
            v-for="(item,index) in items"
            :key="index"
            class="max-w-[405px] bg-white px-6 md:px-12 py-5 md:py-10 flex flex-col gap-2 md:gap-4"
          >
            <p>
              <img :src=" item.icon " />
            </p>
            <p
              class="text-[#282938] text-lg md:text-2xl font-medium leading-4 md:leading-9"
            >{{ item.title }}</p>
            <p
              class="text-[#282938] text-sm md:text-base font-normal leading-7 max-w-[324px]"
            >{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- fifth-portion -->
    <div class="bg-[#F4F6FC] bg-opacity-50 min-h-[506px] flex flex-col justify-center">
      <div class="max-w-7xl mx-auto my-10">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 mx-5 lg:mx-0">
          <div class="max-w-[340px] text-[#282938]">
            <p
              class="text-lg md:text-[38px] font-semibold leading-7 md:leading-[56px] mb-2 md:mb-0"
            >What our clients say about us</p>
            <p
              class="text-sm md:text-base font-normal leading-5 md:leading-7 opacity-70"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
          <div class="text-[#282938] max-w-[843px] flex flex-col gap-12">
            <p
              class="md:text-[32px] font-medium md:leading-[48px]"
            >"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</p>
            <div class="flex justify-between items-center">
              <img src="../public/images/fifth-por-icon.png" alt />
              <svg
                class="cursor-pointer"
                width="108"
                height="48"
                viewBox="0 0 108 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="83.1002" cy="24" rx="24.0997" ry="24" fill="#5239FA" />
                <path
                  d="M77.4146 35L76.0005 31.7805L85.031 24.0894L76.0005 16.2195L77.4146 13L89.0005 23.374V25.1626L77.4146 35Z"
                  fill="white"
                />
                <ellipse
                  cx="24.1"
                  cy="24"
                  rx="24.0997"
                  ry="24"
                  transform="rotate(-180 24.1 24)"
                  fill="white"
                />
                <path
                  opacity="0.6"
                  d="M28.5864 13L30.0005 16.2195L20.97 23.9106L30.0005 31.7805L28.5864 35L17.0005 24.626L17.0005 22.8374L28.5864 13Z"
                  fill="#282938"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- six-portion -->
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
                <p class="text-[#2405F2] text-base md:text-2xl font-medium leading-9">03</p>
                <div
                  class="max-w-[624px] text-sm md:text-[24px] font-medium md:leading-9 my-3 md:my-6"
                >
                  <p>How do you communicate?</p>
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
                <p class="text-[#2405F2] text-base md:text-2xl font-medium leading-9">04</p>
                <div
                  class="max-w-[624px] text-sm md:text-[24px] font-medium md:leading-9 my-3 md:my-6"
                >
                  <p>I have a bigger project. Can you handle it?</p>
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
                <p class="text-[#2405F2] text-base md:text-2xl font-medium leading-9">05</p>
                <div
                  class="max-w-[624px] text-sm md:text-[24px] font-medium md:leading-9 my-3 md:my-6"
                >
                  <p>What is your class naming convention?</p>
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
          </div>
        </div>
      </div>
    </div>

    <!-- seventh-portion -->
    <div class="max-w-7xl w-full min-h-[920px] flex flex-col justify-center mx-auto">
      <div class="flex flex-col items-center lg:flex-row xs:mx-5">
        <div
          class="max-w-[640px] md:min-h-[691px] w-full"
          style="background-image: url(../public/images/seventh-page-bg.png); background-repeat: no-repeat; background-size: cover;"
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

    <!-- eight-portion -->
    <cards />

    <!-- Footer -->
    <Footer />
  </div>
</template>