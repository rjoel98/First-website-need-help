function validateForm(){
    var firstName = document.forms['myForm']['forstName'].value;
}
if(firstName == null || firstName == ""){
    alert("First name is required");
    return false;
}

if(lastName == null || lastName == ""){
    alert("Last name is required);
    return false;
}
