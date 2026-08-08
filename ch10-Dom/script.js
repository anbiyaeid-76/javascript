let allWannaFirstBe = document.querySelectorAll(" #wanna-first")
allWannaFirstBe[0].style.color = "yellow"
allWannaFirstBe[1].style.color = "red"
allWannaFirstBe[2].style.color = "blue"
for (let i = 0; i < 100; i++) {
  let firstH1 = document.createElement("h1");
  firstH1.textContent = i + " hello world";
  firstH1.style.color = "red";
  document.body.appendChild(firstH1);
}


