function display()
{

  var  variableone=document.getElementById("varione").value;
   var  variabletwo=document.getElementById("varitwo").value;
     var variablethree=document.getElementById("varithree").value;


     console.log("variable one"+variableone);
     console.log("variable two"+variabletwo);
     console.log("variable three"+variablethree);
     

     document.body.innerHTML +="<p>Variable one:" +variableone+"</p>";
     document.body.innerHTML+="<p> Variable Two:" +variabletwo+"</p>";
     document.body.innerHTML+="<p> Variable Three:" + variablethree+"</p>"

}
