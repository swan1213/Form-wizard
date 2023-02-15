export const isValidFormData = (data) => {
  try {
    if (!data) return false;

    const { name, age, pkg, country } = data;

    if (!name) return false;
    if (typeof age !== "number" || age < 0 || age > 100) return false;
    if (typeof pkg !== "number" || pkg < 0) return false;
    if (typeof country !== "number" || country < 0) return false;

    return true;
  } catch (e) {
    return false;
  }
};
