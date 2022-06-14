function myFunction(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var gender=document.getElementById("gender").value;
    var country=document.getElementById("country").value;
    var text=document.getElementById("comments").value;
    alert("Your name is " + name +"\n Your email is " + email + " \n You are a " 
    + gender + "\n You are from" + country+ "\n Your was " + text);
}

function theFunction(){
            window.print();
        }
