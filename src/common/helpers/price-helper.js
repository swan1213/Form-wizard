import { COUNTRY_INFORMATIONS_CONSTANT, PACKAGE_CONSTANT } from "..";

export const getPremiumPrice = (age, countryValue) => {
  const selectedCountry = COUNTRY_INFORMATIONS_CONSTANT.find(
    (c) => c.value === countryValue
  );

  return 10 * age * (selectedCountry?.rate || 0);
};

export const getAdditionalPriceByPackage = (premiumPrice, pkgValue) => {
  if (!pkgValue) return 0;

  const selectedPkg = PACKAGE_CONSTANT.find((p) => p.value === pkgValue);
  return (premiumPrice * (selectedPkg?.addOnPercentage || 0)) / 100;
};
