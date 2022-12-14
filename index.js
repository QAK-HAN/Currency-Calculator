var message1 = 'Moin leude';
console.log(message1);
function mySwap(e) {
    e.preventDefault();
    var c1 = document.getElementById("currency_1");
    var c2 = document.getElementById("currency_2");
    var rate = document.getElementById("rate");
    var wrap = document.getElementById("tableWraps");
    var fHead = document.getElementById("Error");
    var tHead = document.getElementById("tableHead");
    var temp;
    function swapPart() {
        temp = c1.value;
        c1.value = c2.value;
        c2.value = temp;
        temp = "";
        var rate = document.getElementById("rate");
        var tempRate = (1 / Number(rate.value));
        rate.value = tempRate.toFixed(4);
    }
    if (c1.value == "" && c2.value == "") {
        fHead.innerHTML = "Error: please type in both your Currency´s!";
    }
    else {
        if (c1.value == "" && c2.value != "") {
            fHead.innerHTML = "Error: Currency 1 is missing!";
        }
        else {
            if (c1.value != "" && c2.value == "") {
                fHead.innerHTML = "Error: Currency 2 is missing!";
            }
            else {
                if (c1.value != "" && c2.value != "" && rate.value == "") {
                    fHead.innerHTML = "";
                    swapPart();
                }
                else {
                    if (c1.value != "" && c2.value != "" && rate.value != "" && wrap.innerHTML == "") {
                        swapPart();
                        tHead.innerHTML = "Exchange rate: " + c1.value + " / " + c2.value + " = " + rate.value;
                    }
                    else {
                        if (c1.value != "" && c2.value != "" && rate.value != "" && wrap.innerHTML != "") {
                            swapPart();
                            tHead.innerHTML = "Exchange rate: " + c1.value + " / " + c2.value + " = " + rate.value;
                            generateTable(e);
                        }
                    }
                }
            }
        }
    }
}
function generateTable(e) {
    e.preventDefault();
    var c1 = document.getElementById("currency_1");
    var c2 = document.getElementById("currency_2");
    var rate = document.getElementById("rate");
    var tempRate = (Number(rate.value));
    rate.value = tempRate.toFixed(4);
    var table = document.createElement("table");
    var wrap = document.getElementById("tableWraps");
    var tHead = document.getElementById("tableHead");
    var fHead = document.getElementById("Error");
    if (c1.value == "" && c2.value == "") {
        fHead.innerHTML = "Error: please type in both your Currency´s!";
        wrap.innerHTML = "";
    }
    else {
        if (c1.value != "" && c2.value == "") {
            fHead.innerHTML = "Error: Currency 2 is missing!";
            wrap.innerHTML = "";
        }
        else {
            if (c1.value == "" && c2.value != "") {
                fHead.innerHTML = "Error: Currency 1 is missing!";
                wrap.innerHTML = "";
            }
            else {
                tHead.innerHTML = "Exchange rate: " + c1.value + " / " + c2.value + " = " + rate.value;
                fHead.innerHTML = "";
                wrap.innerHTML = "";
                var row = table.insertRow(0);
                var cellC1 = row.insertCell(0);
                var cellC2 = row.insertCell(0);
                row.className = "tabRow";
                cellC1.innerHTML = c1.value;
                cellC2.innerHTML = c2.value;
                drawTableSection(table, rate.value);
                wrap.appendChild(table);
            }
        }
    }
}
function drawTableSection(table, rate) {
    for (var i = 1; i <= 10; i++) {
        //tableVal =
        var rowOne = table.insertRow(-1);
        var cellC1 = rowOne.insertCell(0);
        var cellC2 = rowOne.insertCell();
        rowOne.className = "tabRowOne";
        cellC1.innerHTML = i.toFixed(2);
        cellC2.innerHTML = (i * Number(rate)).toFixed(2);
    }
    for (var i = 20; i <= 100; i += 10) {
        //tableVal =
        var rowTen = table.insertRow(-1);
        var cellC1 = rowTen.insertCell(0);
        var cellC2 = rowTen.insertCell();
        rowTen.className = "tabRowTen";
        cellC1.innerHTML = i.toFixed(2);
        cellC2.innerHTML = (i * Number(rate)).toFixed(2);
    }
    for (var i = 200; i <= 1000; i += 100) {
        //tableVal =
        var rowHundred = table.insertRow(-1);
        var cellC1 = rowHundred.insertCell(0);
        var cellC2 = rowHundred.insertCell();
        rowHundred.className = "tabRowHundred";
        cellC1.innerHTML = i.toFixed(2);
        cellC2.innerHTML = (i * Number(rate)).toFixed(2);
    }
}
document.getElementById("section_input").addEventListener("submit", function (e) { mySwap(e); });
document.getElementById("section_table").addEventListener("submit", function (e) { generateTable(e); });
