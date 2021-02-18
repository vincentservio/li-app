const loadNav = () => {
  document.getElementById("Home").innerText += "Home";
  document.getElementById("Photos").innerText += "Photos";
  document.getElementById("Prices").innerText += "Prices";
  document.getElementById("Appointment").innerText += "Appointment";
  document.getElementById("Photos").addEventListener("click", loadPhotos);
  document.getElementById("Home").addEventListener("click", loadHome);
  document.getElementById("Prices").addEventListener("click", loadPrices);
  document
    .getElementById("Appointment")
    .addEventListener("click", loadAppointment);
};
document.addEventListener("DOMContentLoaded", loadNav);
