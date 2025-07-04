const galleryImages = document.querySelectorAll('.gallery img');
let currentIndex = 0;

// Open lightbox
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
  currentIndex = Array.from(galleryImages).indexOf(img);
}

// Close lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Next/Prev navigation
function changeImage(step) {
  currentIndex = (currentIndex + step + galleryImages.length) % galleryImages.length;
  document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}

// Filter images
function filterImages(category) {
  galleryImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
