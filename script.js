function openTab(tabName) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Show selected tab content and highlight button
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}