```javascript
/* =========================================================
   EKITI STATE WOMEN OF INFLUENCE
   ADO LOCAL GOVERNMENT
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   WARD DATA
========================================================= */

const wards = [
    {
        number: 1,
        name: "Ward 1"
    },
    {
        number: 2,
        name: "Ward 2"
    },
    {
        number: 3,
        name: "Ward 3"
    },
    {
        number: 4,
        name: "Ward 4"
    },
    {
        number: 5,
        name: "Ward 5"
    },
    {
        number: 6,
        name: "Ward 6"
    },
    {
        number: 7,
        name: "Ward 7"
    },
    {
        number: 8,
        name: "Ward 8"
    },
    {
        number: 9,
        name: "Ward 9"
    },
    {
        number: 10,
        name: "Ward 10"
    },
    {
        number: 11,
        name: "Ward 11"
    },
    {
        number: 12,
        name: "Ward 12"
    },
    {
        number: 13,
        name: "Ward 13"
    }
];


/* =========================================================
   GET HTML ELEMENTS
========================================================= */

const wardGrid = document.getElementById("wardGrid");
const wardDetails = document.getElementById("wardDetails");
const wardContent = document.getElementById("wardContent");
const closeWard = document.getElementById("closeWard");

const wardSelect = document.getElementById("wardSelect");

const registrationForm =
    document.getElementById("registrationForm");

const formMessage =
    document.getElementById("formMessage");

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


/* =========================================================
   GENERATE WARD CARDS
========================================================= */

function createWardCards() {

    wardGrid.innerHTML = "";

    wards.forEach((ward) => {

        const card = document.createElement("div");

        card.className = "ward-card";

        card.innerHTML = `
            <div class="ward-number">
                ${ward.number}
            </div>

            <h3>
                ${ward.name}
            </h3>

            <p>
                View ward information →
            </p>
        `;

        card.addEventListener("click", () => {
            showWard(ward.number);
        });

        wardGrid.appendChild(card);
    });
}


/* =========================================================
   POPULATE REGISTRATION DROPDOWN
========================================================= */

function populateWardSelect() {

    wards.forEach((ward) => {

        const option =
            document.createElement("option");

        option.value = ward.number;

        option.textContent =
            `Ward ${ward.number}`;

        wardSelect.appendChild(option);
    });
}


/* =========================================================
   SHOW WARD INFORMATION
========================================================= */

function showWard(wardNumber) {

    const ward =
        wards.find(
            (item) => item.number === wardNumber
        );

    if (!ward) {
        return;
    }

    wardContent.innerHTML = `

        <p class="section-label">
            ADO LOCAL GOVERNMENT
        </p>

        <h2>
            ${ward.name}
        </h2>

        <p>
            Welcome to the ${ward.name} section of
            Ekiti State Women of Influence,
            Ado Local Government.
        </p>

        <br>

        <h3>
            Women of Influence
        </h3>

        <p>
            Registered women and ward leadership
            information will appear here.
        </p>

        <br>

        <h3>
            Ward Executive Committee
        </h3>

        <p>
            Ward executive information will be
            added here.
        </p>

    `;

    wardDetails.classList.add("active");

    wardDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   CLOSE WARD DETAILS
========================================================= */

closeWard.addEventListener("click", () => {

    wardDetails.classList.remove("active");

});


/* =========================================================
   MOBILE MENU
========================================================= */

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================================================= */

const navLinks =
    navMenu.querySelectorAll("a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================================
   REGISTRATION
========================================================= */

registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName")
                .value.trim();

        const phone =
            document.getElementById("phone")
                .value.trim();

        const email =
            document.getElementById("email")
                .value.trim();

        const ward =
            document.getElementById("wardSelect")
                .value;

        const occupation =
            document.getElementById("occupation")
                .value.trim();

        const role =
            document.getElementById("role")
                .value;

        const message =
            document.getElementById("message")
                .value.trim();


        /* ==============================
           VALIDATION
        ============================== */

        if (!fullName || !phone || !ward) {

            formMessage.textContent =
                "Please fill in your name, phone number and ward.";

            formMessage.style.color =
                "#dc2626";

            return;
        }


        /* ==============================
           CREATE REGISTRATION
        ============================== */

        const registration = {

            id: Date.now(),

            fullName: fullName,

            phone: phone,

            email: email,

            ward: ward,

            occupation: occupation,

            role: role,

            message: message,

            date:
                new Date().toLocaleString()

        };


        /* ==============================
           GET EXISTING REGISTRATIONS
        ============================== */

        let registrations =
            JSON.parse(
                localStorage.getItem(
                    "eswiRegistrations"
                )
            ) || [];


        /* ==============================
           SAVE REGISTRATION
        ============================== */

        registrations.push(registration);

        localStorage.setItem(
            "eswiRegistrations",
            JSON.stringify(registrations)
        );


        /* ==============================
           SUCCESS MESSAGE
        ============================== */

        formMessage.textContent =
            "Registration submitted successfully!";

        formMessage.style.color =
            "#16a34a";


        /* ==============================
           RESET FORM
        ============================== */

        registrationForm.reset();


        /* ==============================
           UPDATE REGISTRATION COUNT
        ============================== */

        updateRegistrationCount();

    }
);


/* =========================================================
   REGISTRATION COUNT
========================================================= */

function updateRegistrationCount() {

    const registrations =
        JSON.parse(
            localStorage.getItem(
                "eswiRegistrations"
            )
        ) || [];


    const countElement =
        document.querySelector(
            ".stat-card:nth-child(3) strong"
        );


    if (countElement) {

        countElement.textContent =
            registrations.length;

    }

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

function initializeWebsite() {

    createWardCards();

    populateWardSelect();

    updateRegistrationCount();

}


/* =========================================================
   START WEBSITE
========================================================= */

initializeWebsite();
```
