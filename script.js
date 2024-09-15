const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector("h2");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm1iNWgzdWowemR5YXFjdGl1OGxoM3UwczltbXJqY2NieDZvdDg5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3i4g2nMtIXT9Y0sUUz/giphy.gif";
});

// Make the No button move randomly on click
noBtn.addEventListener("click", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute';
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Disable the No button
noBtn.addEventListener("mousedown", (event) => {
  event.preventDefault(); // Prevents the default action on mousedown
});