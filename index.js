var n;
var m;
document.querySelector("button").addEventListener("click", startGame);

function rollAnimation(imgSelector, finalNum) {
  const img = document.querySelector(imgSelector);
  let rolls = 5;
  let i = 0;

  const interval = setInterval(() => {
    const rand = Math.floor(Math.random() * 6) + 1;
    img.src = "./images/dice" + rand + ".png";
    i++;
    if (i >= rolls) {
      clearInterval(interval);
      img.src = "./images/dice" + finalNum + ".png";
    }
  }, 150);
}

function startGame() {
  n = Math.floor(Math.random() * 6) + 1;
  m = Math.floor(Math.random() * 6) + 1;
  rollAnimation(".img1", n);
  rollAnimation(".img2", m);
  setTimeout(() => {
    if (n > m) {
      document.querySelector(".p1").textContent = "Winner";
      document.querySelector(".p2").textContent = "Loser";
      document.querySelector("h3").textContent = "Player 1 Wins !!!";
    } else if (m > n) {
      document.querySelector(".p1").textContent = "Loser";
      document.querySelector(".p2").textContent = "Winner";
      document.querySelector("h3").textContent = "Player 2 Wins !!!";
    } else {
      document.querySelector(".p1").textContent = "Player 1";
      document.querySelector(".p2").textContent = "Player 2";
      document.querySelector("h3").textContent = "It's A Draw !!!";
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, 800); 
}
