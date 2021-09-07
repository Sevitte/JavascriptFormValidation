$(document).ready(function () {

    $('#simpleForm').validate({ // initialize the plugin
        rules: {
            date: {
                required: true,
                dateITA: true
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
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || /\b([A-ZÀ-ÿ][-,A-z. ']+[ ]*)+([A-zÀ-ÿ.']$)/.test( value );
}, 'Please enter a valid Last Name.');

jQuery.validator.addMethod("notLocalhostIP", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || value != "127.0.0.1";
}, 'Please enter an IP that is not a loopback address.');

jQuery.validator.addMethod("textPattern", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || /[a-zA-Z0-9]{2}/.test( value );
}, 'Please enter a valid message.');