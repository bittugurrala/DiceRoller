let roll = document.getElementById("rollButton");
let para = document.getElementById("para");
let diceContainer = document.getElementById("diceContainer");

// 1️⃣ When page loads, fade in the paragraph
window.addEventListener("load", function() {
  para.classList.add("show");
});

roll.addEventListener("click", function() {
  // 2️⃣ Fade out the paragraph smoothly
  para.classList.add("hide");

  // 3️⃣ After fade-out completes (0.6s), replace content with animation
  setTimeout(() => {
    diceContainer.innerHTML = `
      <iframe id="animation"
        class="show"
        src="https://lottie.host/embed/bb25034b-41ea-4de8-9a84-5edd9ce91785/GF9M9vSDg9.lottie"
        width="200" height="200" frameborder="0">
      </iframe>
    `;

    // 4️⃣ Fade in the animation after a slight delay
    const iframe = document.getElementById("animation");
    iframe.style.opacity = "0";
    setTimeout(() => {
      iframe.style.opacity = "1";
    }, 100);
  }, 600); // matches fade-out duration
});
