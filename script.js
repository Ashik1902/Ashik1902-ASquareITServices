document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Display the modal
    const modal = document.getElementById("successModal");
    modal.style.display = "block";

    // Redirect to a confirmation page when the "Proceed" button is clicked
    document.getElementById("redirectButton").addEventListener("click", function () {
        window.location.href ="C:\Users\Ashik ahamed\Desktop\NEW PROJECT\confirmation .html"; // Replace with your confirmation page URL
    });
});
