function check()
{
    var n=document.getElementById("num").value;
    var s=n.search(/^\d{4}-\d{4}-\d{2}$/);
    if (s!=0){
        alert("Your Phone number is not valid!");
        document.getElementById("num").focus();
        document.getElementById("num").select();
    }
    
    
    else{
        alert("Your Phone number is valid");
    }
}