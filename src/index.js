 function burgerInit() {
    const burger = document.querySelector('.header__burger-btn')
    const header = document.querySelector('.header')
    
    burger.addEventListener('click', () =>  header.classList.contains('open') ?
    header.classList.remove('open') : header.classList.add('open'));
    }  


    window.addEventListener("resize", () => {
      let phoneLogo = document.createElement('div');
      let phoneNumber = document.querySelector('.header__number');
      if (window.innerWidth < 1300) {
        console.log(window.innerWidth)
        phoneLogo.classList.add('phonelogo')
        phoneNumber.innerHTML = '';
        phoneNumber.append(phoneLogo);
      } else {
        phoneNumber.innerHTML = '';
        phoneLogo = document.createElement('a');
        phoneNumber.textContent = '+7 (3496) 45-80-00'
        // phoneLogo.classList.add('')
      }
      console.log(window.innerWidth)
    });