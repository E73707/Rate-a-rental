const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
};

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

document
  .getElementById("search-icon")
  .addEventListener("mouseover", function () {
    const form = document.querySelector(".search-container form");
    form.classList.add("expanded");
    form.removeEventListener("transitionend", collapseSearch);
  });

function collapseSearch() {
  const form = document.querySelector(".search-container form");
  form.classList.remove("expanded");
}

document
  .querySelector(".search-container form")
  .addEventListener("transitionend", collapseSearch);

const searchContainer = document.getElementById("search-container");
searchContainer.addEventListener("mouseover", function () {
  form.classList.add("expanded");
});

form.addEventListener("mouseleave", function () {
  // Only collapse the search bar if the input field is empty
  if (form.querySelector('input[type="search"]').value === "") {
    collapseSearch();
  }
});
