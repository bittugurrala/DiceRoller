let roll = document.getElementById("rollButton");
let para = document.getElementById("para");
let diceContainer = document.getElementById("diceContainer");
let display = document.getElementById("value")

let faces = {
    1 : "Dice_images/One_face.png",
    2 : "Dice_images/Two_face.png",
    3 : "Dice_images/Three_face.png",
    4 : "Dice_images/Four_face.png",
    5 : "Dice_images/Five_face.png",
    6 : "Dice_images/Six_face.png"
};

//Show intro text smoothly on page load
window.addEventListener("load", function () {
  setTimeout(() => {
    para.classList.add("show");
  }, 50);
});

roll.addEventListener("click", function () {
  // Fade out paragraph
  para.classList.remove("show");

  // ⏳ After fade-out (0.6s), show dice animation
  setTimeout(() => {
    diceContainer.innerHTML = `
    <iframe id="animation"
        class="show"
        src="https://lottie.host/embed/bb25034b-41ea-4de8-9a84-5edd9ce91785/GF9M9vSDg9.lottie"
        width="90%"
        height="90%"
        frameborder="0">
    </iframe>
    `;

    const iframe = document.getElementById("animation");
    iframe.style.opacity = "0";

    setTimeout(() => {
      iframe.style.opacity = "1";
    }, 50);

    // After animation (~2.5 seconds), show dice result
    setTimeout(() => {
      const random = Math.floor(Math.random() * 6) + 1; // random number 1–6
      diceContainer.innerHTML = `
          <img id="finalDice" src="${faces[random]}" class="fade size" alt="dice-${random}">
      `;

        display.textContent = `Dice value is ${random}`;
        // Smooth fade-in for final dice
        const finalDice = document.getElementById("finalDice").classList.add("show");;
        setTimeout(() => {
            finalDice.classList.add("show");
        }, 50); 
        }, 2800);

    }, 100);
    display.textContent = "";
  }, 100);

