let shoppingList = [];

const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const displayBtn = document.getElementById("displayBtn");

function addItem(item) {
  if (!shoppingList.includes(item) && item !== "") {
    shoppingList.push(item);
  } else {
    console.log("Item already exists or is empty.");
  }
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  console.log("Shopping List:");

  for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
  }
}

function filterItems(searchTerm) {
  return shoppingList.filter(function(item) {
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

addBtn.addEventListener("click", function () {
  addItem(itemInput.value);
  itemInput.value = "";
});

removeBtn.addEventListener("click", function () {
  removeLastItem();
});

displayBtn.addEventListener("click", function () {
  displayList();

  console.log("Filtered Items:", filterItems("a"));
});