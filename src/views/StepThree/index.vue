<template>
  <div class="h-full mx-2 flex justify-center items-center">
    <div
      class="w-full md:max-w-2xl md:w-full mx-5 lg:mx-0 px-5 md:px-20 py-10 md:py-20 bg-gray-100 text-center rounded-lg"
    >
      <h2 class="text-black text-4xl font-bold">Summary</h2>
      <p class="my-5 text-xl font-semibold">{{ name }} ,</p>
      <div class="my-5 text-sm">
        <p class="my-2">Name: {{ name }}</p>
        <p class="my-2">Age: {{ age }}</p>
        <p class="my-2">
          Where do you live:
          {{ selectedcountry.label }}
        </p>
        <p class="my-2">
          Package:
          {{
            selectedPackageObject.label
              .replace("__additionalPrice__", additionalPrice)
              .replace("__currency__", selectedcountry.currency)
          }}
        </p>
        <p class="my-2">
          Premium:
          {{ totalPrice + " " + selectedcountry.currency }}
        </p>
      </div>

      <!-- Back/Next Buttons -->
      <div class="flex space-x-4 text-center pb-10">
        <div
          class="mt-10 mx-auto py-2 w-2/3 text-black text-lg md:text-2xl bg-white rounded-lg cursor-pointer"
        >
          <router-link class="block" to="/step-2"> Back </router-link>
        </div>

        <div
          class="mt-10 mx-auto py-2 w-2/3 text-white text-lg md:text-2xl bg-black border-2 border-gray-200 rounded-lg cursor-pointer text-center"
        >
          <router-link class="block" to="/step-1"> Next </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  COUNTRY_INFORMATIONS_CONSTANT,
  PACKAGE_CONSTANT,
  getLocalStorageValue,
  getPremiumPrice,
  getAdditionalPriceByPackage,
  isValidFormData,
} from "@src/common";

export default {
  name: "StepThree",
  data() {
    return {
      countryInformations: COUNTRY_INFORMATIONS_CONSTANT,
      packages: PACKAGE_CONSTANT,
      name: "",
      age: 0,
      country: 0,
      pkg: 0,
      totalPrice: 0,
      selectedPackageObject: PACKAGE_CONSTANT[0], // Default
      selectedcountry: COUNTRY_INFORMATIONS_CONSTANT[0], // Default
      additionalPrice: 0,
    };
  },

  mounted() {
    this.name = getLocalStorageValue("name");
    this.age = +getLocalStorageValue("age");
    this.country = +getLocalStorageValue("country");
    this.pkg = +getLocalStorageValue("pkg");

    if (
      !isValidFormData({
        name: this.name,
        age: this.age,
        country: this.country,
        pkg: this.pkg,
      })
    ) {
      return this.$router.push("/step-2");
    }

    this.selectedPackageObject = PACKAGE_CONSTANT.find(
      (pkg) => pkg.value === this.pkg
    );

    this.selectedcountry = COUNTRY_INFORMATIONS_CONSTANT.find(
      (ci) => ci.value === this.country
    );

    const premiumPrice = getPremiumPrice(this.age, this.country);
    this.additionalPrice = getAdditionalPriceByPackage(premiumPrice, this.pkg);

    this.totalPrice = premiumPrice + this.additionalPrice;
  },
};
</script>

<style></style>
