function login() {
    var password = document.getElementById('password').value;
    
    if (password === 'cookiesforever') {
        document.getElementById('error').classList.add('hide');
        window.location.href = 'home.html';
    } else {
        document.getElementById('error').classList.remove('hide');
    }
}
