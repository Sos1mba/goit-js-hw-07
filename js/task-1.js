const numb_of_cat = document.querySelectorAll("#categories ul ");

console.log("Number of categories: " + numb_of_cat.length);

const categories = document.querySelectorAll("#categories .item");

categories.forEach((item) => {
    const category = item.querySelector("h2").textContent; // Получаем текст заголовка
    const elements = Array.from(item.querySelectorAll("ul li")); // Все элементы списка

    console.log("Category: " + category);
    console.log("Elements: " + elements.length);

});