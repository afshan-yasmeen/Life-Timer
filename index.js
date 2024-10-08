function AddDOB() {
    let dob = document.getElementById("dobInput").value;
    let headingEnterDate = document.getElementById("EnterDate");
    let ageContainer = document.getElementById("Age")
    if (dob) {
        headingEnterDate.style.display = "none"
        ageContainer.classList.remove("hide")
        difference()
    } else {
        alert("Please enter the date of birth first")
    }
}
let isDOBHide = true;

function toggleDateOfBirthSelector() {
    let dobContainer = document.getElementById("dob");
    if (isDOBHide) {
        dobContainer.classList.remove("hide")
        isDOBHide = false;
    } else {
        dobContainer.classList.add("hide")
        isDOBHide = true;
    }
}


function difference() {
    let dob = new Date(document.getElementById("dobInput").value);
    let currentDate = new Date();
    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    if (months < 0) {
        years--;
        months += 12
    }
    let days = currentDate.getDay() - dob.getDay();
    if (days < 0) {
        months--
        let previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += previousMonth.getDate();
    }
    let hours = currentDate.getHours() - dob.getHours();
    if (hours < 0) {
        days--;
        hours += 24;
    }

    let minutes = currentDate.getMinutes() - dob.getMinutes();
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }

    let seconds = currentDate.getSeconds() - dob.getSeconds();
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}