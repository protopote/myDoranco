document.body.onload = addElement;

function addElement() {
    // FOOTER
    // create a new div element
    let footer = document.createElement("footer");
    // and give it some content
    let footerContent = document.createTextNode("© 2022 by Etan");
    let newFooterContent = document.createTextNode("");
        //
        let urlDiscord = "https://discord.gg/vZDGZKAAMe";
        let theFirstAHref = document.createTextNode(urlDiscord);
        //https://discord.gg/vZDGZKAAMe
        //
        let paraOne = document.createElement("p")
        let paraTwo = document.createElement("p")
        let aHrefOne = document.createElement("a")

    // add the text node to the newly created div
    footer.appendChild(paraOne);
    footer.appendChild(paraTwo);
        //
        paraOne.appendChild(footerContent);
        paraTwo.appendChild(newFooterContent);
            //
            aHrefOne.href = 'https://discord.gg/vZDGZKAAMe';
            paraTwo.appendChild(aHrefOne);
                aHrefOne.appendChild(theFirstAHref);
            //
            //var texteAffiché = "Discord";
            //var URL = "https://discord.gg/vZDGZKAAMe";
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(footer, currentDiv);

    //style
    //let newStyleFooter = document.getElementById('footer')
        footer.style.color = "lightgray";
        footer.style.backgroundColor = "black";
        footer.style.width = "100%";
        footer.style.height = "auto";
        footer.style.textAlign = "center";
        footer.style.margin = "auto";
        footer.style.paddingTop = "20px";
        footer.style.paddingBottom = "20px";
        footer.style.alignItems = "center";
            //console.log(newStyleFooter)
            console.log(footer)





}



/*(function() {
    var header = 'HEADER CONTENT';
    var footer = 'FOOTER CONTENT';
   
    var headerContainer = document.querySelector('#dynamic-header');
    if (headerContainer && header) {
        headerContainer.innerHTML = header;
    }
   
    var footerContainer = document.querySelector('#dynamic-footer');
    if (footerContainer && footer) {
        footerContainer.innerHTML = footer;
    }
   
    // If you need external stylesheets
    //var link = document.createElement('link');
    //link.rel = 'stylesheet';
    //link.href = '//path/to/external/stylesheet.css';
    //document.head.appendChild(link);
   
    // If you need external scripts
    //var script = document.createElement('script');
    //script.src = '//path/to/external/script.js';
    //document.body.appendChild(script);
   })();*/