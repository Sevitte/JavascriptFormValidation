$(document).ready(function() {

  $('#simpleForm').validate({ // initialize the plugin
    rules: {
      date: {
        required: true,
        dateITA: true,
        dateSpan: true
      },
      lastName: {
        required: true,
        minlength: 2,
        lastNamePattern: true
      },
      iP: {
        required: true,
        ipv4: true,
        notLocalhostIP: true
      },
      text: {
        required: true,
        minlength: 2,
        maxlength: 230,
        textPattern: true
      }
    }
  });

});

jQuery.validator.addMethod("lastNamePattern", function(value, element) {
  return this.optional(element) || /\b([A-ZÀ-ÿ][-,A-z. ']+[ ]*)+([A-zÀ-ÿ.']$)/.test(value);
}, 'Please enter a valid Last Name.');

jQuery.validator.addMethod("notLocalhostIP", function(value, element) {
  return this.optional(element) || value != "127.0.0.1";
}, 'Please enter an IP that is not a loopback address.');

jQuery.validator.addMethod("textPattern", function(value, element) {
  return this.optional(element) || /[a-zA-Z0-9]{2}/.test(value);
}, 'Please enter a valid message.');

jQuery.validator.addMethod("dateSpan", function(value, element) {
  var partsOfDate = splitDate(value)
  
  var parsedDate = concatParseDate(partsOfDate);

  var differenceInYears;
  
  if (leapYear(partsOfDate[2])) {
    differenceInYears = countDifferenceInYEars(parsedDate, 366);
  } else {
    differenceInYears = countDifferenceInYEars(parsedDate, 365);
  }
  if (differenceInYears >= -1 && differenceInYears <= 1) {
    return true;
  }
  return false;
}, 'Please enter the date in 1 year time span.');

function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function splitDate(value){
  var partsOfDate;
  if (value.includes("/")) {
    partsOfDate = value.split("/");
  }
  return partsOfDate;
}

function concatParseDate(partsOfDate){
	  var parsedDate = Date.parse("".concat(partsOfDate[1], ".", partsOfDate[0], ".", partsOfDate[2]));
    return parsedDate;
}

function countDifferenceInYEars(parsedDate, numberOfDaysInYear){
	var differenceInYears;
  differenceInYears = (new Date() - parsedDate) / (numberOfDaysInYear * 24 * 3600 * 1000);
  return differenceInYears
}