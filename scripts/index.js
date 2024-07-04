var images = [
    "images/index/1.jpg",
    "images/index/2.jpg",
    "images/index/3.jpg",
    "images/index/4.jpg",
    "images/index/5.jpg",
    "images/index/6.jpg",
    "images/index/7.jpg",
    "images/index/8.jpg",
    "images/index/9.jpg",
    "images/index/10.jpg",
];
var randomImageFlag = 0;
var playBackgroundId = 1;
var intervalId=null;

function scrollToTop() {
    window.scrollTo(0, 0);
};

function showPostsNav() {
    document.getElementById("postsNav").style.display = "block";
}

function hidePostsNav() {
    document.getElementById("postsNav").style.display = "none";
}

function showToolsNav() {
    document.getElementById("toolsNav").style.display = "block";
}

function hideToolsNav() {
    document.getElementById("toolsNav").style.display = "none";
}

function randomBackground() {
    randomImageFlag = 1;
    let randomImageIndex = Math.floor(Math.random() * images.length);
    document.getElementById("mainBackground").style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0)75%, rgba(238, 238, 238, 1)),url(" + images[randomImageIndex] + ")";
    clearInterval(intervalId);
}

function showGithubText() {
    document.getElementById("GithubText").style.display = "block";
}

function hideGithubText() {
    document.getElementById("GithubText").style.display = "none";
}

function showQQText() {
    document.getElementById("QQText").style.display = "block";
}

function hideQQText() {
    document.getElementById("QQText").style.display = "none";
}

function showWeChatText() {
    document.getElementById("WeChatText").style.display = "block";
}

function hideWeChatText() {
    document.getElementById("WeChatText").style.display = "none";
}

function showLuoGuText() {
    document.getElementById("LuoGuText").style.display = "block";
}

function hideLuoGuText() {
    document.getElementById("LuoGuText").style.display = "none";
}

window.addEventListener('scroll', function () {
    let top = document.getElementById("top");
    let up = document.getElementById("up");
    let uup = document.getElementById("uup");
    if (window.scrollY > 956) {
        top.style.marginTop = '0';
        up.style.display = "block";
        uup.style.display = "block";
    }
    else {
        top.style.marginTop = '-75px';
        up.style.display = "none";
        uup.style.display = "none";
    }
});

var intervalId = setInterval(function () {
    playBackgroundId++;
    if (playBackgroundId >= images.length)
        playBackgroundId = 1;
    document.getElementById("mainBackground").style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0)75%, rgba(238, 238, 238, 1)),url(" + images[playBackgroundId] + ")";    
}, 3000);
