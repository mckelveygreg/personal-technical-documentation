// Auto Navbar
var sections = document.querySelectorAll('.main-section');
var navbar = document.querySelector('#navbar');

sections.forEach(section => {
    var header = section.firstElementChild.textContent;
    let sectionId = header.replace(/\s+/g, '_');
    
    section.setAttribute('id', sectionId);

    var link = document.createElement('a');
    link.setAttribute('href', '#' + sectionId);
    link.setAttribute('class', 'nav-link');
    
    link.innerText = header;

    // Build subHeadings for each section
    var subHeadings = section.querySelectorAll('h3');
    // returns an unordered list of subheading links
    subHeadings = buildSubHeadings(subHeadings);

    navbar.appendChild(link);
    navbar.appendChild(subHeadings);
});

function buildSubHeadings (el) {
    var subUl = document.createElement('ul');
    // Find each h3 element in each given section, make a list full of links
    el.forEach(h3 => {
        var subLi = document.createElement('li');
        var subA = document.createElement('a');
        let sectionId = h3.textContent.replace(/\s+/g, '_');
        
        h3.setAttribute('id', sectionId);
        subA.innerText = h3.textContent;
        subA.setAttribute('href', '#' + sectionId);
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
    });

    return subUl;
}

// Footer source url generator

// var sourceURL = "https://github.com/mckelveygreg" + window.location.pathname;
// var sourceA = document.querySelector('#sourceURL');
// sourceA.setAttribute('href', sourceURL);
                