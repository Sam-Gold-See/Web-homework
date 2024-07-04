function caculate() {
    let scale1 = document.getElementById("scale1").value;
    let scale2 = document.getElementById("scale2").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let rule = document.getElementById("rule").value;
    let request = document.getElementById("request").value;
    let end = document.getElementById("end");
    let numA = 0, numB = 0, num;
    let result = '';

    scale1 = parseInt(scale1);
    scale2 = parseInt(scale2);
    request = parseInt(request);

    for (let i = num1.length-1, j=0; i>=0; j++,i--)
        if (num1[i] <= '9')
            numA += parseInt(num1[i])*Math.pow(scale1,j);
        else
            numA += (num1[i].charCodeAt(0)-'A'.charCodeAt(0)+10)*Math.pow(scale1,j);

    for (let i = num2.length - 1, j = 0; i >= 0; j++, i--)
        if (num2[i] <= '9')
            numB += parseInt(num2[i])*Math.pow(scale2,j);
        else
            numB += (num2[i].charCodeAt(0)-'A'.charCodeAt(0)+10)*Math.pow(scale2,j);
    
    if (rule == "+")
        num = numA + numB;
    else if (rule == "-")
        num = numA - numB;
    else if (rule == "*")
        num = numA * numB;
    else
        num = Math.floor(numA / numB);

    console.log(num);

    if (request < 2 || request > 36)
        return alert('目标进制无效');

    if (num === 0)
        end = '0';
    
    while (num > 0) {
        const remainder = num % request;
        result = (remainder < 10 ? remainder : String.fromCharCode(remainder + 55)) + result;
        num = Math.floor(num / request);
    }

    end.value = result;
}


