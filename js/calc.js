function jumlah() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)){
        var hasil = parseInt(bil1) + parseInt(bil2);
        frm.hasil.value = hasil;
    } else {
        alert("Maaf yang Anda input bukan angka");
    }
}

function kurang() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)){
        var hasil = parseInt(bil1) - parseInt(bil2);
        frm.hasil.value = hasil;
    } else {
        alert("Maaf yang Anda input bukan angka");
    }
}

function kali() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)){
        var hasil = parseInt(bil1) * parseInt(bil2);
        frm.hasil.value = hasil;
    } else {
        alert("Maaf yang Anda input bukan angka");
    }
}

function bagi() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)){
        var hasil = parseInt(bil1) / parseInt(bil2);
        frm.hasil.value = hasil;
    } else {
        alert("Maaf yang Anda input bukan angka");
    }
}

function pangkat() {
    let frm = document.getElementById("formCalc");
    let bil1 = frm.bilangan1.value;
    let bil2 = frm.bilangan2.value;

    if(!isNaN(bil1) || !isNaN(bil2)){
        var hasil = parseInt(bil1) ** parseInt(bil2);
        frm.hasil.value = hasil;
    } else {
        alert("Maaf yang Anda input bukan angka");
    }
}