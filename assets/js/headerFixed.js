

      const header = document.querySelector("header");
      const burger = document.querySelector(".nav-opener");
      const navTarget = document.querySelector(".nav__target");
      const navContainer = document.querySelector(".nav__container");

      window.addEventListener("scroll" , () => {

               if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
                   
                   header.classList.add("bg-white");

               }
               else{
                header.classList.remove("bg-white");

               }
              
   
      })


   burger.addEventListener('click' , () => {

            const burgerIcon = burger.querySelector("i");
          
                  burgerIcon.classList.toggle('fa-times');
                navTarget.classList.toggle("open");             
               navContainer.classList.toggle("open");
   })


    window.addEventListener("click" , (e) => {
       
        if(e.target === navTarget) {
            const burgerIcon = burger.querySelector("i");
          
            burgerIcon.classList.toggle('fa-times');
          navTarget.classList.toggle("open");             
         navContainer.classList.toggle("open");     
        }


    })