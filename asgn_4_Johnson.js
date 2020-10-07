var $ = function (id) {
    return document.getElementById(id);
}

// make list of names
var beatlesList = [];

// event handler
var beatlesClick = function (event) {
    var imgElement = event.target;
    // get id of the element that fired the event
    var name = imgElement.id;

    // append names to array
    beatlesList.push(name);


    // switch the border color on the active image

    // reset all borders
    var imageElements = document.getElementsByTagName('img');
    for(var i = 0; i < imageElements.length; i++) {
        imageElements[i].border = '0px';
    }

    // set active border to visible
    imgElement.border = '4px';
    imgElement.style.color = 'yellow';
}

// event handler
var displayClick = function () {
    // build string for display
    var displayName = '';

    // capitalize just the first letter of each name
    var beatlesListCapital = [];
    for(var i = 0; i < beatlesList.length; i++) {
        var restOfLetters = beatlesList[i].substring(1);
        var firstLetter = beatlesList[i][0].toUpperCase();

        var capitalizedName = firstLetter + restOfLetters;

        beatlesListCapital.push(capitalizedName);
    }

    for (var i = 0; i < beatlesListCapital.length; i++) {
        // adding the number of the name
        displayName = displayName + (i + 1) + '. ' + beatlesListCapital[i];
        if(i < beatlesListCapital.length - 1) {
            displayName = displayName + ', ';
        }
    }

    $('list').innerHTML = displayName;
};

var attachImageElementClickHandlers = function() {
    // get all image elements
    var imageTags = document.getElementsByTagName('img');

    // attach event handler to img elements
    for (var i = 0; i < imageTags.length; i++) {
        imageTags[i].addEventListener('click', beatlesClick);
    }
}

var attachDisplayButtonClickHandler  = function() {
    $('showlist').addEventListener('click', displayClick);
}

window.onload = function () {
    attachImageElementClickHandlers();
    attachDisplayButtonClickHandler();
}