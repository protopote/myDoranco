document.body.onload = addElement;

function addElement() {
    // GAME
    // create a new div element
    let game = document.createElement("game");
    // and give it some content
    let gameContent = document.createTextNode("NEW GAME");
    let newGameContent = document.createTextNode("");
        //
        let urlDiscord = "123456789";
        let theFirstGameAHref = document.createTextNode(urlDiscord);
        //https://discord.gg/vZDGZKAAMe
        //
        let gameParaOne = document.createElement("p")
        let gameParaTwo = document.createElement("p")
        let gameAHrefOne = document.createElement("a")

    // add the text node to the newly created div
    game.appendChild(paraOne);
    game.appendChild(paraTwo);
        //
        gameParaOne.appendChild(footerContent);
        gameParaTwo.appendChild(newFooterContent);
            //
            gameAHrefOne.href = 'game';
            gameParaTwo.appendChild(gameAHrefOne);
                gameAHrefOne.appendChild(theFirstGameAHref);
            //
            //var texteAffiché = "Discord";
            //var URL = "https://discord.gg/vZDGZKAAMe";
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(game, currentDiv);

    //style
    //let newStyleFooter = document.getElementById('footer')
        game.style.color = "lightgray";
        game.style.backgroundColor = "black";
        game.style.width = "100%";
        game.style.height = "auto";
        game.style.textAlign = "center";
        game.style.margin = "auto";
        game.style.paddingTop = "20px";
        game.style.paddingBottom = "20px";
        game.style.alignItems = "center";
            //console.log(newStyleFooter)
            console.log(game)





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