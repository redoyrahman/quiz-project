function check(){
    var user=["shakil"];
    var pass=["shakil123"];
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;

    if(user[0] === username && pass[0] === password){
        return true;
    }
    else {
        alert("Wrong password");
        return false;
    }
}

