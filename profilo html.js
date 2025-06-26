// Handle "Resume" button click
document.getElementById("downloadBtn").addEventListener("click", function() {
    // Opens the resume in a new tab
    window.open("file:///C:/Users/HP/Downloads/Neeraja%20updated%20resume.pdf", "_blank"); // Make sure the PDF is in the same folder
});

// Handle "Contact" button click
document.getElementById("contactBtn").addEventListener("click", function() {
    // Show contact info (you can change this to a modal or scroll to a contact section)
    alert("You can contact me at neeraja@example.com");
});