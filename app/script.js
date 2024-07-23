document.addEventListener('DOMContentLoaded', function() {
    // Get the current path of the page
    var currentPath = window.location.pathname;
    
    // Get all the nav items
    var navItems = document.querySelectorAll('a');
    
    navItems.forEach(function(item) {
        // Remove the active class from all items
        item.classList.remove('active');
        
        // If the item's href matches the current path, add the active class
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
        
        // Add click event to change the active class
        item.addEventListener('click', function() {
            navItems.forEach(function(nav) {
                nav.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});