﻿
var setHybicons = function () {
    var iconname = getQueryVariable("hybicon");

    if (iconname !== "") {
        var icons = document.querySelectorAll('[data-hybicon]');

        for (var i = 0; i < icons.length; i++) {
            var icon = document.getElementById(icons[i].id);
            icon.setAttribute('data-hybicon', iconname);
            new hybicon(icons[i].id);
        }
    }

    var hovermode = getQueryVariable("hovermode");
    if (hovermode !== "") { setMode("hovermode", hovermode); }

    var clickmode = getQueryVariable("clickmode");
    if (clickmode !== "") { setMode("clickmode", clickmode); }

    var infomode = getQueryVariable("infomode");
    if (infomode !== "") { setMode("infomode", infomode); }

    createAvailableIcons();
};

var setMode = function (mode, modevalue) {
    var hybicons = document.querySelectorAll('[data-hybicon]');

    if (modevalue === undefined) { modevalue = ""; }
    
    for (var i = 0; i < hybicons.length; i++) {
        var hybiconId = hybicons[i].id;
        if (hybiconId !== 'userideaheader' &&
            hybiconId !== 'checkboxHover' &&
            hybiconId !== 'checkboxClick' &&
            hybiconId !== 'checkboxInfo' &&
            hybiconId !== 'iconGitHub' &&
            hybiconId !== 'iconTwitter' &&
            hybiconId !== 'iconMail') {
            var icon = document.getElementById(hybiconId);
            if (icon.hasAttribute('data-hybicon-' + mode )) {
                icon.removeAttribute('data-hybicon-' + mode );
            }
            else {
                icon.setAttribute('data-hybicon-' + mode, modevalue);
                if (mode === "infomode") {
                    icon.setAttribute('data-hybicon-infotext', 'info');
                }
            }
            new hybicon(hybiconId);
        }
    }
};

var selectSource = function (element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};

var getQueryVariable = function (variable) {
    var query = window.location.search.substring(1);
    var queryString = query.split("&");
    for (var i = 0; i < queryString.length; i++) {
        var pair = queryString[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return ("");
};

var setStyle = function () {
    var classname = document.body.getAttribute("class");
    footer = document.getElementById("footer");
    if (classname === "styledark") {
        document.body.setAttribute("class", "stylelight");
        footer.setAttribute("class", "stylelight");
    }
    else {
        document.body.setAttribute("class", "styledark");
        footer.setAttribute("class", "styledark");
    }
};

var setDetails = function (mode) {
    
    var details = "Please click the icons above for details";

    switch (mode) {
        case "hover":
            details = "Hover mode is suitable for links and navigate to outside the page.";
            break;
        case "click":
            details = "Click mode is perfect for switchers and call a method inside the page.";
            break;
        case "info":
            details = "Info mode when you want to show more. Psst... There is a <a href='github.html'>GitHub plugin</a>";
            break;
        default:

    }

    document.getElementById("details").innerHTML = details;
};

var createAvailableIcons = function (mode) {

    var allhybicon = document.getElementById("allhybicon");

    for (var property in icon) {
        if (icon.hasOwnProperty(property)) {
            console.log(property);
            var icondiv = "<div class='col-lg-2 col-md-3 col-sm-4 col-xs-6'>";
            icondiv += "     <div data-hybicon='" + property + "'></div>";
            icondiv += "     <div class='smalltitle'>" + property + "</div>";
            icondiv += "</div>";
            allhybicon.innerHTML += icondiv;
        }
    }

    new hybicon().parseAll();
};

var setGitHubSize = function () {
    var divGitHubStar = document.getElementById("divGitHubStar");
    var divGitHubFork = document.getElementById("divGitHubFork");
    var divGitHubWatch = document.getElementById("divGitHubWatch");
    var divGitHubIssue = document.getElementById("divGitHubIssue");
    var divGitHubDownload = document.getElementById("divGitHubDownload");

    var infomode = "";
    var hovermode = "";
    var iconSize = 100;

    if (divGitHubStar.getAttribute("data-hybicon-infomode") === "") {
        infomode = "right";
        hovermode = "switch";
        iconSize = 32;
    }
    else {
        infomode = "";
        hovermode = "rotate";
        iconSize = 150;
    }

    // set infomode
    divGitHubStar.setAttribute("data-hybicon-infomode", infomode);
    divGitHubFork.setAttribute("data-hybicon-infomode", infomode);
    divGitHubWatch.setAttribute("data-hybicon-infomode", infomode);
    divGitHubIssue.setAttribute("data-hybicon-infomode", infomode);
    divGitHubDownload.setAttribute("data-hybicon-infomode", infomode);
    
    // set hovermode
    divGitHubStar.setAttribute("data-hybicon-hovermode", hovermode);
    divGitHubFork.setAttribute("data-hybicon-hovermode", hovermode);
    divGitHubWatch.setAttribute("data-hybicon-hovermode", hovermode);
    divGitHubIssue.setAttribute("data-hybicon-hovermode", hovermode);
    divGitHubDownload.setAttribute("data-hybicon-hovermode", hovermode);

    // set size
    divGitHubStar.setAttribute("data-hybicon-size", iconSize);
    divGitHubFork.setAttribute("data-hybicon-size", iconSize);
    divGitHubWatch.setAttribute("data-hybicon-size", iconSize);
    divGitHubIssue.setAttribute("data-hybicon-size", iconSize);
    divGitHubDownload.setAttribute("data-hybicon-size", iconSize);

    new hybicongithub().parseAll();
};