<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: []
    };
  },

  beforeMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.cards = response.data.slice(0,6);
      })
    
  }
};
</script>

<template>
  <div class="mx-auto flex justify-center">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:mb-32 mb-10 px-5 md:px-5" >
      <div v-for="card of cards" :key="card.id" class="max-w-[405px]">
        <router-link :to="`/blogsDetails/${card.id}`">
        <img :src="card.url" alt="Blog Image" />
        <p class="text-[#282938] opacity-70 text-xs leading-7 font-medium mt-8">27 jan 2021</p>
        <p class="text-[#282938] text-2xl font-medium leading-9 mt-4 pr-10 h-[70px] overflow-hidden">{{ card.title }}</p>
        <p class="text-[#282938] opacity-70 text-base font-normal leading-7 mt-4">{{ card.body }}</p>
       
          <p class="text-[#1C1E53] text-base font-medium leading-7 mt-6 cursor-pointer flex items-center gap-3">
            Read More
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
            </svg>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
