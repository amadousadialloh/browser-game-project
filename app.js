const spanElement = document.querySelector("span");
const cookieImage = document.querySelector("img");
const resetButton = document.querySelector(".reset");

spanElement.style.margin = "0 5px";
spanElement.style.color = "wheat";
let count = 1; // keep track of the number of cookies

//update the number of cookies
const updateCookie = () => {
  spanElement.textContent = count;
  count++;
};

const reset = () => {
  count = 0;
  spanElement.textContent = count;
};

cookieImage.addEventListener("click", updateCookie); // add click event listener to the cookie image
resetButton.addEventListener("click", reset); // rest cookie
