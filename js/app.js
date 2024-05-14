let result = document.querySelector(`.result`);
let inc = document.querySelector(`.inc`);
let dec = document.querySelector(`.dec`);


let a = 0;
inc.addEventListener(`click`,function(){
  
 if(a===5){
  alert(`sorry`)
 }
 else{
  a++
  result.innerHTML = a
 }
})

let c = 0;
dec.addEventListener(`click`,function(){
  if(a<=1){
alert(`sorry`);}
else{
  a--
  result.innerHTML = a

}
  
})