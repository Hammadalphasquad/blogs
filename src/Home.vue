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
        { id: 1,
         icon: '/images/fourth-page-icon1.png',
         title: 'Uses Client First',
         subtitle:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        },
        { id: 2,
         icon: '/images/fourth-page-icon2.png',
         title: 'Two Free Revision Round',
         subtitle:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        },
        { id: 3,
         icon: '/images/fourth-page-icon3.png',
         title: 'Template Customization',
         subtitle:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        },
        { id: 4,
         icon: '/images/fourth-page-icon4.png',
         title: '24/7 Support',
         subtitle:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        },
        { id: 5,
         icon: 'images/fourth-page-icon5.png',
         title: 'Quick Delivery',
         subtitle:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        },
        { id: 6,
         icon: '/images/fourth-page-icon6.png',
         title: 'Hands-on approach',
         subtitle:'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
        },  
      ],
    };
  },
};
</script>

<template>
  <div>
    <navbar />
    <!-- First-portion -->
    <div class="bg-[#1C1E53] min-h-[760px] flex flex-col justify-center">
      <div class="max-w-7xl mx-auto flex items-center gap-28">
        <div class="max-w-[582px]">
          <p
            class="text-[54px] font-semibold leading[74px] text-white mb-6"
          >Building stellar websites for early startups</p>
          <p
            class="text-base text-white font-normal leading-7 opacity-70 mb-12"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div class="flex gap-10 items-center">
            <p
              class="text-[18px] font-semibold text-[#1B1C2B] leading-8 bg-[#FCD980] border-[#FCD980] rounded-[41px] px-6 py-2 cursor-pointer"
            >View our work</p>
            <div class="flex items-center gap-5 cursor-pointer text-white">
  <p class=" text-base font-medium leading-7">
    View More
  </p> <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
</svg>
 </div>
          </div>
        </div>
        <div>
          <img src="../public/images/first-page-bg.png" alt />
        </div>
      </div>
    </div>

    <!-- Second-portion -->
    <div class="bg-[#F4F6FC] py-32">
      <div class="max-w-7xl mx-auto flex items-start gap-48">
        <div class="max-w-[405px] flex flex-col gap-8">
          <p class="text-[#282938] text-5xl font-semibold leading[64px]">How we work</p>
          <p class="text-[#282938] opacity-70 text-[16px]">Lorem ipsum dolor sit amet, consectetur <br>adipiscing elit, sed do eiusmod tempor.</p>
          <div class="flex items-center gap-5 cursor-pointer"><p class="text-[#2405F2] text-lg font-medium leading-8">Get in touch with us</p>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#2405F2"/>
</svg>
</div>
        </div>
        <div class="grid grid-cols-2 gap-12">
          <div class="max-w-[328px]">
            <img src="../public/images/second-page-icon1.png" alt="" class="mb-4">
            <p class="text-[#282938] text-[32px] font-medium leading[48px] mb-2">Strategy</p>
            <p class="text-[#282938] text-base leading-7 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          </div>

          <div class="max-w-[328px]">
            <img src="../public/images/second-page-icon2.png" alt="" class="mb-4">
            <p class="text-[#282938] text-[32px] font-medium leading[48px] mb-2">Wireframing</p>
            <p class="text-[#282938] text-base leading-7 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          </div>

          <div class="max-w-[328px]">
            <img src="../public/images/second-page-icon3.png" alt="" class="mb-4">
            <p class="text-[#282938] text-[32px] font-medium leading[48px] mb-2">Design</p>
            <p class="text-[#282938] text-base leading-7 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          </div>

          <div class="max-w-[328px]">
            <img src="../public/images/second-page-icon4.png" alt="" class="mb-4">
            <p class="text-[#282938] text-[32px] font-medium leading[48px] mb-2">Development</p>
            <p class="text-[#282938] text-base leading-7 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          </div>


        </div>
      </div>
    </div>

<!-- third-portion -->
<div class="max-w-7xl mx-auto  flex flex-col gap-16 justify-center">
<div class="flex justify-between items-center mt-16">
  <p class="text-[#282938] text-5xl font-semibold leading-[64px]">
    View our projects
  </p>
  <div class="flex items-center gap-5 cursor-pointer">
  <p class="text-[#282938] text-base font-medium leading-7">
    View More
  </p> <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938"/>
</svg>
 </div>
</div>
<div class="relative flex gap-6 mb-20">
  <div>
<img src="../public/images/third-por-img1.png" alt="">
<div class="max-w-[396px] flex flex-col justify-end pb-12 z-10 absolute top-0 min-h-[600px] bg-gradient-to-tl from-[#0d0f43] to-[#797cb9] opacity-80">
<div class="max-w-[313px] mx-8">
<p class="text-white text-2xl font-semibold leading-9 mb-4">
  Workhub office Webflow Webflow Design
</p>
<p class="text-white font-medium leading-7 opacity-80 mb-7">
  Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam 
</p>
<p class="text-[#FCD980] text-base font-medium leading-7 cursor-pointer">
  View project
</p></div>
</div>
</div>
<div class="flex flex-col  gap-7">
  <img src="../public/images/third-por-img2.png" alt="">
  <img src="../public/images/third-por-img3.png" alt="">
</div>
</div>
</div>

<!-- fourth-portion -->
<div class="bg-[#F4F6FC] flex flex-col justify-center min-h-[1191px]">
  <div class="max-w-7xl mx-auto flex flex-col gap-10">
  <div class="max-w-[625px] mx-auto">
<p class="text-base font-medium leading-7 text-center">
  Features
</p>
<p class="text-5xl font-semibold leading-[64px] text-center ">
  Design that solves problems, one product at a time
</p></div>
<div class="grid grid-cols-3 gap-8">
    <div v-for="(item,index) in items" :key="index" class="max-w-[405px] bg-white px-12 py-10 flex flex-col gap-4 ">
      <p>
      <img :src=" item.icon ">
      </p>
      <p class="text-[#282938] text-2xl font-medium leading-9">
       {{ item.title }}
      </p>
      <p class="text-[#282938] text-base font-normal leading-7 max-w-[324px]">
{{ item.subtitle }}
      </p>
    </div>

    <!-- <div class="max-w-[405px] bg-white px-12 py-10 flex flex-col gap-4">
      <p>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 0C7.21187 0 0 7.21187 0 16C0 24.7881 7.21187 32 16 32C24.7881 32 32 24.7881 32 16C32 7.21187 24.7881 0 16 0ZM14.0637 23.2775L7.05713 16.271L9.7085 13.6196L14.1864 18.0975L23.1759 9.9255L25.6991 12.6996L14.0637 23.2775Z" fill="#2405F2"/>
</svg>
      </p>
      <p class="text-[#282938] text-2xl font-medium leading-9">
        Two Free Revision Round
      </p>
      <p class="text-[#282938] text-base font-normal leading-7 max-w-[324px]">
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
      </p>
    </div>

    <div class="max-w-[405px] bg-white px-12 py-10 flex flex-col gap-4">
      <p>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.80609 27.5075C8.40555 27.9078 8.40555 28.5572 8.80609 28.9575L11.4646 31.616L8.44934 34.6313C8.04907 35.0318 7.39965 35.0318 6.99937 34.6313L0.232049 27.864C-0.168495 27.4637 -0.168495 26.8143 0.232049 26.414L26.414 0.232049C26.8143 -0.168495 27.4637 -0.168495 27.864 0.232049L34.6313 6.99911C34.8316 7.19938 34.9317 7.46187 34.9317 7.72436C34.9317 7.98658 34.8316 8.24907 34.6313 8.44934L31.616 11.4646L27.9908 7.83918C27.5903 7.43864 26.9411 7.43864 26.5406 7.83918C26.1403 8.23973 26.1403 8.88887 26.5406 9.28942L30.1658 12.9146L27.8757 15.2049L25.2172 12.5461C24.8169 12.1458 24.1675 12.1458 23.7669 12.5461C23.3667 12.9467 23.3667 13.5958 23.7669 13.9963L26.4255 16.6549L24.1354 18.9452L20.5103 15.3197C20.1097 14.9195 19.4606 14.9195 19.06 15.3197C18.6597 15.7203 18.6597 16.3694 19.06 16.77L22.6852 20.3952L20.3952 22.6855L17.7366 20.0269C17.3361 19.6264 16.6869 19.6264 16.2864 20.0269C15.8861 20.4272 15.8861 21.0764 16.2864 21.4769L18.9449 24.1354L16.6549 26.4258L13.0297 22.8003C12.6292 22.4 11.98 22.4 11.5795 22.8003C11.1792 23.2008 11.1792 23.85 11.5795 24.2505L15.2047 27.8757L12.9146 30.166L10.2561 27.5075C9.85579 27.107 9.20637 27.107 8.80609 27.5075Z" fill="#2405F2"/>
</svg>
      </p>
      <p class="text-[#282938] text-2xl font-medium leading-9">
        Template Customization
      </p>
      <p class="text-[#282938] text-base font-normal leading-7 max-w-[324px]">
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
      </p>
    </div>

    <div class="max-w-[405px] bg-white px-12 py-10 flex flex-col gap-4">
      <p>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_126_549)">
<path d="M34.9994 23.686C34.9994 19.3427 32.5078 15.4665 28.7761 13.5811C28.6602 21.9086 21.9086 28.6602 13.5811 28.7761C15.4665 32.5078 19.3427 34.9994 23.686 34.9994C25.7223 34.9994 27.7026 34.4571 29.4426 33.4266L34.95 34.95L33.4266 29.4426C34.4571 27.7026 34.9994 25.7223 34.9994 23.686Z" fill="#2405F2"/>
<path d="M26.7285 13.3643C26.7285 5.99506 20.7335 0 13.3643 0C5.99506 0 0 5.99506 0 13.3643C0 15.7659 0.639267 18.1043 1.85318 20.1572L0.0491333 26.6791L6.57131 24.8753C8.62423 26.0892 10.9626 26.7285 13.3643 26.7285C20.7335 26.7285 26.7285 20.7335 26.7285 13.3643ZM11.3135 10.2539H9.2627C9.2627 7.99217 11.1025 6.15234 13.3643 6.15234C15.626 6.15234 17.4658 7.99217 17.4658 10.2539C17.4658 11.4019 16.9798 12.5052 16.132 13.2807L14.3896 14.8754V16.4746H12.3389V13.9723L14.7475 11.7677C15.1779 11.3738 15.415 10.8363 15.415 10.2539C15.415 9.12304 14.4951 8.20312 13.3643 8.20312C12.2334 8.20312 11.3135 9.12304 11.3135 10.2539ZM12.3389 18.5254H14.3896V20.5762H12.3389V18.5254Z" fill="#2405F2"/>
</g>
<defs>
<clipPath id="clip0_126_549">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
      </p>
      <p class="text-[#282938] text-2xl font-medium leading-9">
        24/7 Support
      </p>
      <p class="text-[#282938] text-base font-normal leading-7 max-w-[324px]">
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
      </p>
    </div>

    <div class="max-w-[405px] bg-white px-12 py-10 flex flex-col gap-4">
      <p>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_126_523)">
<path d="M29.3038 9.94438L31.656 7.59354C32.2263 7.02479 32.2263 6.10167 31.656 5.53146C31.0858 4.96125 30.1642 4.96125 29.594 5.53146L27.2417 7.88229C24.9463 5.985 22.0865 4.74542 18.9583 4.44938V2.91667H21.875C22.6815 2.91667 23.3333 2.26333 23.3333 1.45833C23.3333 0.653333 22.6815 0 21.875 0H13.125C12.3185 0 11.6667 0.653333 11.6667 1.45833C11.6667 2.26333 12.3185 2.91667 13.125 2.91667H16.0417V4.44938C8.28042 5.18583 2.1875 11.7367 2.1875 19.6875C2.1875 28.1313 9.05625 35 17.5 35C25.9438 35 32.8125 28.1313 32.8125 19.6875C32.8125 15.9892 31.4942 12.5942 29.3038 9.94438ZM18.9583 19.6875C18.9583 20.494 18.305 21.1458 17.5 21.1458C16.695 21.1458 16.0417 20.494 16.0417 19.6875V11.6667C16.0417 10.8602 16.695 10.2083 17.5 10.2083C18.305 10.2083 18.9583 10.8602 18.9583 11.6667V19.6875Z" fill="#2405F2"/>
</g>
<defs>
<clipPath id="clip0_126_523">
<rect width="35" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
      </p>
      <p class="text-[#282938] text-2xl font-medium leading-9">
        Quick Delivery
      </p>
      <p class="text-[#282938] text-base font-normal leading-7 max-w-[324px]">
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
      </p>
    </div>

    <div class="max-w-[405px] bg-white px-12 py-10 flex flex-col gap-4">
      <p>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.866 5.80537C25.866 5.0077 25.5547 4.25677 24.9905 3.69259L22.1734 0.8755C21.6171 0.319082 20.8273 0 20.0413 0H19.8701V5.97656H25.8661L25.866 5.80537Z" fill="#2405F2"/>
<path d="M18.1911 20.5552C18.3818 19.9764 18.7145 19.4375 19.1483 19.0008L25.8927 12.2836V7.96875H18.8934C18.3429 7.96875 17.9297 7.52323 17.9297 6.97266V0H2.98828C1.34048 0 0 1.34048 0 2.98828V31.0117C0 32.6595 1.34048 34 2.98828 34H22.8778C24.5256 34 25.8927 32.6595 25.8927 31.0117V23.5775L24.798 24.6455C24.3545 25.0852 23.8351 25.4052 23.2494 25.6008L20.0822 26.6582L19.5997 26.6845C18.802 26.6845 18.0472 26.2963 17.5783 25.6466C17.1134 24.9997 16.9869 24.1612 17.2398 23.4034L18.1911 20.5552ZM4.98047 17.9297H14.9091C15.4596 17.9297 15.9052 18.3752 15.9052 18.9258C15.9052 19.4764 15.4596 19.9219 14.9091 19.9219H4.98047C4.42989 19.9219 3.98438 19.4764 3.98438 18.9258C3.98438 18.3752 4.42989 17.9297 4.98047 17.9297ZM3.98438 14.9414C3.98438 14.3908 4.42989 13.9453 4.98047 13.9453H14.9091C15.4596 13.9453 15.9052 14.3908 15.9052 14.9414C15.9052 15.492 15.4596 15.9375 14.9091 15.9375H4.98047C4.42989 15.9375 3.98438 15.492 3.98438 14.9414ZM3.98438 22.9102C3.98438 22.3596 4.42989 21.9141 4.98047 21.9141H14.9091C15.4596 21.9141 15.9052 22.3596 15.9052 22.9102C15.9052 23.4607 15.4596 23.9062 14.9091 23.9062H4.98047C4.42989 23.9062 3.98438 23.4607 3.98438 22.9102ZM18.8934 27.8906C19.444 27.8906 19.8895 28.3361 19.8895 28.8867C19.8895 29.4373 19.4441 29.8828 18.8934 29.8828H12.9169C12.3663 29.8828 11.9208 29.4373 11.9208 28.8867C11.9208 28.3361 12.3663 27.8906 12.9169 27.8906H18.8934ZM4.98047 11.9531C4.42989 11.9531 3.98438 11.5076 3.98438 10.957C3.98438 10.4065 4.42989 9.96094 4.98047 9.96094H18.8934C19.444 9.96094 19.8895 10.4065 19.8895 10.957C19.8895 11.5076 19.444 11.9531 18.8934 11.9531H4.98047Z" fill="#2405F2"/>
<path d="M19.9956 21.4365L19.129 24.0364C18.9991 24.4259 19.3697 24.7964 19.7592 24.6663L22.3575 23.7985L19.9956 21.4365Z" fill="#2405F2"/>
<path d="M27.7321 13.2354L21.1719 19.7956L24.0011 22.6248C25.4838 21.1418 28.3689 18.2564 30.561 16.0643L27.7321 13.2354Z" fill="#2405F2"/>
<path d="M33.4149 10.3777C33.0648 10.0256 32.5492 9.82422 32.0025 9.82422C31.4557 9.82422 30.9402 10.0256 30.5881 10.3787L29.1406 11.8262L31.9694 14.6549C32.7618 13.8624 33.3095 13.3147 33.417 13.2074C34.1951 12.4281 34.195 11.1588 33.4149 10.3777Z" fill="#2405F2"/>
</svg>


      </p>
      <p class="text-[#282938] text-2xl font-medium leading-9">
        Hands-on approach
      </p>
      <p class="text-[#282938] text-base font-normal leading-7 max-w-[324px]">
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
      </p>
    </div> -->


  </div>
  </div>
  
</div>

<!-- fifth-portion -->
<div class="bg-[#F4F6FC] bg-opacity-50 min-h-[506px] flex flex-col justify-center">
<div class="max-w-7xl mx-auto">
<div class="flex gap-20">
  <div class="max-w-[340px] text-[#282938]">
    <p class="text-[38px] font-semibold leading-[56px]">
      What our clients say about us
    </p>
    <p class="text-base font-normal leading-7 opacity-70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
    </p>
  </div>
  <div class="text-[#282938] max-w-[843px] flex flex-col gap-12">
    <p class="text-[32px] font-medium leading-[48px]">
      "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
    </p>
    <div class="flex justify-between items-center">
    <img src="../public/images/fifth-por-icon.png" alt="">
    <svg class="cursor-pointer" width="108" height="48" viewBox="0 0 108 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="83.1002" cy="24" rx="24.0997" ry="24" fill="#5239FA"/>
<path d="M77.4146 35L76.0005 31.7805L85.031 24.0894L76.0005 16.2195L77.4146 13L89.0005 23.374V25.1626L77.4146 35Z" fill="white"/>
<ellipse cx="24.1" cy="24" rx="24.0997" ry="24" transform="rotate(-180 24.1 24)" fill="white"/>
<path opacity="0.6" d="M28.5864 13L30.0005 16.2195L20.97 23.9106L30.0005 31.7805L28.5864 35L17.0005 24.626L17.0005 22.8374L28.5864 13Z" fill="#282938"/>
</svg>
    </div>
    

  </div>
</div>
</div>
</div>

<!-- six-portion -->
<div class="bg-[#F4F6FC] min-h-[790px] flex flex-col justify-center">
<div class="max-w-7xl mx-auto">
<div class="flex">
<div class="max-w-[328px]">
  <p class="text-[#282938] text-[38px] font-semibold leading-[56px]">
    Frequently asked questions
  </p>
  <p>
    Contact us for more info
  </p>
</div>
</div>
</div>
</div>
  </div>
</template>