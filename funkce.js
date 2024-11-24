function zavrit(cislo){
    switch(cislo){
        case 1:
            document.getElementById("rozvrh").disabled = true;
            document.getElementById("znamky").disabled = false;
            document.getElementById("absence").disabled = false;
            break
        case 2:
            document.getElementById("rozvrh").disabled = false;
            document.getElementById("znamky").disabled = true;
            document.getElementById("absence").disabled = false;
            break
        case 3:
            document.getElementById("rozvrh").disabled = false;
            document.getElementById("znamky").disabled = false;
            document.getElementById("absence").disabled = true;
            break
    }
}

function zmena(cislo) {
    switch(cislo) {
        case 1:
            document.getElementById("1.A").disabled = true;
            document.getElementById("2.A").disabled = false;
            document.getElementById("3.A").disabled = false;
            document.getElementById("4.A").disabled = false;
            document.getElementById("5.A").disabled = false;
            break;
        case 2:
            document.getElementById("1.A").disabled = false;
            document.getElementById("2.A").disabled = true;
            document.getElementById("3.A").disabled = false;
            document.getElementById("4.A").disabled = false;
            document.getElementById("5.A").disabled = false;
            break;
        case 3:
            document.getElementById("1.A").disabled = false;
            document.getElementById("2.A").disabled = false;
            document.getElementById("3.A").disabled = true;
            document.getElementById("4.A").disabled = false;
            document.getElementById("5.A").disabled = false;
            break;
        case 4:
            document.getElementById("1.A").disabled = false;
            document.getElementById("2.A").disabled = false;
            document.getElementById("3.A").disabled = false;
            document.getElementById("4.A").disabled = true;
            document.getElementById("5.A").disabled = false;
            break;
        case 5:
            document.getElementById("1.A").disabled = false;
            document.getElementById("2.A").disabled = false;
            document.getElementById("3.A").disabled = false;
            document.getElementById("4.A").disabled = false;
            document.getElementById("5.A").disabled = true;
            break;
    }
}

function save() {
    const student = document.getElementById("studentSelect").value;
    const subject = document.getElementById("subjectSelect").value;
    
}

let aktualniTdElement;

function otevrit(tdElement) {
    aktualniTdElement = tdElement;
    document.getElementById('form').style.display = 'flex';
}

function save() {
    const selectElement = document.getElementById("subjectSelect");
    const selectedValue = selectElement.value;
    aktualniTdElement.innerHTML = selectedValue;
    aktualniTdElement.style.backgroundColor = 'pink';
    document.getElementById('form').style.display = 'none';

}

function closeForm(){
    document.getElementById('form').style.display = 'none';
}

zmena(1);
zavrit(1);

