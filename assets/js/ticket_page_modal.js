function showModal() {
    console.log("working");
    const modalDisplay = document.getElementById("modal-display");
    
    modalDisplay.style.display = "none";
    if(modalDisplay.style.display === "block") {
        modalDisplay.style.display = "none";
    } else {
        modalDisplay.style.display = "block";
    }
}

function closeModal() {
    const modalDisplay = document.getElementById("modal-display");
    
    // modalDisplay.style.display = "none";
    if(modalDisplay.style.display === "block") {
        modalDisplay.style.display = "none";
    } else {
        modalDisplay.style.display = "block";
    }

}

function submitModal() {
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
    closeModal()
}