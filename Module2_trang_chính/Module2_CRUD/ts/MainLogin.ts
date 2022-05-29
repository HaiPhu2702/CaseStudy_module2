

document.getElementById("login").addEventListener('click', event => {
        let Name = (document.getElementById('name') as HTMLInputElement).value;
        let Pass = (document.getElementById('pass') as HTMLInputElement).value;
        let dataAdmin = JSON.parse(localStorage.getItem('admin'));
        let dataUser=JSON.parse(localStorage.getItem('user'));

        if (dataAdmin.Name == Name && dataAdmin.Pass == Pass) {
            window.location.href = '../index.html'
        }

        if (dataUser.name == Name && dataUser.pass == Pass) {
            // window.location.href = '../index.html'

            window.location.href = '../Web_Ban_Hang_module2/index.html'
        }





        if (dataAdmin.Name == Name && dataAdmin.Pass != Pass) {
            document.getElementById('wrongPassword').style.display = "block";
            setTimeout(() => {
                document.getElementById('wrongPassword').style.display = "none"
            }, 2000)

        }

        if (dataAdmin.Name != Name && dataAdmin.Pass == Pass) {
            document.getElementById('wrongName').style.display = "block"

            setTimeout(() => {
                document.getElementById('wrongName').style.display = "none"

            }, 2000)
        }

        if (dataAdmin.Name != Name && dataAdmin.Pass != Pass) {
            document.getElementById('wrongName').style.display = "block"
            document.getElementById('wrongPassword').style.display = "block"
            setTimeout(() => {
                document.getElementById('wrongPassword').style.display = "none"
            }, 2000);
            setTimeout(() => {
                document.getElementById('wrongName').style.display = "none"

            }, 2000)

        }
    });