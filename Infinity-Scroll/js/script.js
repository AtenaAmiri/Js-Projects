const imgContainer = document.querySelector("#img-container");
const loader = document.querySelector("#loader");
let ready = false;
let imagesLoaded = 0;
let totalImage = 0;
let photosArray = [];
//Unsplash API
const count = 5;
const apiKey = `5Pviq1UjryTkQrGNptz2C5JyriH8gV_2xTeRY2lI5K0`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
//Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  console.log(imageLoaded);
  if (imagesLoaded === totalImage) {
    ready = true;
    loader.hidden = "true";
    console.log("ready", ready);
  }
}
//Helper Function to Set Attributes on Dom Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
//Create Elements For Links & Photos , Add to Dom
function displayPhotos() {
  //   imageLoaded = 0;
  totalImage = photosArray.length;
  console.log("total", totalImage);
  photosArray.forEach((photo) => {
    //Create <a> to Link to Unsplash
    const item = document.createElement("a");
    /*item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");*/
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //Create <img> For Photo

    const img = document.createElement("img");
    /*img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);*/
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Event Listener,check when each is finished loading
    img.addEventListener("load", imageLoaded);

    //Put <img> inside <a>,then Put Both Inside imgContainer Element
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}
// Get Photos From Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

// Check to see if scrolling near bottom of page,Load More photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

///On Load
getPhotos();
