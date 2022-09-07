var finalresult;
function calculate(choice){
    var n1 = document.getElementById("val1").value * 1;
    var n2 = document.getElementById("val2").value * 1;
    switch (choice){
        case 1:
        finalresult = n1 + n2;
        break;
        case 2:
        finalresult = n1 - n2;
        break;
        case 3:
        finalresult = n1 * n2;
        break;
        case 4:
        finalresult = n1 / n2;
        break;
    }
}
function result(){
    document.getElementById("result").value = finalresult;
}
function Clear(){
    document.getElementById("val1").value = "" ;
    document.getElementById("val2").value = "" ;
    document.getElementById("result").value = "" ;


}