document.getElementById("feedbackForm").addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById("feedbackName").value;
    const comment = document.getElementById("feedbackText").value;
    const display = document.getElementById("feedbackDisplay");

    const newFeedback = document.createElement('p');
    newFeedback.textContent = `${name} says: ${comment}`;
    display.prepend(newFeedback);

    this.reset();
});