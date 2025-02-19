let paper = document.querySelector(".projects-paper");
let roll = document.querySelector(".roll");
let rollImg = document.querySelector(".roll-img");

let window1To = document.querySelector("#window1-to");
let window2To = document.querySelector("#window2-to");
let window3To = document.querySelector("#window3-to");
let window4To = document.querySelector("#window4-to");
let window5To = document.querySelector("#window5-to");
let window6To = document.querySelector("#window6-to");

let window1 = document.querySelector("#window1");
let window2 = document.querySelector("#window2");
let window3 = document.querySelector("#window3");
let window4 = document.querySelector("#window4");
let window5 = document.querySelector("#window5");
let pixWindow = document.querySelector("#pix-window");
let exitIcon = [...document.querySelectorAll(".out-icon")];
let qrCodeButton = document.querySelector(".qrcode");

let rollBoll = true;

function rollClick() {
    paper.style.height = "0px";
    if (rollBoll === true) {
        if (paper.style.height === "0px" || paper.style.height === "") {
            paper.style.height = paper.scrollHeight + "px";
        } else {
            paper.style.height = "0px";
        }

        rollImg.style.transform = "rotate(180deg)";
        rollBoll = false;
    } else {
        paper.style.height = "0px";
        rollImg.style.transform = "rotate(0deg)";
        rollBoll = true;
    }
}
    
roll.addEventListener("click", rollClick);

window1To.addEventListener("click", () => {
    window1.style.display = "flex";
});

window2To.addEventListener("click", () => {
    window2.style.display = "flex";
});

window3To.addEventListener("click", () => {
    window3.style.display = "flex";
});

window4To.addEventListener("click", () => {
    window4.style.display = "flex";
});

window5To.addEventListener("click", () => {
    window5.style.display = "flex";
});

window6To.addEventListener("click", () => {
    window6.style.display = "flex";
});

qrCodeButton.addEventListener("click", () => {
    pixWindow.style.display = "flex";
})

exitIcon.map(icon => {
    icon.addEventListener("click", () => {
        window1.style.display = "none";
        window2.style.display = "none";
        window3.style.display = "none";
        window4.style.display = "none";
        window5.style.display = "none";
        window6.style.display = "none";
        pixWindow.style.display = "none"
    })
});
