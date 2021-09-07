function calc(){
    var lang1 = document.getElementById('lang1').value
    var lang2 = document.getElementById('lang2').value
    var charnum = document.getElementById('charnum').value
    var doctype =  document.getElementById('doctype').value
    var special =  document.getElementById('special').value
    var result = 5000
    var ft = " Ft"
    var info = "A kalkulátor megközelítő értéket ad! Vegye fel velünk a kapcsolatot, és kérjen pontos árajánlatot!"
    var arajanlat = "Árajánlatot kérek!"
    var extra1 = 1
    var extra2 = 1

    
     switch (doctype){
        case "recorpic":
            extra1 = 1.75;
            break;
        case "mirror":
        case "handwriting":
        case "ppt":
            extra1 = 1.10;
            break;
    }

    switch(special){
        case "urgent":
            extra2 = 1.4;
            break;
        case "lektor":
            extra2 = 1.5;
        case "instant":
            extra2 = 1.9;
    }
    
    
    if(lang1 ==="error1"){
        alert("Válassza ki fordítandó dokumentum nyelvét!");
        return;
    }
    else if(lang2 ==="error2"){
        alert("Válassza ki milyen nyelvre szeretné fordítani a dokumentumot!");
        return;
    }
    else if(lang1 === lang2){
       alert("A választott nyelvek megegyeznek, kérjük próbálja újra");
       return;
    }
    else if(charnum == 0){
        alert("A számításhoz írja be a dokumentum karakterszámát!");
        return;
    }
    switch(lang1){
        case "en":
        case "de"
            lang1 = "base";
    }
    switch(lang2){
        case "en":
        case "de"
            lang2 = "base";
    }
    
    if(lang1 === "hun" && lang2 === "base" ){
        result += charnum * (2*extra1*extra2);
    }
    else if(lang1 === "base" && lang2 === "hun" ){
        result += charnum * (2*extra1*extra2);
    }
    else if(lang1 === "hun" && lang2 !== "base" ){
        result += charnum * (3.5*extra1*extra2);
    }
    else if(lang1 !== "base" && lang2 === "hun" ){
        result += charnum * (3.5*extra1*extra2);
    }
    else if(lang1 !== "hun" && lang2 !== "hun" ){
        result += charnum * (4*extra1*extra2);
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
