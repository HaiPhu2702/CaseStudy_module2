document.getElementById("login").addEventListener('click', function (event) {
    var Name = document.getElementById('name').value;
    var Pass = document.getElementById('pass').value;
    var dataAdmin = JSON.parse(localStorage.getItem('admin'));
    var dataUser = JSON.parse(localStorage.getItem('user'));
    if (dataAdmin.Name == Name && dataAdmin.Pass == Pass) {
        window.location.href = '../index.html';
    }
    if (dataUser.name == Name && dataUser.pass == Pass) {
        // window.location.href = '../index.html'
        window.location.href = '../Web_Ban_Hang_module2/index.html';
    }
    if (dataAdmin.Name == Name && dataAdmin.Pass != Pass) {
        document.getElementById('wrongPassword').style.display = "block";
        setTimeout(function () {
            document.getElementById('wrongPassword').style.display = "none";
        }, 2000);
    }
    if (dataAdmin.Name != Name && dataAdmin.Pass == Pass) {
        document.getElementById('wrongName').style.display = "block";
        setTimeout(function () {
            document.getElementById('wrongName').style.display = "none";
        }, 2000);
    }
    if (dataAdmin.Name != Name && dataAdmin.Pass != Pass) {
        document.getElementById('wrongName').style.display = "block";
        document.getElementById('wrongPassword').style.display = "block";
        setTimeout(function () {
            document.getElementById('wrongPassword').style.display = "none";
        }, 2000);
        setTimeout(function () {
            document.getElementById('wrongName').style.display = "none";
        }, 2000);
    }
});
//# sourceMappingURL=MainLogin.js.map