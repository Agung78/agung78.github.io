function cekenkrip(){
    let kata="agung";
    let inputtext=document.getElementById("enkriptext").value;
    let inputkey=document.getElementById("enkripkey").value;
    let hasil="";
    let words="abcdefghijklmnoqrstuvwxyz";
    let enkrip="zyxwvutsrqponmlkjihgfedcba";
    let enkripword="";
    let modulus=inputkey%26;
    for(let i=0; i<inputtext.length; i++){
        if(modulus<=26){
            enkripword+=enkrip[modulus];
            modulus++;
        }else{
            enkripword+=enkrip[modulus];
            modulus=0;
        }
    }
    console.log(enkripword);
    document.getElementById("enkriphasil").value = inputtext;
}
function cekdekrip(){
    let hasil=document.getElementById("dekriptext").value;
    document.getElementById("hasildekrip").value = hasil;
}

console.log(cekenkrip);