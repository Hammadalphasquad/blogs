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
        <navbar/>
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
    <Footer/>
    </div>
</template>