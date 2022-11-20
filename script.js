let form = document.querySelectorAll(".form-control");

let textCard = document.querySelectorAll(".textCard");

let confirmButton = document.querySelector("#confirmButton");

let confirmScreen = document.querySelector("#confirmScreen");

let subPrincipalFormContainer = document.querySelector("#subPrincipalFormContainer");

let alertLabel = document.querySelectorAll(".alertLabel")

let yearVerification = new Date().getFullYear();

/* Input 1 */

function getAndPassValue1 () {
    let value = this.value;

    textCard[2].innerText = value;
    form[0].style.borderColor = "#dedddf";
    alertLabel[0].setAttribute("class", "form-label alertLabel invisible");
}

function exceptionTreatment1 () {
    if (form[0].value.length == 0) {
        textCard[2].innerText = "Jane Appleseed";
    } else {
        let string;

        string = form[0].value;
 
        for (let i = 0; i < 10; i++) {
            if (string.includes(i)) {
                alertLabel[0].innerText = "Wrong format, letters only";
                alertLabel[0].setAttribute("class", "form-label alertLabel visible");
                form[0].style.borderColor = "#ff0000";
                break;
            } 
        }
    }
}

/* Input 2 */

function getAndPassValue2 () {
    let value = this.value;

    textCard[1].innerText = value;
    form[1].style.borderColor = "#dedddf";
    alertLabel[1].setAttribute("class", "form-label alertLabel invisible");

    if (value.length != 19) {
        alertLabel[1].innerText = "Invalid";
        alertLabel[1].setAttribute("class", "form-label alertLabel visible");
        form[1].style.borderColor = "#ff0000";
    }
}

function exceptionTreatment2 () {
    if (textCard[1].innerText == '') {
        textCard[1].innerText = "0000 0000 0000 0000";
    } else {
        let string;

        let stringMemory = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        string = form[1].value.toUpperCase();
 
        for (let i = 0; i < 26; i++) {
            if (string.includes(stringMemory[i])) {
                alertLabel[1].innerText = "Wrong format, numbers only";
                alertLabel[1].setAttribute("class", "form-label alertLabel visible");
                form[1].style.borderColor = "#ff0000";
                break;
            } 
        }
    }
}

/* Input 3 */

function getAndPassValue3 () {
    let value = this.value;

    alertLabel[2].innerText = "Invalid";
    alertLabel[2].setAttribute("class", "form-label alertLabel visible");
    form[2].style.borderColor = "#ff0000";
    
    if (parseInt(value) <= 99 || value == '') {
        textCard[3].innerText = value;

        form[2].style.borderColor = "#dedddf";
        alertLabel[2].setAttribute("class", "form-label alertLabel invisible");

        if (parseInt(value) > 12 || parseInt(value) <= 0) {
            alertLabel[2].innerText = "Invalid";
            alertLabel[2].setAttribute("class", "form-label alertLabel visible");
            form[2].style.borderColor = "#ff0000";
        }
    }
}

function emptyVerification3 () {
    if (textCard[3].innerText == '') {
        textCard[3].innerText = "00";
    }
}

/* Input 4 */

function getAndPassValue4 () {
    let value = this.value;

    alertLabel[2].innerText = "Invalid";
    alertLabel[2].setAttribute("class", "form-label alertLabel visible");
    form[3].style.borderColor = "#ff0000";

    if (parseInt(value) <= 99 || value == '') {
        textCard[4].innerText = value;

        form[3].style.borderColor = "#dedddf";
        alertLabel[2].setAttribute("class", "form-label alertLabel invisible");
        

        if (parseInt(value) > 30 || parseInt(value) < yearVerification - 2000) {
            alertLabel[2].innerText = "Invalid";
            alertLabel[2].setAttribute("class", "form-label alertLabel visible");
            form[3].style.borderColor = "#ff0000";
        } 
    }
}

function emptyVerification4 () {
    if (textCard[4].innerText == '') {
        textCard[4].innerText = "00";
    }
}

/* Input 5 */

function getAndPassValue5 () {
    let value = this.value;

    alertLabel[3].innerText = "Invalid";
    alertLabel[3].setAttribute("class", "form-label alertLabel visible");
    form[4].style.borderColor = "#ff0000";

    if (parseInt(value) > 100 && parseInt(value) < 999 || value == '') {
        textCard[0].innerText = value;
        form[4].style.borderColor = "#dedddf";
        alertLabel[3].setAttribute("class", "form-label alertLabel invisible");

    }
}

function emptyVerification5 () {
    if (textCard[0].innerText == '') {
        textCard[0].innerText = "000";
    }
}

/* Confirm */

function confirm() {
    let cont = 0;

    for (let i = 0; i < alertLabel.length; i++) {
        if (alertLabel[i].getAttribute("class") == "form-label alertLabel visible") {
            ++cont;
            break;
        }
    }

    for (let i = 0; i < form.length; i++) {
        if (form[i].value.length == 0) {
            form[i].style.borderColor = "#ff0000";    

            if (i <= 2) {
                alertLabel[i].innerText = "Can't be blank";
                alertLabel[i].setAttribute("class", "form-label alertLabel visible");
            } else {
                alertLabel[i - 1].innerText = "Can't be blank";
                alertLabel[i - 1].setAttribute("class", "form-label alertLabel visible");
            }

            ++cont;
        }
    }

    if (cont == 0) {
        subPrincipalFormContainer.setAttribute("class", "invisible");
    
        confirmScreen.setAttribute("class", "visible");
    
        confirmButton.innerText = "Continue";
    }
}


form[0].addEventListener("input", getAndPassValue1);
form[0].addEventListener("focusout", exceptionTreatment1);

form[1].addEventListener("input", getAndPassValue2);
form[1].addEventListener("focusout", exceptionTreatment2);

form[2].addEventListener("input", getAndPassValue3);
form[2].addEventListener("focusout", emptyVerification3);

form[3].addEventListener("input", getAndPassValue4);
form[3].addEventListener("focusout", emptyVerification4);

form[4].addEventListener("input", getAndPassValue5);
form[4].addEventListener("focusout", emptyVerification5);

confirmButton.addEventListener("click", confirm);