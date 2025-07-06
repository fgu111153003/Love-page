function startHeartRain() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createFallingHeart();
    }, i * 150); // 每 150 毫秒掉下一個
  }
}

function createFallingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.textContent = "❤️";

  // 隨機水平位置
  heart.style.left = Math.random() * window.innerWidth + "px";

  // 隨機動畫時間
  const duration = 3 + Math.random() * 2; // 3~5秒
  heart.style.animationDuration = duration + "s";

  document.body.appendChild(heart);

  // 動畫結束後移除
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}
