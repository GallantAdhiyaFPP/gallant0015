document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  const messageEl = document.getElementById("formMessage");

  if (nama && email && pesan) {
    messageEl.textContent = "Pesan berhasil dikirim. Terima kasih!";
    messageEl.style.color = "green";
    this.reset();
  } else {
    messageEl.textContent = "Harap isi semua kolom.";
    messageEl.style.color = "red";
  }
});
