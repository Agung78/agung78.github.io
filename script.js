function cekenkrip(){
    let inputtext=document.getElementById("enkriptext").value;
    let inputkey=document.getElementById("enkripkey").value;
    if(cekType(inputtext)==false){
        let hide=document.getElementById("hide");
        hide.setAttribute("class","open-now");
        document.getElementById("enkriphasil").value = "";
    }
    else{
        let hide=document.getElementById("hide");
        hide.setAttribute("class","hide");
        let hasil="";
        let words="abcdefghijklmnoqrstuvwxyz";
        let enkrip="zyxwvutsrqponmlkjihgfedcba";
        let enkripword="";
        let modulus=inputkey%25;
        for(let i=0; i<26; i++){
            if(modulus<25){
                enkripword+=enkrip[modulus];
                modulus++;
            }else{
                enkripword+=enkrip[modulus];
                modulus=0;
            }
        }
        for(let i=0; i<inputtext.length; i++){
            if(inputtext[i]==' '){
                hasil+=' ';
            }else{
                for(let j=0; j<enkripword.length; j++){
                    if(inputtext[i].toLowerCase()==words[j]){
                        hasil+=(enkripword[j].toUpperCase()+enkripword[j]);
                    }
                }
            }
        }
        document.getElementById("enkriphasil").value = hasil;
    }
}
function cekdekrip(){
    let inputtext=document.getElementById("dekriptext").value;
    let inputkey=document.getElementById("dekripkey").value;
    if(cekType(inputtext)==false){
        let hide=document.getElementById("hide");
        hide.setAttribute("class","open-now");
        document.getElementById("hasildekrip").value = "";
    }else{
        let hide=document.getElementById("hide");
        hide.setAttribute("class","hide");
        let hasil="";
        let words="abcdefghijklmnoqrstuvwxyz";
        let enkrip="zyxwvutsrqponmlkjihgfedcba";
        let enkripword="";
        let dekrip="";
        let modulus=inputkey%25;
        for(let i=0; i<inputtext.length; i+=2){
            dekrip+=inputtext[i];
        }
        for(let i=0; i<26; i++){
            if(modulus<25){
                enkripword+=enkrip[modulus];
                modulus++;
            }else{
                enkripword+=enkrip[modulus];
                modulus=0;
            }
        }
        for(let i=0; i<dekrip.length; i++){
            if(inputtext[i]==' '){
                hasil+=' ';
            }else{
                for(let j=0; j<enkripword.length; j++){
                    if(dekrip[i].toLowerCase()==enkripword[j]){
                        hasil+=words[j];
                    }
                }
            }
        }
        document.getElementById("hasildekrip").value = hasil;
    }
}

function cekType(huruf){
    let alfa="abcdefghijklmnopqrstuvwxyz";
    let hasil;
    for(let i=0; i<huruf.length; i++){
        hasil=false;
        for(let j=0; j<alfa.length; j++){
            if(huruf[i].toLowerCase()==alfa[j]){
                hasil=true;
                break;
            }
        }
        if(hasil!=true){
            hasil=false;
            break;
        }
    }

    return hasil;
}


