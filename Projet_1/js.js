let loader = document.querySelector(".loading");

let content = document.querySelector(".content");

content.classList.add("test");

loader.addEventListener(
  setTimeout(() => {
    $(".loading").fadeOut(2000);
  }, 4000),
  () => null
);

setTimeout(() => {
  content.classList.remove("test");
}, 4000);
