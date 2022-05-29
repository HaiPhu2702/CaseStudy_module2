document.getElementById("resign").addEventListener('click', function (event) {
    var Name = document.getElementById('name').value;
    var Pass = document.getElementById('pass').value;
    var users = {
        name: Name,
        pass: Pass,
    };
    var data = JSON.parse(localStorage.getItem('user'));
    if (!data) {
        localStorage.setItem('user', JSON.stringify(users));
        setTimeout(function () {
            window.location.href = '../html/login.html';
        }, 1000);
    }
    else {
        if (data.name == Name) {
            var ok = confirm("ten da ton tai");
            if (ok) {
                window.location.href = '../html/Logup.html';
            }
            window.location.href = '../html/Logup.html';
        }
    }
    localStorage.setItem('user', JSON.stringify(users));
    setTimeout(function () {
        window.location.href = '../html/login.html';
    }, 1000);
});
//# sourceMappingURL=MainLogUp.js.map