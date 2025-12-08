function calculate(type) {
    let num1 = document.getElementById("num1").value.trim();
    let num2 = document.getElementById("num2").value.trim();

    let err1 = document.getElementById("err1");
    let err2 = document.getElementById("err2");
    let result = document.getElementById("result");

    err1.textContent = "";
    err2.textContent = "";

    if (num1 === "") {
        err1.textContent = "Enter a number";
        return;
    }
    if (num2 === "") {
        err2.textContent = "Enter a number";
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    let ans = "";

    switch (type) {
        case "add":
            ans = num1 + num2;
            break;
        case "sub":
            ans = num1 - num2;
            break;
        case "mul":
            ans = num1 * num2;
            break;
        case "div":
            ans = num1 / num2;
            break;
    }

    result.textContent = ans;
}
