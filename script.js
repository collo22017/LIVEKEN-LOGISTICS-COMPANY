// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.querySelector("i").classList.add("fa-bars");

        menuToggle.querySelector("i").classList.remove("fa-xmark");

    });

});


// ANIMATED STATISTICS

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 100));

            const timer = setInterval(function () {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current.toLocaleString() + "+";

            }, 20);

            observer.unobserve(counter);

        }

    });

}, { threshold: 0.5 });


counters.forEach(function (counter) {

    observer.observe(counter);

});


// SHIPMENT TRACKING DEMONSTRATION

const trackingForm = document.getElementById("tracking-form");

trackingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const number = document.getElementById("tracking-number").value.trim().toUpperCase();

    const result = document.getElementById("tracking-result");

    const shipments = {

        "LKL2026001": {
            status: "In Transit",
            origin: "Port of Mombasa",
            destination: "Nairobi",
            details: "Cargo has departed the port and is in transit."
        },

        "LKL2026002": {
            status: "Processing",
            origin: "Port of Mombasa",
            destination: "Kampala, Uganda",
            details: "Cargo is currently undergoing processing."
        },

        "LKL2026003": {
            status: "Delivered",
            origin: "Mombasa",
            destination: "Nairobi",
            details: "The demonstration shipment has been delivered."
        }

    };

    const shipment = shipments[number];

    if (shipment) {

        result.innerHTML = `

            <div class="tracking-success">

                <h3>SHIPMENT FOUND!</h3>

                <p><strong>Reference:</strong> ${number}</p>

                <p><strong>Status:</strong> ${shipment.status}</p>

                <p><strong>Origin:</strong> ${shipment.origin}</p>

                <p><strong>Destination:</strong> ${shipment.destination}</p>

                <p>${shipment.details}</p>

                <small>Sample tracking information only.</small>

            </div>

        `;

    } else {

        result.innerHTML = `

            <div class="tracking-error">

                <h3>SHIPMENT NOT FOUND</h3>

                <p>Please check your tracking number.</p>

                <p>Try: LKL2026001, LKL2026002 or LKL2026003</p>

            </div>

        `;

    }

});


// QUOTATION FORM

const quoteForm = document.getElementById("quote-form");

quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("customer-name").value;

    const email = document.getElementById("customer-email").value;

    const phone = document.getElementById("customer-phone").value;

    const service = document.getElementById("customer-service").value;

    const details = document.getElementById("cargo-details").value;

    const message = `

Hello LIVEKEN LOGISTICS,

I would like to request a logistics quotation.

Name: ${name}

Email: ${email}

Phone: ${phone}

Service: ${service}

Cargo Details: ${details}

    `;

    // Replace with the company's actual WhatsApp number.

    const whatsappNumber = "254716102620";

    const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("copyright").innerHTML =

    "&copy; " + new Date().getFullYear() +

    " LIVEKEN LOGISTICS. All Rights Reserved.";