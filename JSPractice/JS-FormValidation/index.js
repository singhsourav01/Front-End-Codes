function Validate(){
    if(document.myForm.Email.value === ""){
        alert("Please provide your Email Id");
        document.myForm.Email.focus();
        return false;
    }
    
    else if(document.myForm.Password.value === ""){
        alert("Please provide your Password Id");
        document.myForm.Password.focus();
        return false;

    } 
    else{
        return true;
    }
}