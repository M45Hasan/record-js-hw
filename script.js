/*let change = document.querySelector(".one");
let buon = document.querySelector(".width");

buon.addEventListener("click", function () {
  if (change.className == "one two") {
    change.className = "one";
  } else {
    change.className = "one two";
  }
});*/

let ull = document.querySelector(".ull");
let newLi = document.createElement("li");

newLi.innerHTML = "No.7 from JS";

//ull.before(newLi);
//ull.after(newLi);

/*let x = ull.children;

console.log(x);

for (let i = 0; i <= x.length; i++) {}
console.log(x[2].nextElementSibling.before(newLi));*/

ull.children[1].before(newLi);

//ull.append(newLi);

//ull.lastElementChild.before(newLi); */
