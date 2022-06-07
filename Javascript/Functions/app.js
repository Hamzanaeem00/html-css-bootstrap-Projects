function hello(){
    document.write("hello every body")
}

hello();
document.write("<br>")
hello();
document.write("<br>")

//functions with parameter

function sum(a,b){
    document.write(a+b);

}

sum(30,40);

document.write("<br>");

sum(40,20);
document.write("<br>");



function name(fname,lname){
    document.write("Hello" + " "+ fname+" "+ lname )
}

name("hamza","naeem");
document.write("<br>");



//functions with return value

function Add(math, eng, science)
{
    var a = math + eng + science;

    return a;
}
function percentage(tt){
    var per = tt/300*100;
    document.write(per +"%");

}

var total = Add(80,70,60);
percentage(total);