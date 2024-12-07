const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li").length - 1;

  console.log(`Category: ${categoryName} nItems: ${categoryItems}`);
});
