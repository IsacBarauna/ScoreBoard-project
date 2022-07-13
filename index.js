 homeTotal = document.getElementById("home-points")
guestTotal = document.getElementById("guest-points")


// HOME

 homeCount = 0

function home1point() {
    homeCount += 1
    homeTotal.textContent = homeCount
    console.log(homeCount)
}

function home2point() {
    homeCount += 2
    homeTotal.textContent = homeCount
    console.log(homeCount)
}

function home3point() {
    homeCount += 3
    homeTotal.textContent = homeCount
    console.log(homeCount)
}


// GUEST

 guestCount = 0

function guest1point() {
    guestCount += 1
    guestTotal.textContent = guestCount
    console.log(guestCount)
}

function guest2point() {
    guestCount += 2
    guestTotal.textContent = guestCount
    console.log(guestCount)
}

function guest3point() {
    guestCount += 3
    guestTotal.textContent = guestCount
    console.log(guestCount)
}

//  NEW GAME

function newGame() {
    homeTotal.innerText = 0
    homeCount = 0
    
    guestTotal.innerText = 0
    guestCount = 0
    }
    
    // HOME MINUS
    
    function hMinusPoints() {
        homeCount -= 1
        homeTotal.textContent = homeCount
    }
    
    // GUEST MINUS
    
        function gMinusPoints() {
        guestCount -= 1
        guestTotal.textContent = guestCount
    }