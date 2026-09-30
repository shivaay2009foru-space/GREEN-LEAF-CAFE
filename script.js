const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = bookingForm.querySelector('input[type="text"]').value;
    const phone = bookingForm.querySelector('input[type="tel"]').value;
    const date = bookingForm.querySelector('input[type="date"]').value;
    const time = bookingForm.querySelector('input[type="time"]').value;

    const message =
        `Hello Green Leaf Café!%0A%0A` +
        `I'd like to request a reservation.%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Date: ${date}%0A` +
        `Time: ${time}`;

    const whatsappNumber = "919876543210";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );
});