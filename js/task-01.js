const showTextAndAmount = () => {
  const ulRefs = document.querySelector("#categories");

  let childrenAmmount = ulRefs.children.length;
  console.log(`Number of categories: ${childrenAmmount}`);

  const firstItemHeadingRef =
    ulRefs.firstElementChild.firstElementChild.textContent;
  console.log(`Category: ${firstItemHeadingRef}`);
  const firstItemChildren =
    ulRefs.firstElementChild.firstElementChild.nextElementSibling.children
      .length;
  console.log(`Elements: ${firstItemChildren}`);

  const secondItemHeadingRef =
    ulRefs.firstElementChild.nextElementSibling.firstElementChild.textContent;
  console.log(`Category: ${secondItemHeadingRef}`);
  const secondItemChildren =
    ulRefs.firstElementChild.nextElementSibling.firstElementChild
      .nextElementSibling.children.length;
  console.log(`Elements: ${secondItemChildren}`);

  const thirdItemHeadingRef =
    ulRefs.lastElementChild.firstElementChild.textContent;
  console.log(`Category: ${thirdItemHeadingRef}`);
  const thirdItemChildren =
    ulRefs.lastElementChild.firstElementChild.nextElementSibling.children
      .length;
  console.log(`Elements: ${thirdItemChildren}`);
};
showTextAndAmount();
