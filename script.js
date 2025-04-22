// 🎂 Set Aquib's Birthday Date (23 April 2025)
const endDate = new Date("Apr 23, 2025 00:00:00").getTime();

// 💌 Love Messages for Rotation
const loveMessages = [
  "You make my world brighter every day. 💖",
  "You're the reason behind my smile. 😊",
  "I’m so lucky to have you in my life. ❤️",
  "With you, every moment is special. 🌟",
  "Forever isn't long enough with you. 🥰"
];

let msgIndex = 0;

// ⏰ Update Countdown Every 1 Second
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = endDate - now;

  // 🧮 Time Calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // ⏳ Display Countdown
  document.getElementById("daysNum").innerHTML = ("0" + days).slice(-2);
  document.getElementById("hoursNum").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("minsNum").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("secsNum").innerHTML = ("0" + seconds).slice(-2);

  // 💬 Rotate Love Message Every 5 Seconds
  if (document.getElementById("loveMsg")) {
    document.getElementById("loveMsg").innerHTML = loveMessages[msgIndex];
    msgIndex = (msgIndex + 1) % loveMessages.length;
  }

  // 🎉 If Countdown Finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "🎉 Happy Birthday Aquib! 🎉";
    document.getElementById("loveMsg").innerHTML = "Today is all about you, my love. ❤️";
  }
}, 1000);
