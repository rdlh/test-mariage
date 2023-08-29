for(i = 1; i < 82; i++) {
    var elem = document.createElement('a')
    elem.className = 'grid-item'
    elem.setAttribute('data-lightbox', 'wedding')
    elem.setAttribute('href', `/images/${i}.jpg`)
    elem.innerHTML = `<img src="/images/thumbs/${i}.jpg" />`
    document.querySelector('.grid').appendChild(elem)
}

// On all images are loaded, initialize Masonry

setTimeout(function() {
    imagesLoaded(document.querySelector('.grid'), function() {
        var elem = document.querySelector('.grid')
        var msnry = new Masonry(elem, { })
    });
}, 100)
