// Function to open the modal
function openModal(element) {
    const modal = document.getElementById('modal-overlay');
    const title = element.querySelector('h2').textContent;
    const date = element.querySelector('.date').textContent;
    const content = element.querySelector('p').textContent;

    // Update modal content
    modal.querySelector('h2').textContent = title;
    modal.querySelector('.date').textContent = date;
    modal.querySelector('p').textContent = content;

    // Show modal
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}