const tabItems = document.querySelectorAll(".tab-item");

const tabContentIems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  removeBorder();
  this.classList.add("tab-border");
  removeShow();
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(`#${this.id}-content`);

  tabContentItem.classList.add("show");
}
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentIems.forEach(item => item.classList.remove("show"));
}

tabItems.forEach(item => item.addEventListener("click", selectItem));
