const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const headlineInput = document.getElementById("headline");
const subheadingInput = document.getElementById("subheading");
const dateInput = document.getElementById("date");
const domainInput = document.getElementById("domain");
const mediaInput = document.getElementById("media");
const facebookInput = document.getElementById("facebook");
const youtubeInput = document.getElementById("youtube");
const fontSelect = document.getElementById("fontSelect");
const textColorInput = document.getElementById("textColor");

let uploadedImage = null;
let uploadedLogo = null;

document.getElementById("imageInput").addEventListener("change", function(e){
  uploadedImage = new Image();
  uploadedImage.src = URL.createObjectURL(e.target.files[0]);
});

document.getElementById("logoInput").addEventListener("change", function(e){
  uploadedLogo = new Image();
  uploadedLogo.src = URL.createObjectURL(e.target.files[0]);
});

function generateCard(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // Background color
  ctx.fillStyle = "#b40000"; // Jamuna primary
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Uploaded Image
  if(uploadedImage){
    uploadedImage.onload = function(){
      ctx.drawImage(uploadedImage, 0, 0, canvas.width, 650);
      drawText();
    }
  } else {
    drawText();
  }
}

function drawText(){
  const font = fontSelect.value;
  const color = textColorInput.value;

  ctx.fillStyle = color;
  ctx.textBaseline = "top";

  // Headline
  ctx.font = `bold 48px '${font}'`;
  ctx.fillText(headlineInput.value, 20, 660);

  // Subheading
  ctx.font = `32px '${font}'`;
  ctx.fillText(subheadingInput.value, 20, 720);

  // Date
  ctx.font = `24px '${font}'`;
  ctx.fillText(dateInput.value, 20, 780);

  // Domain
  ctx.fillText(domainInput.value, 20, 820);

  // Media
  ctx.fillText(mediaInput.value, 20, 860);

  // Social Media
  ctx.fillText("FB: "+facebookInput.value, 20, 900);
  ctx.fillText("YT: "+youtubeInput.value, 20, 940);

  // Logo
  if(uploadedLogo){
    uploadedLogo.onload = function(){
      ctx.drawImage(uploadedLogo, canvas.width - 150, 660, 120, 120);
    }
  }
}

function downloadImage(){
  const link = document.createElement("a");
  link.download = "jamuna_photo_card.png";
  link.href = canvas.toDataURL();
  link.click();
}
