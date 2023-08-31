const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', showTabContent);
});

function showTabContent(event) {
    event.preventDefault();

    // Hide all tab content sections
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.add('hidden');
    });

    // Show the selected tab content section
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}
