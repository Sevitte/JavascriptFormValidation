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
    var datePattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    var today = new Date();
    var dateParts = date.value.toString();
    var partsOfDate;
    if (dateParts.includes(".")) {
      partsOfDate = dateParts.split(".");
    }
    if (dateParts.includes("/")) {
      partsOfDate = dateParts.split("/");
    }
    if (dateParts.includes("-")) {
      partsOfDate = dateParts.split("-");
    }
    var givenDate = Date.parse("".concat(partsOfDate[1], ".", partsOfDate[0], ".", partsOfDate[2]));
    var dateDifferenceInDays = (today - givenDate) / (24 * 3600 * 1000);
    if (date.value.match(datePattern) && dateDifferenceInDays < 365 && dateDifferenceInDays > -365) {
      return true;
    } else {
      alert("Date has to be in time span of one year from today and cannot be empty! The date pattern should fit day month year.");
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
  