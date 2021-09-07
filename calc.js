function calc(){
    var lang1 = document.getElementById('lang1').value
    var lang2 = document.getElementById('lang2').value
    var charnum = document.getElementById('charnum').value
    var doctype =  document.getElementById('doctype').value
    var special =  document.getElementById('special').value
    var charpriceA = 1
    var charpriceB = 1
    var result = 5000
    var ft = " Ft"
    var info = "A kalkulátor megközelítő értéket ad! Vegye fel velünk a kapcsolatot, és kérjen pontos árajánlatot!"
    var arajanlat = "Árajánlatot kérek!"



    
    switch(doctype){
        case "recorpic":
            charpriceA *= 1.75;
            break;
        case "mirror":
        case "handwriting":
        case "ppt":
            charpriceA *= 1.10;
            break;
    }

    switch(special){
        case "urgent":
            charpriceB *= 1.4;
            break;
        case "lektor":
            charpriceB *= 1.5;
            break;
        case "instant":
            charpriceB *= 1.9;
            break;
    }
    
    
    if(lang1 ==="error1"){
        alert("Válassza ki fordítandó dokumentum nyelvét!");
        return;
    }
    if(lang2 ==="error2"){
        alert("Válassza ki milyen nyelvre szeretné fordítani a dokumentumot!");
        return;
    }
    if(lang1 === lang2){
       alert("A választott nyelvek megegyeznek, kérjük próbálja újra");
       return;
    }
    if(charnum == 0){
        alert("A számításhoz írja be a dokumentum karakterszámát!");
        return;
    }
    
    switch(lang1){
        case "en":
        case "de":
            lang1 = "base";
            break;
    }
    switch(lang2){
        case "en":
        case "de":
            lang2 = "base";
            break;
    }
    
    if(lang1 === "hun" && lang2 === "base" ){
        result += charnum * (2 * charpriceA * charpriceB);
    }
    else if(lang1 === "base" && lang2 === "hun" ){
        result += charnum * (2 * charpriceA * charpriceB);
    }
    else if(lang1 === "hun" && lang2 !== "base" ){
        result += charnum * (3.5 * charpriceA * charpriceB);
    }
    else if(lang1 !== "base" && lang2 === "hun" ){
        result += charnum * (3.5 * charpriceA * charpriceB);
    }
    else if(lang1 !== "hun" && lang2 !== "hun" ){
        result += charnum * (4 * charpriceA * charpriceB);
    }
    
/*
    switch (doctype){
        case "recorpic":
            result *= 1.75;
            break;
        case "mirror":
        case "handwriting":
        case "ppt":
            result *= 1.10;
            break;
    }

    switch(special){
        case "urgent":
            result *= 1.4;
            break;
        case "lektor":
            result *= 1.5;
        case "instant":
            result *= 1.9;
    }
*/
    document.getElementById("finalresult").innerHTML = Math.round(result) + ft;
    document.getElementById("info").innerHTML = info;
    document.getElementById("arajanlat").innerHTML = arajanlat ;
}
