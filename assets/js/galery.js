function openModal(imgSrc) {
    let modal = document.getElementById("gallery__my-ventana");
    let modalImg = document.getElementById("ventana__img");
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }
  
  function closeModal() {
    let modal = document.getElementById("gallery__my-ventana");
    modal.style.display = "none";
  }