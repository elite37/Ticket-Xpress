function showModal1() {
    console.log("working");
    const modalDisplay = document.getElementById("modal-display1");
    
    modalDisplay.style.display = "none";
    if(modalDisplay.style.display === "block") {
        modalDisplay.style.display = "none";
    } else {
        modalDisplay.style.display = "block";
    }
}

function closeModal1() {
    const modalDisplay = document.getElementById("modal-display1");
    
    // modalDisplay.style.display = "none";
    if(modalDisplay.style.display === "block") {
        modalDisplay.style.display = "none";
    } else {
        modalDisplay.style.display = "block";
    }

}

function submitModal1() {
    const firstName = document.querySelector('.firstName');
    const lastName = document.querySelector('.lastName');
    const email = document.querySelector('.email');

    let bookingObj = {
        firstName : firstName.value,
        lastName : lastName.value,
        email : email.value
    }
      console.log(bookingObj)
    let bookingData = JSON.parse(localStorage.getItem("bookingData"));
    //  let bookingArray

    if(!bookingData) {
       bookingData = []
    }
    bookingData.push(bookingObj)
    console.log(bookingData);
    
    localStorage.setItem("bookingData", JSON.stringify(bookingData))
    closeModal1()
}


function showModal2() {
    console.log("working");
    const modalDisplay = document.getElementById("modal-display2");
    
    modalDisplay.style.display = "none";
    if(modalDisplay.style.display === "block") {
        modalDisplay.style.display = "none";
    } else {
        modalDisplay.style.display = "block";
    }
}

function closeModal2() {
    const modalDisplay = document.getElementById("modal-display2");
    
    // modalDisplay.style.display = "none";
    if(modalDisplay.style.display === "block") {
        modalDisplay.style.display = "none";
    } else {
        modalDisplay.style.display = "block";
    }

}

function submitModal2() {
    const bookNumber = document.querySelector('.bookingNum');
    const lastName = document.querySelector('.lastName');
    const email = document.querySelector('.email');

    let bookingObj = {
        bookNumber : bookNumber.value,
        lastName : lastName.value,
        email : email.value
    }
      console.log(bookingObj)
    let bookingData = JSON.parse(localStorage.getItem("bookingData"));
    //  let bookingArray

    if(!bookingData) {
       bookingData = []
    }
    bookingData.push(bookingObj)
    console.log(bookingData);
    
    localStorage.setItem("bookingData", JSON.stringify(bookingData))
    closeModal2()
}

function showModal3() {
    console.log("working");
    const modalDisplay = document.getElementById("modal-display3");
    
    modalDisplay.style.display = "none";
    if(modalDisplay.style.display === "block") {
        modalDisplay.style.display = "none";
    } else {
        modalDisplay.style.display = "block";
    }
}

function closeModal3() {
    const modalDisplay = document.getElementById("modal-display3");
    
    // modalDisplay.style.display = "none";
    if(modalDisplay.style.display === "block") {
        modalDisplay.style.display = "none";
    } else {
        modalDisplay.style.display = "block";
    }

}

function submitModal3() {
    const bookNumber = document.querySelector('.bookingNum');
    const lastName = document.querySelector('.lastName');
    const email = document.querySelector('.email');

    let bookingObj = {
        bookNumber : bookNumber.value,
        lastName : lastName.value,
        email : email.value
    }
      console.log(bookingObj)
    let bookingData = JSON.parse(localStorage.getItem("bookingData"));
    //  let bookingArray

    if(!bookingData) {
       bookingData = []
    }
    bookingData.push(bookingObj)
    console.log(bookingData);
    
    localStorage.setItem("bookingData", JSON.stringify(bookingData))
    closeModal3()
}