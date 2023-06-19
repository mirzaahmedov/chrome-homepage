const keys = document.querySelectorAll(".keyboard__key");
const menu = document.querySelector(".menu");
const createForm = document.querySelector(".create__form");
const editBtn = document.querySelector(".edit__btn");

const bookmarks = loadBookmarksFromLocalStorage();

keys.forEach((key) => {
  key.addEventListener("click", () => handleKeyPress(key));
  key.addEventListener("mouseenter", () => handleMouseEnter(key));
});

window.addEventListener("keydown", (e) => {
  const key = Array.from(keys).find((key) => key.textContent === e.key);

  if (!key) {
    return;
  }

  handleKeyPress(key);
});
editBtn.addEventListener("click", () => {
  const { x, y } = editBtn.getBoundingClientRect();

  createForm.classList.add("visible");
  createForm.style.left = x - 10 + "px";
  createForm.style.top = y - 10 + "px";
});

function loadBookmarksFromLocalStorage() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  if (!bookmarks) {
    bookmarks = [];
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  return bookmarks;
}
function handleKeyPress(key) {
  key.classList.add("active");

  setTimeout(() => {
    key.classList.remove("active");
  }, 200);
}
function handleMouseEnter(key) {
  const { x, y } = key.getBoundingClientRect();

  editBtn.style.left = x + 10 + "px";
  editBtn.style.top = y + 10 + "px";
}
