document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const slices = document.querySelectorAll(".slice");
  const carouselContainer = document.getElementById("carousel-container");
  let currentIndex = 0;
  let intervalId;

  function runCarousel() {
    currentIndex = (currentIndex + 1) % (slices.length - 2);
    updateCarousel();
  }

  function updateCarousel() {
    const translateValue = -currentIndex * (360 + 30);
    carousel.style.transform = `translateX(${translateValue}px)`;
  }

  function startAutoScroll() {
    intervalId = setInterval(runCarousel, 2000);
  }

  function stopAutoScroll() {
    clearInterval(intervalId);
  }
  function moveCarousel(direction) {
    if (direction === "left") {
      currentIndex =
        (currentIndex - 1 + slices.length - 2) % (slices.length - 2);
    } else {
      currentIndex = (currentIndex + 1) % (slices.length - 2);
    }
    updateCarousel();
  }
  carouselContainer.addEventListener("mouseenter", stopAutoScroll);
  carouselContainer.addEventListener("mouseleave", startAutoScroll);
  startAutoScroll();
  // Thêm sự kiện cho nút bên trái
  const leftButton = document.getElementById("left-button");
  leftButton.addEventListener("click", function () {
    clearInterval(intervalId);
    moveCarousel("left");
  });

  // Thêm sự kiện cho nút bên phải
  const rightButton = document.getElementById("right-button");
  rightButton.addEventListener("click", function () {
    clearInterval(intervalId);
    moveCarousel("right");
  });
});
// HÀM CHUYỂN ĐỔI DỮ LIỆU
function toggleFoodList(foodListId) {
  var foodList = document.getElementById(foodListId);
  var allFoodLists = document.querySelectorAll(".discover_content");

  // Ẩn tất cả các danh sách món ăn
  allFoodLists.forEach(function (list) {
    list.style.display = "none";
  });

  // Hiển thị hoặc ẩn danh sách món ăn tương ứng
  if (foodList.style.display === "none") {
    foodList.style.display = "grid";
    foodList.style.display = "grid-template-columns: 50% 50%";
  } else {
    foodList.style.display = "none";
  }
}
window.onload = function() {
  toggleFoodList('food-list-1');
}