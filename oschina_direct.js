function replaceLinks() {
    var links = document.querySelectorAll('a[href*="www.oschina.net/action/GoToLink?url="]');
    links.forEach(link => {
        link.href = decodeURIComponent(link.href.split('url=')[1]);
    });
}

var observer = new MutationObserver(mutations => {
    replaceLinks();
});
observer.observe(document, {
    subtree: true,
    attributes: true
});