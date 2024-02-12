const body = document.querySelector("body"),
    hourhand = document.querySelector(".hour"),
    minutehand = document.querySelector(".minute"),
    secondhand = document.querySelector(".second"),
    modeswitch = document.querySelector(".mode-switch");

    if(localStorage.getItem("mode") === "Dark Mode"){
        body.classList.add("dark");
        modeswitch.textContent = "Light Mode";
    }

    modeswitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDarkMode = body.classList.contains("dark");
        modeswitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    })

const updateTime = () => {
    //get current time & calculate 
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

    secondhand.style.transform = `rotate(${secToDeg}deg)`;
    minutehand.style.transform = `rotate(${minToDeg}deg)`;
    hourhand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();