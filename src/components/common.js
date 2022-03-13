const removeNegativeValue = (value) => {
  return Number(value?.toString().replace('-', '') ?? 0);
};

const getCategoryOptions = (category, path) => {
  let catOptions = [];
  catOptions.push({
    _id: category.id,
    name: path ? `${path} / ${category.name}` : category.name,
  });
  if (category.subCategories && category.subCategories.length > 0) {
    category.subCategories.forEach((subCat) => {
      catOptions = catOptions.concat(getCategoryOptions(subCat, category.name));
    });
  }
  return catOptions;
};

const getCategoriesOptions = (categories) => {
  let catOptions = [];
  categories.forEach((cat) => {
    catOptions = catOptions.concat(getCategoryOptions(cat));
  });
  return catOptions;
};

export {removeNegativeValue, getCategoriesOptions};
