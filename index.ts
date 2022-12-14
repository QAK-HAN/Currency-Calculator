const message1 = 'Moin leude';
console.log(message1);



function mySwap(e: Event) {
    e.preventDefault();
    let c1 = document.getElementById("currency_1") as HTMLInputElement;
    let c2 = document.getElementById("currency_2") as HTMLInputElement;
    let rate = document.getElementById("rate") as HTMLInputElement;
    let wrap = document.getElementById("tableWraps");
    let fHead = document.getElementById("Error");
    let tHead = document.getElementById("tableHead");
    let temp;

    function swapPart() {
        temp = c1.value;
        c1.value = c2.value;
        c2.value = temp;
        temp = "";

        let rate = document.getElementById("rate") as HTMLInputElement;
        let tempRate = (1 / Number(rate.value));
        rate.value = tempRate.toFixed(4);
    }

    if (c1.value == "" && c2.value == "") {
        fHead.innerHTML = "Error: please type in both your Currency´s!";

    } else {
        if (c1.value == "" && c2.value != "") {
            fHead.innerHTML = "Error: Currency 1 is missing!";

        } else {
            if (c1.value != "" && c2.value == "") {
                fHead.innerHTML = "Error: Currency 2 is missing!";

            } else {
                if (c1.value != "" && c2.value != "" && rate.value == "") {
                    fHead.innerHTML = "";
                    swapPart();

                } else {
                    if (c1.value != "" && c2.value != "" && rate.value != "" && wrap.innerHTML == "") {
                        swapPart();
                        tHead.innerHTML = "Exchange rate: " + c1.value + " / " + c2.value + " = " + rate.value;

                    } else {
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

function generateTable(e: Event) {
    e.preventDefault();
    let c1 = document.getElementById("currency_1") as HTMLInputElement;
    let c2 = document.getElementById("currency_2") as HTMLInputElement;

    let rate = document.getElementById("rate") as HTMLInputElement;
    let tempRate = (Number(rate.value));
    rate.value = tempRate.toFixed(4);

    let table = document.createElement("table");

    let wrap = document.getElementById("tableWraps");
    let tHead = document.getElementById("tableHead")

    let fHead = document.getElementById("Error");

    if (c1.value == "" && c2.value == "") {
        fHead.innerHTML = "Error: please type in both your Currency´s!";
        wrap.innerHTML = "";

    } else {
        if (c1.value != "" && c2.value == "") {
            fHead.innerHTML = "Error: Currency 2 is missing!";
            wrap.innerHTML = "";

        } else {
            if (c1.value == "" && c2.value != "") {
                fHead.innerHTML = "Error: Currency 1 is missing!";
                wrap.innerHTML = "";

            } else {
                tHead.innerHTML = "Exchange rate: " + c1.value + " / " + c2.value + " = " + rate.value;
                fHead.innerHTML = "";
                wrap.innerHTML = "";

                let row = table.insertRow(0);
                let cellC1 = row.insertCell(0);
                let cellC2 = row.insertCell(0);

                row.className = "tabRow"
                cellC1.innerHTML = c1.value;
                cellC2.innerHTML = c2.value;

                drawTableSection(table, rate.value);

                wrap.appendChild(table);

            }

        }

    }
}

function drawTableSection(table: HTMLTableElement, rate: String,) {

    for (let i = 1; i <= 10; i++) {
        //tableVal =
        let rowOne = table.insertRow(-1);
        let cellC1 = rowOne.insertCell(0);
        let cellC2 = rowOne.insertCell();
        rowOne.className = "tabRowOne"

        cellC1.innerHTML = i.toFixed(2);
        cellC2.innerHTML = (i * Number(rate)).toFixed(2);
    }
    for (let i = 20; i <= 100; i += 10) {
        //tableVal =
        let rowTen = table.insertRow(-1);
        let cellC1 = rowTen.insertCell(0);
        let cellC2 = rowTen.insertCell();
        rowTen.className = "tabRowTen"
        cellC1.innerHTML = i.toFixed(2);
        cellC2.innerHTML = (i * Number(rate)).toFixed(2);
    }
    for (let i = 200; i <= 1000; i += 100) {
        //tableVal =
        let rowHundred = table.insertRow(-1);
        let cellC1 = rowHundred.insertCell(0);
        let cellC2 = rowHundred.insertCell();
        rowHundred.className = "tabRowHundred"
        cellC1.innerHTML = i.toFixed(2);
        cellC2.innerHTML = (i * Number(rate)).toFixed(2);
    }


}

document.getElementById("section_input").addEventListener("submit", (e: Event) => {mySwap(e);})
document.getElementById("section_table").addEventListener("submit", (e: Event) => {generateTable(e);})