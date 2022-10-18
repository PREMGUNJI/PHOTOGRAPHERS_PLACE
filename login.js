function login() {
    var uname1 = '12';
    var pwd2 = '123456';

    var uname = document.getElementById("email").value;
    var pwd4 = document.getElementById("pwd4").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (uname == '') {
        alert("please enter user name.");
    } else if (pwd4 == '') {
        alert("enter the password");
    } else if (!filter.test(uname)) {
        alert("Enter valid email id.");
    } else if (uname == uname1) {
        if (pwd4 != pwd2) {
            alert('Invalid Username/Password');
            document.getElementById('pwd4').value = '';
        }
    } else {

        alert('Thank You for Login & Redirecting to photographers place');

        window.location = "photographer's_place.html";
    }
}
//Reset Inputfield code.
function clearFunc() {
    document.getElementById("email").value = "";
    document.getElementById("pwd4").value = "";
}