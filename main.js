// Auto Navbar
var sections = document.querySelectorAll('.main-section');
var navbar = document.querySelector('#navbar');

sections.forEach(section => {
    var header = section.firstElementChild.textContent;
    var sectionId = header.replace(/\s+/g, '_');
    
    section.setAttribute('id', sectionId);

    var link = document.createElement('a');
    link.setAttribute('href', '#' + sectionId);
    link.setAttribute('class', 'nav-link');
    
    link.innerText = header;
    navbar.appendChild(link);
})

// Footer source url generator

var sourceURL = "https://github.com/mckelveygreg" + window.location.pathname;
var sourceA = document.querySelector('#sourceURL');
sourceA.setAttribute('href', sourceURL);
                