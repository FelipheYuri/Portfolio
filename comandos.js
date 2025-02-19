let videos = [...document.body.children[3].querySelectorAll("div")];
let realVideos = [...document.body.children[3].querySelectorAll(".videos")];
let knownTitle = document.querySelector(".known-title");
let projectsTitle = document.querySelector(".projects-title");
let scTitle = document.querySelector(".sc-title");
let subtitles = [...document.querySelectorAll(".video-title")];

setInterval(() => {
    let pageY = document.body.getBoundingClientRect().y;
    if (pageY <= -300 && pageY > -349) {
        videos.map(video => {
            video.style.transform = "scale(0.1)";
        });
        knownTitle.style.opacity = "10%"
    } else if (pageY <= -350 && pageY > -399) {
        videos.map(video => {
            video.style.transform = "scale(0.2)";
        });
        knownTitle.style.opacity = "20%";
    } else if (pageY <= -400 && pageY > -449) {
        videos.map(video => {
            video.style.transform = "scale(0.3)";
        });
        knownTitle.style.opacity = "30%";
    } else if (pageY <= -450 && pageY > -499) {
        videos.map(video => {
            video.style.transform = "scale(0.4)";
        });
        knownTitle.style.opacity = "40%";
    } else if (pageY <= -500 && pageY > -549) {
        videos.map(video => {
            video.style.transform = "scale(0.5)";
        });
        knownTitle.style.opacity = "50%";
    } else if (pageY <= -550 && pageY > -599) {
        videos.map(video => {
            video.style.transform = "scale(0.6)";
        });
        knownTitle.style.opacity = "60%";
    } else if (pageY <= -600 && pageY > -649) {
        videos.map(video => {
            video.style.transform = "scale(0.7)";
        });
        knownTitle.style.opacity = "70%";
    } else if (pageY <= -650 && pageY > -699) {
        videos.map(video => {
            video.style.transform = "scale(0.8)";
        });
        knownTitle.style.opacity = "80%";
    } else if (pageY <= -700 && pageY > -749) {
        videos.map(video => {
            video.style.transform = "scale(0.9)";
        });
        knownTitle.style.opacity = "90%";
    } else if (pageY <= -750) {
        videos.map(video => {
            video.style.transform = "scale(1)";
        });
        knownTitle.style.opacity = "100%";
    }

    if (pageY <= -1600 && pageY > -1649) {
        projectsTitle.style.opacity = "10%";
    } else if (pageY <= -1650 && pageY > -1699) {
        projectsTitle.style.opacity = "20%";
    } else if (pageY <= -1700 && pageY > -1749) {
        projectsTitle.style.opacity = "30%";
    } else if (pageY <= -1750 && pageY > -1799) {
        projectsTitle.style.opacity = "40%";
    } else if (pageY <= -1800 && pageY > -1849) {
        projectsTitle.style.opacity = "50%";
    } else if (pageY <= -1850 && pageY > -1899) {
        projectsTitle.style.opacity = "60%";
    } else if (pageY <= -1900 && pageY > -1949) {
        projectsTitle.style.opacity = "70%";
    } else if (pageY <= -1950 && pageY > -1999) {
        projectsTitle.style.opacity = "80%";
    } else if (pageY <= -2000 && pageY > -2049) {
        projectsTitle.style.opacity = "90%";
    } else if (pageY <= -2050) {
        projectsTitle.style.opacity = "100%";
    }
    if (pageY >= -2949) {
        scTitle.style.opacity = "100%";
    } else if (pageY <= -2950 && pageY > -3049) {
        scTitle.style.opacity = "10%";
    } else if (pageY <= -3050 && pageY > -3099) {
        scTitle.style.opacity = "20%";
    } else if (pageY <= -3100 && pageY > -3149) {
        scTitle.style.opacity = "30%";
    } else if (pageY <= -3150 && pageY > -3199) {
        scTitle.style.opacity = "40%";
    } else if (pageY <= -3200 && pageY > -3249) {
        scTitle.style.opacity = "50%";
    } else if (pageY <= -3250 && pageY > -3299) {
        scTitle.style.opacity = "60%";
    } else if (pageY <= -3300 && pageY > -3349) {
        scTitle.style.opacity = "70%";
    } else if (pageY <= -3350 && pageY > -3399) {
        scTitle.style.opacity = "80%";
    } else if (pageY <= -3400 && pageY > -3449) {
        scTitle.style.opacity = "90%";
    } else if (pageY <= -3450) {
        scTitle.style.opacity = "100%";
    }

    if (pageY <= -1600 && pageY > -1649) {
        projectsTitle.style.opacity = "10%";
    } else if (pageY <= -1650 && pageY > -1699) {
        projectsTitle.style.opacity = "20%";
    } else if (pageY <= -1700 && pageY > -1749) {
        projectsTitle.style.opacity = "30%";
    } else if (pageY <= -1750 && pageY > -1799) {
        projectsTitle.style.opacity = "40%";
    } else if (pageY <= -1800 && pageY > -1849) {
        projectsTitle.style.opacity = "50%";
    } else if (pageY <= -1850 && pageY > -1899) {
        projectsTitle.style.opacity = "60%";
    } else if (pageY <= -1900 && pageY > -1949) {
        projectsTitle.style.opacity = "70%";
    } else if (pageY <= -1950 && pageY > -1999) {
        projectsTitle.style.opacity = "80%";
    } else if (pageY <= -2000 && pageY > -2049) {
        projectsTitle.style.opacity = "90%";
    } else if (pageY <= -2050) {
        projectsTitle.style.opacity = "100%";
    }

}, 50);




realVideos[0].addEventListener("mouseenter", () => {
    subtitles[0].style.transform = "translateY(2vmin)";
    subtitles[0].style.fontSize = "4vmin";
});
realVideos[0].addEventListener("mousemove", () => {
    subtitles[0].style.transform = "translateY(2vmin)";
    subtitles[0].style.fontSize = "4vmin";
});
realVideos[0].addEventListener("mouseout", () => {
    subtitles[0].style.transform = "translateY(0vmin)";
    subtitles[0].style.fontSize = "3.5vmin";
});

realVideos[1].addEventListener("mousemove", () => {
    subtitles[1].style.transform = "translateY(2vmin)";
    subtitles[1].style.fontSize = "4vmin";
});
realVideos[1].addEventListener("mouseenter", () => {
    subtitles[1].style.transform = "translateY(2vmin)";
    subtitles[1].style.fontSize = "4vmin";
});
realVideos[1].addEventListener("mouseout", () => {
    subtitles[1].style.transform = "translateY(0vmax)";
    subtitles[1].style.fontSize = "3.5vmin";
});

realVideos[2].addEventListener("mousemove", () => {
    subtitles[2].style.transform = "translateY(2vmin)";
    subtitles[2].style.fontSize = "4vmin";
});
realVideos[2].addEventListener("mouseenter", () => {
    subtitles[2].style.transform = "translateY(2vmin)";
    subtitles[2].style.fontSize = "4vmin";
});
realVideos[2].addEventListener("mouseout", () => {
    subtitles[2].style.transform = "translateY(0vmax)";
    subtitles[2].style.fontSize = "3.5vmin";
});
