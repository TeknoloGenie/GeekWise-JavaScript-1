function e(elementType, text, attributes, styles) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    //set the attributes on the tag
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }

    //set the styles
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    return newElement;
}


function sendMsg(){
    var msg = document.getElementById('outgoingMsg').value;
    var msgDisplay = document.getElementById('messages');
    msgDisplay.appendChild(e('li', msg, '', {fontFamily: 'cursive', color: '#1a1a1a'} ));
}

