function changeHref(className, newHref) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].href = newHref;
    }
}

// Change href for each class
changeHref('gp1', gp1);
changeHref('gp2', gp2);
changeHref('gp3', gp3);

changeHref('bl1', bl1);
changeHref('bl2', bl2);
changeHref('bl3', bl3);

changeHref('ar1', ar1);
changeHref('ar2', ar2);
changeHref('ar3', ar3);

changeHref('r1', r1);
changeHref('r2', r2);
changeHref('r3', r3);