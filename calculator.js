$(document).ready(function () {
    var a = b = c = 0;
    var isPTBH = false;
    var count = 0;
    var output = "";
    $("#PT2").click(function () {
        if (!!isPTBH) {
            document.getElementById("input").innerHTML = "";
            document.getElementById("result").innerHTML = "";
            a = b = c = 0;
            count = 0;
        }
        else {
            document.getElementById("input").innerHTML = "Nhập A:"
            document.getElementById("result").innerHTML = "Ax^2 + Bx + C = 0"
        }
        isPTBH = !isPTBH;
    })
    $(".numbers").click(function () {
        document.getElementById("input").innerHTML += $(this).text()
    })
    $("#C").click(function () {
        document.getElementById("input").innerHTML = "";
        document.getElementById("result").innerHTML = "";
    })
    $("#DEL").click(function () {
        var element = document.getElementById("input").innerHTML;
        if (element.length === 0) return;
        if (element.length === 1) document.getElementById("input").innerHTML = "";
        document.getElementById("input").innerHTML = element.slice(0, element.length - 1);
        document.getElementById("result").innerHTML = "";
    })
    $("#inverse").click(function () {
        var input = document.getElementById("input").innerHTML;
        if (input === "0" || input.length === 0) document.getElementById("result").innerHTML = "Math Error!"
        else document.getElementById("result").innerHTML = eval(1 / input) && (document.getElementById("input").innerHTML = "1/" + input);
    })
    $("#resultAll").click(function () {
        if (!!isPTBH) {
            if(count > 3){
                // donothing
            }
            if (count === 3) {
                count = 0;
                var delta = b * b - 4 * a * c;
                var result;
                isPTBH = false;
                document.getElementById("result").innerHTML = "ket qua: ";
                if (delta < 0) {
                    document.getElementById("result").innerHTML = "phuong trinh vo nghiem";
                }
                else if (delta === 0) {
                    result = "x = " + (-b / (2 * a))
                    document.getElementById("result").innerHTML =  result
                }
                else {
                    result = "x1 = " + ((-b - Math.sqrt(delta)) / (2 * a)) + " & " + "x2 = " + ((-b + Math.sqrt(delta)) / (2 * a))
                    document.getElementById("result").innerHTML = result
                }
            }
            else {
                count++;
                input = document.getElementById("input").innerHTML;
                if (count === 1) {
                    a = eval(input.slice(7, input.length))
                    if (a == "0" || a.length === 0) {
                        document.getElementById("result").innerHTML = "phuong trinh ko la PTBH"
                        document.getElementById("input").innerHTML = "Nhập A:"
                        count = 0;
                    }
                    else {
                        if (a === "1") {
                            output = document.getElementById("result").innerHTML = "x^2 + Bx + C = 0"
                        } else {
                            output = a + "x^2 + Bx + C = 0"
                        }
                        document.getElementById("input").innerHTML = "Nhập B:"
                        document.getElementById("result").innerHTML = output
                    }
                }
                else if (count === 2) {
                    b = input.slice(7, input.length)
                    if (b.length === 0) {
                        b = 0;
                        if (a === "1") output = "x^2      + C = 0"
                        else output = a + "x^2      + C = 0"
                    }
                    else {
                        if (a == "1") {
                            if (b == "1") output = "x^2 +  x + C = 0"
                            else output = "x^2 + " + b + "x + C = 0"
                        } else {
                            if (b == "1") output = a + "x^2 +  x + C = 0"
                            else output = a + "x^2 + " + b + "x + C = 0"
                        }
                        document.getElementById("input").innerHTML = "Nhập C:"
                    }
                    document.getElementById("result").innerHTML = output

                } else {
                    c = input.slice(7, input.length)
                    if (c.length === 0) {
                        c = 0
                        if (a == "1" && b == "1") output = "x^2 +  x     = 0"
                        else if (b == "1") output = a + "x^2 +  x     = 0"
                        else if (a == "1") output = "x^2 + " + b + "x     = 0" 
                        else output = a + "x^2 + " + b + "x     = 0"
                    }
                    if(c == "1"){
                        if (a == "1" && b == "1") output = "x^2 +  x + 1 = 0"
                        else if (b == "1") output = a + "x^2 +  x + 1 = 0"
                        else if (a == "1") output = "x^2 + " + b + "x + 1 = 0" 
                        else output = a + "x^2 + " + b + "x + 1 = 0"
                    } else {
                        if (a == "1" && b == "1") output = "x^2 +  x + " + c + " c  = 0"
                        else if (b == "1") output = a + "x^2 +  x + " + c + " = 0"
                        else if (a == "1") output = "x^2 + " + b + "x + " + c + " = 0" 
                        else output = a + "x^2 + " + b + "x + " + c + " = 0"
                    }
                    document.getElementById("result").innerHTML = output
                }

            }
        }
        else {
            var input = document.getElementById("input").innerHTML;
            if (input.length == 0) document.getElementById("result").innerHTML = "Math Error!";
            else {
                document.getElementById("result").innerHTML = eval(input);
            }
        }
    })
});