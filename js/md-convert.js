document.body.style.display = "none"; // Hide the page until it's finished rendering.

document.createElement("markdown");
const md_tags = document.getElementsByTagName("markdown"); // Returns array of all markdown tags.

// Marked (needs no init)

// Remarkable
const md = new Remarkable('commonmark');
md.set({
  typographer: false,
  highlight: function (/*str, lang*/) { return ''; }
});

// Showdown
// const converter = new showdown.Converter();
// this fails:
// converter.tables = true;


for (let i = 0; i < md_tags.length; i++) { // Iterate through all the tags, and generate the HTML.
    let md_text = md_tags[i].textContent.replace(/^[^\S\n]+/mg, ""); // I love regex, so shoot me.

    let md_div = document.createElement("div"); // Make a new div to replace the fake tag.
    md_div.id = "content";
    // Marked
    md_div.innerHTML = marked(md_text);
    // Remarkable
    // md_div.innerHTML = md.render(md_text);
    // Showdown
    // md_div.innerHTML = converter.makeHtml(md_text);

    md_tags[i].parentNode.appendChild(md_div); // Add remove the old raw markdown.
    md_tags[i].parentNode.removeChild(md_tags[i]);
}

document.body.style.display = ""; // Show the rendered page.