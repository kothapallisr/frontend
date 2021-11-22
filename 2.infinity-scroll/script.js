const imageContainer = document.getElementById('image-container');
const loader = document.
//Unsplsh API
const count = 10;
const apiKey = "4OD5XadgnIHg-QlONf91uGJGDFNRrQCsYVAfodnZ4rY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch error here
  }
}

getPhotos();
