


document.getElementById("resign").addEventListener('click', event => {

    let Name = (document.getElementById('name') as HTMLInputElement).value;
    let Pass = (document.getElementById('pass') as HTMLInputElement).value;
    let users = {
        name: Name,
        pass: Pass,
    }

    let data = JSON.parse(localStorage.getItem('user'));

    if (!data) {

        localStorage.setItem('user', JSON.stringify(users));
        setTimeout(()=>{
            window.location.href = '../html/login.html'
        },1000)
    } else {


            if(data.name==Name){
                let ok = confirm("ten da ton tai");
                if (ok) {
                    window.location.href = '../html/Logup.html'
                }
                window.location.href = '../html/Logup.html'
            }

        }

        localStorage.setItem('user', JSON.stringify(users));

        setTimeout(()=>{
            window.location.href = '../html/login.html'
        },1000)


})