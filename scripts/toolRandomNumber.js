function randomInt(maxn,minn) {
    return Math.floor(Math.random() * (maxn - minn + 1)) + minn;
}

function randomFloat(maxn,minn) {
    return Math.random() * (maxn - minn) + minn;
}

function randomNumber() {
    let maxn = document.getElementById("maxn").value;
    let minn = document.getElementById("minn").value;
    let num1 = document.getElementById("num1").checked;
    let end = document.getElementById("end");

    maxn = parseInt(maxn);
    minn = parseInt(minn);

    if (num1)
        end.value = randomInt(maxn, minn);
    else
        end.value = randomFloat(maxn, minn);
}