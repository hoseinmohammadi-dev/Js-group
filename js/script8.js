//سوال 6

const result = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const inp1 = document.querySelector("#inp1").value;
  const inp2 = document.querySelector("#inp2").value;

  if (inp1 === "" || inp2 === "") {
    result.innerText = "آدم باش ستاره";
    return
  }
  const welcome = `سلام ${inp1} ${inp2} خوش آمدید`;
  result.innerText = welcome;
});
