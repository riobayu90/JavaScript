function masuk(){
    let frm = window.document.getElementById("myLoginForm");
    let mail = frm.email.value;
    let pass = frm.password.value;

    if (mail == "mimin" && pass == "mimin123") {
        alert('Selamat Datang Mimin, Anda Administrator');
    } else if(mail == "budi" && pass == "budi123") {
        alert('Selamat Datang Budi, Anda Operator');
    } else {
        alert('Maaf Anda Gagal Login');
    }
}