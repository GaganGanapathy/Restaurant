const tea = function() {
    const tea = document.createElement("div");
    const header = document.createElement("h3");
    const para = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("div");

    header.innerText = "Tea";
    tea.appendChild(header);

    para.innerText = "A drink which is preferred by some people over coffee to do the same effect that coffee does  (THAT'S WHAT THE TEA DRINKERS THINK!!).";
    tea.appendChild(para);

    price.innerText = "Price: 10";
    tea.appendChild(price);

    image.className = "tea_image";

    return tea;
};

export default tea;