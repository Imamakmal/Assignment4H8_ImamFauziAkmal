function tampilkanForm() {
    document.getElementById("formSection").classList.toggle("hidden");
}

window.onload = function() {
    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');
    const availability = localStorage.getItem('availability');
    const usia = localStorage.getItem('usia');
    const lokasi = localStorage.getItem('lokasi');
    const pengalaman = localStorage.getItem('pengalaman');
    const email = localStorage.getItem('email');

    document.getElementById("tampilanNama").innerText = name;
    document.getElementById("tampilanRole").innerText = role;
    document.getElementById("tampilanAvailability").innerText = availability;
    document.getElementById("tampilanUsia").innerText = usia;
    document.getElementById("tampilanLokasi").innerText = lokasi;
    document.getElementById("tampilanPengalaman").innerText = pengalaman;
    document.getElementById("tampilanEmail").innerText = email;

    document.getElementById("inputNama").value = name;
    document.getElementById("inputRole").value = role;
    document.getElementById("inputAvailability").value = availability;
    document.getElementById("inputUsia").value = usia;
    document.getElementById("inputLokasi").value = lokasi;
    document.getElementById("inputPengalaman").value = pengalaman;
    document.getElementById("inputEmail").value = email;
}

function submitPerubahan() {
    const name = document.getElementById("inputNama").value;
    const role = document.getElementById("inputRole").value;
    const availability = document.getElementById("inputAvailability").value;
    const usia = document.getElementById("inputUsia").value;
    const lokasi = document.getElementById("inputLokasi").value;
    const pengalaman = document.getElementById("inputPengalaman").value;
    const email = document.getElementById("inputEmail").value;

    document.getElementById("tampilanNama").innerText = name;
    document.getElementById("tampilanRole").innerText = role;
    document.getElementById("tampilanAvailability").innerText = availability;
    document.getElementById("tampilanUsia").innerText = usia;
    document.getElementById("tampilanLokasi").innerText = lokasi;
    document.getElementById("tampilanPengalaman").innerText = pengalaman;
    document.getElementById("tampilanEmail").innerText = email;

    localStorage.setItem('name', name);
    localStorage.setItem('role', role);
    localStorage.setItem('availability', availability);
    localStorage.setItem('usia', usia);
    localStorage.setItem('lokasi', lokasi);
    localStorage.setItem('pengalaman', pengalaman);
    localStorage.setItem('email', email);

    tampilkanForm();
}