function replaceLinks() {
    var links = document.querySelectorAll('a[href*="link.zhihu.com/?target="]');
    links.forEach(link => {
        link.href = decodeURIComponent(link.href.split('target=')[1]);
    });
}

var observer = new MutationObserver(mutations => {
    replaceLinks();
});
observer.observe(document, {
    subtree: true,
    attributes: true
});