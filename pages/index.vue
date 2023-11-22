<template>
  <div
    class="flex flex-col overflow-hidden text-center h-screen"
  >
    <div
      class="content relative w-full min-h-screen h-full px-20 py-10 flex justify-center items-center"
    >
      <div
        class="max-w-[40.625rem] w-full flex flex-col items-center"
      >
        <img
          :src="CTALogoOne"
          alt="Logo One"
          class="mb-3 block max-w-[37.5rem] min-h-[1px] w-full"
        />
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="font-bold mb-3 bg-[#0063e5] text-[#f9f9f9] w-full tracking-widest text-lg py-4 border border-solid border-transparent rounded hover:bg-[#0483ee]"
        >
          GET ALL THERE
        </a>
        <p
          class="description text-xs leading-normal tracking-widest mb-6"
        >
          Get Premier Access to Raya and the Last Dragon for
          an additional fee with a Disney+ subscription. As
          of 03/26/21, the price of Disney+ and The Disney
          Bundle will increase by $1.
        </p>
        <img
          :src="CTALogoTwo"
          alt="Logo Two"
          class="max-w-[37.5rem] mb-5 inline-block align-bottom w-full"
        />
      </div>
      <div
        class="bg-image h-full bg-top bg-cover bg-no-repeat absolute top-0 right-0 left-0"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CTALogoOne from "@/assets/img/cta-logo-one.svg";
import CTALogoTwo from "@/assets/img/cta-logo-two.png";
</script>

<style scoped>
.bg-image {
  background-image: url("@/assets/img/login-background.jpg");
  z-index: -1;
}

.description {
  color: hsla(0, 0%, 95.3%, 1);
}

.content {
  margin-bottom: 10vw;
}
</style>
