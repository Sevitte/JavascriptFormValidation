function validation() {
    var date = document.simpleForm.date;
    var lastName = document.simpleForm.lastName;
    var iP = document.simpleForm.iP;
    var text = document.simpleForm.text;
    if (checkDate(date)) {
        if (checkLastName(lastName)) {
            if (checkIP(iP)) {
                if (checkText(text)) {}
            }
        }
    }
    return false;
}

function checkLastName(lastName) {
    var letters = /\b([A-ZÀ-ÿ][-,A-z. ']+[ ]*)+([A-zÀ-ÿ.']$)/;
    if (lastName.value.match(letters) && lastName.value.length > 1) {
        return true;
    } else {
        alert("You have entered and invalid Name or tried to submit an empty field!");
        lastName.focus();
        return false;
    }
}

function checkIP(iP) {
    var ipPattern = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    if (iP.value.match(ipPattern) && iP.value != "127.0.0.1") {
        return true;
    } else {
        alert("You have entered an invalid IP address or tried to submit an empty field!");
        iP.focus();
        return false;
    }
}

function checkDate(date) {
    var today = new Date();
    var givenDate = Date.parse(date.value);
    var dateDifferenceInDays = (today - givenDate) / (24 * 3600 * 1000);
    if (dateDifferenceInDays < 365 && dateDifferenceInDays > -365) {
        return true;
    } else {
        alert("Date has to be in time span of one year from today and cannot be empty!");
        date.focus();
        return false;
    }
}

function checkText(text) {
    var givenText = text.value.toString();
    var textPattern = /[a-zA-Z0-9]/;
    if (givenText.length > 0 && givenText.length < 230 && text.value.match(textPattern)) {
        return true;
    } else {
        alert("Text field cannot be empty and has to contain less than 230 characters!");
        text.focus();
        return false;
    }

}