<template>
  <div class="bg-[#1C1E53]">
<div class="xs:hidden md:block">
    <div class="max-w-[1280px] mx-auto md:py-5 py-3 xs:px-5 xl:px-0  flex flex-col md:flex-row gap-3 justify-between items-center">
      <div>
        <img
          src="../../public/images/nav-icon.png"
          alt=""
          class="cursor-pointer"
        />
      </div>
      <div class="flex flex-col md:flex-row items-center gap-2 text-[#BBBBCB] md:gap-8 md:text-base text-sm " >
        <p class="text-white cursor-pointer">Home</p>
        <p class="cursor-pointer">About us</p>
        <p class="cursor-pointer">Features</p>
        <p class="cursor-pointer">Pricing</p>
        <p class="cursor-pointer">FAQ</p>
        <p class="cursor-pointer">Blog</p>
        <p
          class="border-[2px] border-[#474975] rounded-[41px] md:py-2 py-1 md:px-6 px-5 cursor-pointer"
        > 
          Contact us
        </p>
      
      </div>
    </div>
  </div>


    <nav class="bg-[#1C1E53] md:hidden ">
    <div class="container px-6 py-3 mx-auto">
        <div class="md:flex justify-between items-center">
            <!-- left section -->
            <div class="flex justify-between items-center">
                <a href="#" class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"><img src="../../public/images/nav-icon.png" alt=""></a>
                <div class="md:hidden">
                    <button id="nav-button" type="button" class="text-white hover:text-gray-600 focus:text-gray-600 focus:outline-none">
                        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>  
                    </button>
                </div>
            </div>
            <!-- right section -->
            <div id="nav-menu" class="flex flex-col mt-3 hidden md:flex-row md:mt-0 md:block">
                <a href="#" class="text-gray-800 text-sm hover:font-medium md:mx-4">Home</a>
                <a href="#" class="text-gray-800 text-sm hover:font-medium md:mx-4">Contact</a>
                <a href="#" class="text-gray-800 text-sm hover:font-medium md:mx-4">About Us</a>
            </div>
        </div>
    </div>
</nav>











  </div>
</template>







<script>

export default {
name:"navbar",
data () {
return {
  name:'Hammad'
}
},
methods :{
  updateText(){
this.name="blogsDetails"
  }
}
}
</script>