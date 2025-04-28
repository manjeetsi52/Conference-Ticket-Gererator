//taking input value
const gernerateButton = document.querySelector("#ticket-button");
let user = {};

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const githubUsername = document.querySelector("#github-username");

name.addEventListener("blur", () => {
  let name = document.getElementById("name").value;
  console.log(name);
  user.name = name;
});
email.addEventListener("blur", () => {
  let email = document.getElementById("email").value;
  console.log(email);
  user.email = email;
});
githubUsername.addEventListener("blur", () => {
  let userName = document.getElementById("github-username").value;
  console.log(userName);
  user.githubUsername = userName;
});

// for date
let date = new Date();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let formattedDate = `${
  months[date.getMonth()]
} ${date.getDate()} , ${date.getFullYear()}`;
// console.log(formattedDate); // Output: "Jan 31 / 2025"
user.date = formattedDate;

// drag and drop
const dropzone = document.querySelector("#dropzone");
const fileInput = document.querySelector("#fileInput");
const imagePreview = document.querySelector("#imagePreview");
//when use clikc it opens the file to select the image
const uploadText = document.querySelector("#uploadText");

//to open the file mangager for image
uploadText.addEventListener("click", () => {
  fileInput.click(); // Opens file picker
});

// When file is selected
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const imgsrc = URL.createObjectURL(file);
    user.imgsrc = imgsrc;
    console.log(imgsrc);
    console.log(user.imgsrc);

    uploadText.textContent = "Image Uploaded";
  }
});

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("dragover");
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("dragover");
  // const file = e.dataTransfer.files[0];
  const file = e.dataTransfer.files[0];
  const imgsrc = URL.createObjectURL(file); // assign it here
  user.imgsrc = imgsrc;
  console.log(imgsrc);
  console.log(user.imgsrc);

  if (file) {
    // Hide the previous image
    // imagePreview.style.display = 'none';

    // Create a new image element and set its source
    const newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(file); // Set the source as the dropped file
    // user.src =  URL.createObjectURL(file);
    newImage.alt = "Dropped image"; // Optional alt text

    // Append the new image to the drop zone
    dropZone.appendChild(newImage);
  }
});

// When a file is selected through the file input, hide the previous image and replace it
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    // Hide the previous image
    imagePreview.style.display = "none";

    // Create a new image element and set its source
    const newImage = document.createElement("img");
    newImage.setAttribute("id", "imagePreview");
    // Set the source as the selected file
    newImage.alt = "Selected image"; // Optional alt text

    // Append the new image to the drop zone
    dropZone.appendChild(newImage);
  }
});

//generate ticket

// var arr = [];
// function random() {
//   const num = Math.floor(10000 + Math.random() * 90000);
//   if (!arr.includes(num)) {
//     arr.push(num);
//     user.ticketNo = num;
//   }
// }

gernerateButton.addEventListener("click", () => {
  
  
  var arr = [];
  function random() {
    const num = Math.floor(10000 + Math.random() * 90000);
    if (!arr.includes(num)) {
      arr.push(num);
      user.ticketNo = num;
    }
  }
  random();
  console.log(user.ticketNo);
  console.log(user);
  // Store in localStorage
  localStorage.setItem("ticketData", JSON.stringify(user));

  // Redirect to ticket page
  window.location.href = "ticket.html";
});

//developing
