const photo = document.getElementById("photo");
const qualities = document.getElementById("qualities");
const main = document.querySelector("main");
const photos = [
  "./photos/240.png",
  "./photos/480.png",
  "./photos/720.png",
  "./photos/1080.png",
  "./photos/4K.jpg",
];

qualities.onchange = function (event) {
  let quality = event.target.selectedOptions[0].value;
  photo.src = photos[parseInt(quality)];
  if (quality === "4") {
    main.style.animation = "mymove 500ms infinite";
    main.style.boxShadow = "inset 0 0 80px 80px pink";
  } else {
    main.style.animation = "mymove 5s infinite";
  }
};
