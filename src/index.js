



    window.addEventListener("resize", () => {

      const cardLayout = document.querySelector('.card-layout')

      if (window.innerWidth < 1072 && window.innerWidth > 687) {

        cardLayout.style.justifyContent = 'left';


      } else {

        cardLayout.style.justifyContent = 'center';
      }

    })


      window.addEventListener("resize", () => {


    //  console.log(payButtonText)
      if (window.innerWidth > 491 ) {
        // console.log(1)
        document.querySelector('.pay-button').childNodes[1].textContent = 'Оплатить услуги'

      } else {
        // console.log(2)
        document.querySelector('.pay-button').childNodes[1].textContent  = 'Оплатить'
      }

    });



    window.addEventListener("load", () => {


      //  console.log(payButtonText)
        if (window.innerWidth > 491 ) {
          // console.log(1)
          document.querySelector('.pay-button').childNodes[1].textContent = 'Оплатить услуги'
  
        } else {
          // console.log(2)
          document.querySelector('.pay-button').childNodes[1].textContent  = 'Оплатить'
        }
  
      });
  

    window.addEventListener("DOMContentLoaded", () => {
      
      // console.log('ready')
      const cardLayout = document.querySelector('.card-layout')
      // console.log(cardLayout)
      if (window.innerWidth < 1072 && window.innerWidth > 687) {
        // console.log('yes')
        cardLayout.style.justifyContent = 'left';

      } else {
        cardLayout.style.justifyContent = 'center';
      }
    })

