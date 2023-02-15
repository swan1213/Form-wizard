<template>
  <div class="h-full flex justify-center items-center">
    <div
      class="md:max-w-2xl md:w-full mx-5 lg:mx-0 px-5 md:px-20 py-10 md:py-20 bg-gray-100 text-center rounded-lg"
    >
      <h2 class="text-black text-4xl font-bold">Hello There!</h2>
      <p class="my-10 text-xl font-semibold">
        Let's buy some insurance. It is going to take only a few steps
      </p>

      <div
        class="mt-20 mx-auto py-2 w-2/3 text-white text-2xl bg-black rounded-lg cursor-pointer"
      >
        <router-link class="block" to="/step-2"> Start </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepOne",
};
</script>

<style></style>
