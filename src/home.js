export default function home() {
    const content = document.querySelector("#content");
    const wrapper = document.createElement("div");
    const header = document.createElement("div");
    const info = document.createElement("div");
    const hours = document.createElement("div");
    const location = document.createElement("div");

    header.innerText = "Uttam Sagar";
    header.className= "home_header";
    wrapper.appendChild(header);

    info.innerText = "Uttam Sagar being one of the oldest restaurant in over south India. The customer service and the food serving time is what makes it popular in a fast moving city as Bangalore";
    info.className = "home_info";
    wrapper.appendChild(info);

    hours.innerHTML = "<h2>Hours</h2><p>Sunday: 8am - 8pm</p><p>Monday: 6am - 6pm</p><p>Tuesday: 6am - 6pm</p><p>Wednesday: 6am - 6pm</p><p>Thrusday: 6am - 10pm</p><p>Friday: 6am - 10pm</p><p>Saturday: 6am - 10pm</p>";
    hours.className = "home_hours";
    wrapper.appendChild(hours);

    location.innerHTML = "<h2>Location</h2><p>123 MS nagar,Bangalore</p>";
    location.className = "home_location";
    wrapper.appendChild(location);

    content.appendChild(wrapper);
}