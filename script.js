const counterEls = document.querySelectorAll('.counter');
const sum = document.querySelector('.sum');

counterEls.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter();

  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
      currentNum = Math.ceil(currentNum + increment)

     if(currentNum < dataCeil) {
       counterEl.innerText = currentNum;
       setTimeout(increment, 50);

     } else {
       counterEl.innerText = dataCeil
     }
  }
})

