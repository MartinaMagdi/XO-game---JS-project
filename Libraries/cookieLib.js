function getCookie(cookieName) {
    var temp= document.cookie;
    var tempArray = temp.split(';');
    var result;
    for (var i = 0; i < tempArray.length; i++) {
        tempArray[i] = tempArray[i].trimStart();
        if (tempArray[i].startsWith(cookieName)) {
            result=tempArray[i].substring(cookieName.length+1);
        }
    }
    return result;
}

function setCookie(cookieName,cookieValue,expiryDate) {
    if (expiryDate=='') {
        document.cookie = cookieName+'='+cookieValue+'; expires='+new Date(0);
    } else{
        document.cookie = cookieName+'='+cookieValue+'; expires='+expiryDate;
    }
}

function deleteCookie(cookieName) {
    var oldDate = new Date(0);
    setCookie(cookieName,'',oldDate);
}

function allCookieList() {
    var temp= document.cookie;
    var tempArray = temp.split(';');
    for (var i = 0; i < tempArray.length; i++) {
        tempArray[i] = tempArray[i].trimStart();
    }
    return tempArray;
}

function hasCookie(cookieName) {
    var temp= document.cookie;
    var tempArray = temp.split(';');
    var result = false;
    for (var i = 0; i < tempArray.length; i++) {
        tempArray[i] = tempArray[i].trimStart();
        if (tempArray[i].startsWith(cookieName)) {
            result=true;
        }
    }
    return result;
}