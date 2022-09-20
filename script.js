const dropzone = document.getElementById('outer');
const picture = document.querySelector('img');
const droptext = document.querySelector('.droptext')

let sizeSlider = document.getElementById("image-size");

sizeSlider.oninput = function() {
  if (sizeSlider.value == 1) {
    dropzone.children[0].style.height = "20%";
    dropzone.children[0].style.width = "20%";
  }
  if (sizeSlider.value == 2) {
    dropzone.children[0].style.height = "40%";
    dropzone.children[0].style.width = "40%";
  }
  if (sizeSlider.value == 3) {
    dropzone.children[0].style.height = "60%";
    dropzone.children[0].style.width = "60%";
  }
  if (sizeSlider.value == 4) {
    dropzone.children[0].style.height = "80%";
    dropzone.children[0].style.width = "80%";
  }
  if (sizeSlider.value == 5) {
    dropzone.children[0].style.height = "100%";
    dropzone.children[0].style.width = "100%";
  }
  if (sizeSlider.value == 6) {
    dropzone.children[0].style.height = "110%";
    dropzone.children[0].style.width = "110%";
  }
  if (sizeSlider.value == 7) {
    dropzone.children[0].style.height = "120%";
    dropzone.children[0].style.width = "120%";
  }
  if (sizeSlider.value == 8) {
    dropzone.children[0].style.height = "130%";
    dropzone.children[0].style.width = "130%";
  }
  if (sizeSlider.value == 9) {
    dropzone.children[0].style.height = "140%";
    dropzone.children[0].style.width = "140%";
  }
  if (sizeSlider.value == 10) {
    dropzone.children[0].style.height = "150%";
    dropzone.children[0].style.width = "150%";
  }
}

dropzone.addEventListener('dragenter', event => {
  event.preventDefault();
  dropzone.classList.add('active');
});

dropzone.addEventListener('dragleave', event => {
  event.preventDefault();
  dropzone.classList.remove('active');
});

dropzone.addEventListener('dragover', event => {
  event.preventDefault();
});

dropzone.addEventListener('drop', event => {

  event.preventDefault();
  dropzone.classList.remove('active');

  const file = event.dataTransfer.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  // console.log(file)
  // console.log(reader)
 
  reader.addEventListener('loadend', () => {
    const img = document.createElement('img');
    img.src = reader.result;
    console.log(reader.result);
    dropzone.removeChild(dropzone.firstElementChild);
    dropzone.append(img);
    img.classList.add('image-sizing');
 
  //  console.log(dropzone);
// dropzone.classList.add("dropped");
// if (dropzone.classList.contains("dropped")) {
//   Grade(document.querySelectorAll('.gradient-wrap'))
// }
  droptext.classList.add("hidden");

  const tilt = document.querySelector(".tilt");

    tilt.addEventListener("mousemove", event => {
      const { top, bottom, left, right } = event.target.getBoundingClientRect();
    
      const middleX = (right - left) / 2;
      const middleY = (bottom - top) / 2;
    
      const clientX = event.clientX;
      const clientY = event.clientY;
    
      const offsetX = (clientX - middleX) / middleX;
      const offsetY = (middleY - clientY) / middleY;
    
      event.target.style.transform = `perspective(1000px) rotateY(${offsetX *
        5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
    });
  })
});

function grayscale() {
  removeAllClasses()
  dropzone.classList.add("grayscale");
}

function sepia() {
  removeAllClasses()
  dropzone.classList.add("sepia")
}

function invert() {
  removeAllClasses()
  dropzone.classList.add("invert")
}

function hue() {
  removeAllClasses()
  dropzone.classList.add("hue")
}

function gradejs() {
  Grade(document.querySelectorAll('.gradient-wrap'))
}

function removeAllClasses() {
  dropzone.classList.remove("grayscale");
  dropzone.classList.remove("sepia");
  dropzone.classList.remove("invert");
  dropzone.classList.remove("hue");
}