document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, nama: "Coffee Beans 1", img: "pacakage 1.jpg", price: 80000 },
      { id: 2, nama: "Coffee Beans 2", img: "package 2.jpg", price: 99000 },
      { id: 3, nama: "Coffee Beans 3", img: "package 3.jpg", price: 50000 },
      { id: 4, nama: "Coffee Beans 4", img: "package 4.jpg", price: 80000 },
    ],
  }));
});
