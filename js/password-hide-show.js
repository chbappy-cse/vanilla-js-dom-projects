const eyeicon = document.getElementById('eyeicon');
const password = document.getElementById('password');
const openEye = '/img/eye-open.png';
const closeEye = '/img/eye-close.png';

eyeicon.onclick = function() {
    if (password.type == 'password') {
        password.type = 'text';
        eyeicon.src = openEye;
    }else{
        password.type = 'password';
        eyeicon.src = closeEye;
    }
}