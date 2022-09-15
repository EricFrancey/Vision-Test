// const dropzone = document.querySelector('main');
const dropzone = document.getElementById('outer');

  
// const img = document.createElement('img');
const picture = document.querySelector('img');


dropzone.classList.add("dropped");

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

 
  console.log(file)
  console.log(reader)
 

  reader.addEventListener('loadend', () => {

 
   
    const img = document.createElement('img');
   
    img.src = reader.result;

    console.log(reader.result);
    dropzone.append(img);
 

   console.log(dropzone);
    // if (dropzone.classList.contains("dropped")) {
    //   Grade(document.querySelectorAll('.gradient-wrap'))
    // }
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
function blog() {
  removeAllClasses()
  dropzone.classList.add("blog")
}

function gradejs() {

  Grade(document.querySelectorAll('.gradient-wrap'))
}


function removeAllClasses() {

dropzone.classList.remove("grayscale");
dropzone.classList.remove("sepia");
dropzone.classList.remove("invert");
dropzone.classList.remove("blog");



}