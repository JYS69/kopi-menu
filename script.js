// Untuk perubahan slide
let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  // Update current index untuk memastikan perputaran slide yang benar
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // Geser slide ke posisi baru
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide setiap 3 detik
setInterval(() => {
  changeSlide(1);
}, 3000);


// Untuk menampilkan nomor telepon berdasarkan pilihan kota
function showPhone(city) {
  var phoneNumber = '';
  if (city === 'palembang') {
    phoneNumber = '082123186858';
  } else if (city === 'jakarta') {
    phoneNumber = '089637566907';
  }

  // Menampilkan nomor telepon yang sesuai
  document.getElementById('phone-number').innerText = 'Hubungi kami di: ' + phoneNumber;
}
function toggleDeliveryInfo() {
  const deliveryInfo = document.getElementById('delivery-info');
  
  // Toggle visibility of the delivery info box
  if (deliveryInfo.style.display === 'block') {
    deliveryInfo.style.display = 'none';
  } else {
    deliveryInfo.style.display = 'block';
  }
}
