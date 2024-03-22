function validate(){
    let uname=document.getElementById("uname").value;
    let pass=document.getElementById("upass").value;
    let par=document.getElementById("par");
    if(uname==""){
        document.getElementById("par").innerText="give inputs";
       // par.textContent="stupid fellow give inputs";

        return false;
    }
}