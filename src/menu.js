import coffee from "./coffee";
import tea from "./tea";

    const menu = function() {
    const content = document.querySelector("#content");
    const beverage = document.createElement("div");
    beverage.id = "menu_beverage";

    const soups = document.createElement("div");
    soups.id = "menu_soups";

    const chinese = document.createElement("div");
    chinese.id = "menu_chinese";

    const beverage_header = document.createElement("h2");
    beverage_header.innerText = "Beverages";
    beverage.appendChild(beverage_header);

    const beverage_one = coffee();
    beverage.appendChild(beverage_one);

    const beverage_two = tea();
    beverage.appendChild(beverage_two);

    content.appendChild(beverage);
};
export default menu;