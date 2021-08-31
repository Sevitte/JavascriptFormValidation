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
    var letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
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

function checkIP(iP)
{
    var ipPattern = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    if(iP.value.match(ipPattern))
    {
        return true;
    }
    else{
        alert("You have entered an invalid IP address!");
        iP.focus();  
        return false;
    }


}