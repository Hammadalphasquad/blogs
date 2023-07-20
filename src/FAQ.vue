<script setup>
import Navbar from "./components/navbar.vue";
import Cards from "./components/cards.vue";
import Footer from "./components/footer.vue";
</script>

<script>
export default {
  data() {
    return {
      showText: false,
      // faqs data //
      faqs: [
        {
          id: 1,
          num: "01",
          question: "How much time does it take?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 2,
          num: "02",
          question: "What is your class naming convention?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 3,
          num: "03",
          question: "How do you communicate?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 4,
          num: "04",
          question: "I have a bigger project. Can you handle it?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 5,
          num: "05",
          question: "What is your class naming convention?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    };
  },

  methods: {
    toggleText(id) {
      // Find the question by id and toggle its showText property
      const question = this.faqs.find(item => item.id === id);
      question.showText = !question.showText;
    }
  }
};
</script>
<template>
  <div>
    <navbar />

    <div class="bg-white bg-opacity-50 md:min-h-[750px] flex flex-col justify-center">
      <div class="max-w-7xl w-full mx-auto">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-52 mx-5 lg:mx-0">
          <div class="max-w-[328px] text-[#282938] mt-5 md:mt-0">
            <p
              class="text-lg md:text-[38px] font-semibold leading-8 md:leading-[56px] mb-1 md:mb-5"
            >Frequently asked questions</p>
            <p
              class="text-[#2405F2] text-[18px] leading-8 font-medium cursor-pointer"
            >Contact us for more info</p>
          </div>
          <div class="max-w-[846.31px] w-full text-[#282938]">
            <div
              v-for="item in faqs"
              :key="item.id"
              class="flex justify-between mb-4 md:mb-8 pb-4 md:pb-8 border-b-2"
            >
              <div class="flex justify-items-start gap-10">
                <p class="text-[#2405F2] text-base md:text-2xl font-medium leading-9">{{ item.num }}</p>
                <div class="max-w-[624px]">
                  <p class="text-sm md:text-[24px] font-medium md:leading-9">{{ item.question }}</p>
                  <p
                    v-if="item.showText"
                    class="text-xs md:text-lg font-medium leading-5 md:leading-8 opacity-90"
                  >{{item.answer}}</p>
                </div>
              </div>

              <!-- Plus icon -->
              <svg
                @click="toggleText(item.id)"
                class="{ 'opacity-70 cursor-pointer': !item.showText }"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  :fill="!item.showText ? '#282938' : 'none'"
                  d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z"
                />
              </svg>

              <!-- Cross icon -->
              <svg
                v-if="item.showText"
                @click="toggleText(item.id)"
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  :fill="item.showText ? '#282938' : 'none'"
                  d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z"
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