// switch modo oscuro
var darkMode = document.getElementById("toggle")
var body = document.getElementById("body")
var leftBar = document.querySelector(".left-bar")
var textLabel = document.getElementById("textlabel")


// Obtener etiquetas para mostrar u ocultar un panel
var accountCard = document.querySelector(".expand-menu-account")
var companyCard = document.querySelector(".expand-menu-company")
var userCard = document.querySelector(".expand-menu-user")
var chatCard = document.querySelector(".expand-menu-chat")
var notepadCard = document.querySelector(".expand-menu-notepad")
var calendarCard = document.querySelector(".expand-menu-calendar")
var documentsCard = document.querySelector(".expand-menu-documents")
var plusCard = document.querySelector(".expand-menu-plus")
var bubbleContainer = document.querySelector(".bubble-container")
var mainSection = document.querySelector(".main-section")
// Botones
var accountToggle = document.querySelector(".button-bar-1")
var companyToggle = document.querySelector(".button-bar-2")
var userToggle = document.querySelector(".button-bar-3")
var chatToggle = document.querySelector(".button-bar-4")
var plusToggle = document.querySelector(".button-bar-5")
var notepadBtn = document.querySelector(".notepad-button")
var calendarBtn = document.querySelector(".calendar-button")
var documentsBtn = document.querySelector(".documents-button")

darkMode.addEventListener('change', function () {
    if (this.checked) {
        body.style.background = "var(--dark-background-color)"
        leftBar.style.background = "var(--bar-dark-mode)"
        textLabel.style.color = "var(--dark-text-color)"
        bubbleContainer.style.background = "var(--bar-dark-mode)"

    } else {
        body.style.background = "var(--light-background-color)"
        leftBar.style.background = "var(--bar-light-mode)"
        bubbleContainer.style.background = "var(--bar-light-mode)"
        textLabel.style.color = "var(--light-text-color)"
    }
});

notepadCard.addEventListener("click", function () {
    if (notepadCard.style.display !== "none") {
        plusCard.style.display = "none"
    } else {
        console.log("test")
    }
})
mainSection.addEventListener("click", function () {
    if (mainSection.style.display !== "none") {
        plusCard.style.display = "none"
    } else {
        console.log("test")
    }
})
calendarCard.addEventListener("click", function () {
    if (calendarCard.style.display !== "none") {
        plusCard.style.display = "none"
    } else {
        console.log("test")
    }
})

documentsCard.addEventListener("click", function () {
    if (documentsCard.style.display !== "none") {
        plusCard.style.display = "none"
    } else {
        console.log("test")
    }
})

notepadBtn.addEventListener("click", function () {
    if (notepadCard.style.display !== "flex") {
        notepadCard.style.display = "flex"
        calendarCard.style.display = "none"
        documentsCard.style.display = "none"
        accountCard.style.display = "none"
        companyCard.style.display = "none"
        userCard.style.display = "none"
        chatCard.style.display = "none"
    } else {
        notepadCard.style.display = "none"
    }
})
calendarBtn.addEventListener("click", function () {
    if (calendarCard.style.display !== "flex") {
        calendarCard.style.display = "flex"
        notepadCard.style.display = "none"
        documentsCard.style.display = "none"
        accountCard.style.display = "none"
        companyCard.style.display = "none"
        userCard.style.display = "none"
        chatCard.style.display = "none"
    } else {
        calendarCard.style.display = "none"
    }
})
documentsBtn.addEventListener("click", function () {
    if (documentsCard.style.display !== "flex") {
        documentsCard.style.display = "flex"
        calendarCard.style.display = "none"
        notepadCard.style.display = "none"
        accountCard.style.display = "none"
        companyCard.style.display = "none"
        userCard.style.display = "none"
        chatCard.style.display = "none"
    } else {
        documentsCard.style.display = "none"
    }
})
plusToggle.addEventListener("click", function () {
    if (plusCard.style.display !== "flex") {
        plusCard.style.display = "flex"
    } else {
        plusCard.style.display = "none"
    }
})
accountToggle.addEventListener("click", function () {
    if (accountCard.style.display !== "flex") {
        accountCard.style.display = "flex"
        notepadCard.style.display = "none"
        calendarCard.style.display = "none"
        documentsCard.style.display = "none"
        companyCard.style.display = "none"
        userCard.style.display = "none"
        chatCard.style.display = "none"
    } else {
        accountCard.style.display = "none"
    }
})
companyToggle.addEventListener("click", function () {
    if (companyCard.style.display !== "flex") {
        companyCard.style.display = "flex"
        notepadCard.style.display = "none"
        calendarCard.style.display = "none"
        documentsCard.style.display = "none"
        accountCard.style.display = "none"
        userCard.style.display = "none"
        chatCard.style.display = "none"
    } else {
        companyCard.style.display = "none"
    }
})
userToggle.addEventListener("click", function () {
    if (userCard.style.display !== "flex") {
        userCard.style.display = "flex"
        notepadCard.style.display = "none"
        calendarCard.style.display = "none"
        documentsCard.style.display = "none"
        accountCard.style.display = "none"
        companyCard.style.display = "none"
        chatCard.style.display = "none"
    } else {
        userCard.style.display = "none"
    }
})
chatToggle.addEventListener("click", function () {
    if (chatCard.style.display !== "flex") {
        chatCard.style.display = "flex"
        notepadCard.style.display = "none"
        calendarCard.style.display = "none"
        documentsCard.style.display = "none"
        accountCard.style.display = "none"
        companyCard.style.display = "none"
        userCard.style.display = "none"
    } else {
        chatCard.style.display = "none"
    }
})