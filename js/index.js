
document.addEventListener("DOMContentLoaded", function() {

    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headings.forEach(function(heading) {
        var box = document.createElement("div");

        box.classList.add("heading-box");

        box.appendChild(heading.cloneNode(true));

        heading.parentNode.replaceChild(box, heading);
    });
});

// JavaScript for wrapping headings and numbered links in boxes

