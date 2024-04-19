const itemsEl = document.querySelectorAll(".item");

const liQty = itemsEl.length;
console.log(`Number of categories: `, liQty);

itemsEl.forEach((itemEl) => {
  const titleEl = itemEl.querySelector("h2").textContent;
  const ulQty = itemEl.querySelectorAll("ul > li");
  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${ulQty.length}`);
});
