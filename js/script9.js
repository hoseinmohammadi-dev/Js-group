const btn = document.querySelector("button");
const result = document.querySelector("ul");

btn.addEventListener("click", () => {
    let sum = 0
  for (let i = 1; i < 100; i++) {
    sum += i
   const li = document.createElement('li');
   li.textContent = sum;
   result.appendChild(li)
    
  }
});
