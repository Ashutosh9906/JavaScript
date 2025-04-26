function updateInteval(){

    const now = new Date();
    let hours = now.getHours();
    const meridan = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridan}`;
    document.getElementById("clock").textContent = timeString;
}

updateInteval();
setInterval(updateInteval, 1000);