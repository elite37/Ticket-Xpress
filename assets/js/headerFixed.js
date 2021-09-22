

      const header = document.querySelector("header");


      window.addEventListener("scroll" , () => {

               if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50){
                   
                   header.classList.add("bg-white");

               }
               else{
                header.classList.remove("bg-white");

               }
               console.log("Hello World")
   
      })


console.log(header)