let lowerCount = document.querySelector(".lowerCount");
let addCount = document.querySelector(".addCount");
let reset = document.querySelector(".reset");
let value = document.querySelector(".value");

let COUNTER = 0;
lowerCount.addEventListener("click", ()=>{
  COUNTER--;
  if (COUNTER < 0 ){
    COUNTER = 0
  };
  value.innerHTML = COUNTER;
})
;
addCount.addEventListener("click", ()=>{
  COUNTER++;
  if (COUNTER > 50) {
    COUNTER = 50
  };
  value.innerHTML = COUNTER;
})
;
reset.addEventListener("click", () => {
  COUNTER = 0 ;
  value.innerHTML = COUNTER;
})
;
