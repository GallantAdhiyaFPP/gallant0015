document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  if (nama && email && pesan) {
    document.getElementById("formMessage").textContent = "Pesan berhasil dikirim. Terima kasih!";
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("formMessage").textContent = "Mohon isi semua kolom.";
  }
});
