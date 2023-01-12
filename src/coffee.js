export default function coffee() {
    const coffee = document.createElement("div");
    const header = document.createElement("h3");
    const para = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("div");

    header.innerText = "Coffee";
    coffee.appendChild(header);

    para.innerText = "A drink to provide you caffine and boost your day and productive by multiple times";
    coffee.appendChild(para);

    price.innerText = "Price: 10";
    coffee.appendChild(price);

    image.className = "coffee_image";

    return coffee;
}