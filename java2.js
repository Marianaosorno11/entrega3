var con=[];
console.log(con);


var n1=function()
{
var no1=document.getElementById("no1").value;
con.push(no1);
console.log(con);
document.getElementById("no1").value="";
}

var n2=function()
{
var i=0;
var no2=document.getElementById("no2").value;
var pu=con.length-1;
while(i<con.length)
{
if(no2==con[i])
{
var pc=con[pu];
con[pu]=con[i];
con[i]=pc;
con.pop();
console.log(con);
i=con.length;

document.getElementById("no2").value="";
}
else
{
i=i+1;

}
}
}


