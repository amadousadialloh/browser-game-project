const spanElement = document.querySelector("span");
const cookieImage = document.querySelector("img");

spanElement.style.margin = "0 5px";
spanElement.style.color = "wheat";
let count = 1; // keep track of the number of cookies

//update the number of cookies
const updateCookie = () => {
  spanElement.textContent = count;
  count++;
};
cookieImage.addEventListener("click", updateCookie); // add click event listener to the cookie image
