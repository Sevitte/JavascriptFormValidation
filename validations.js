function validation(){
    var date = document.simpleForm.date;
    var lastName = document.simpleForm.lastName;
    var iP = document.simpleForm.iP;
    var text = document.simpleForm.text;
    if(checkLastName(lastName))
    {}
    return false;
}

function checkLastName(lastName)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(lastName.value.match(letters))
    {
        return true;
    }
    else{
        alert('Last name has to contain only letters, spacebar or -');
        lastName.focus();
        return false;
    }
}