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

window.addEventListener('scroll', function () {
    let up = document.getElementById("up");
    if (window.scrollY > 0)
        up.style.display = "block";
    else 
        up.style.display = "none";
});