let datasrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.228639166317!2d12.017878972629852!3d57.84359979558896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46455fca362c89db%3A0x7aff65f495b03aee!2zU8O2cmfDpXJkc3bDpGdlbiAxMCwgNDQ1IDM3IEJvaHVz!5e1!3m2!1ssv!2sse!4v1739278240716!5m2!1ssv!2sse"

let map = document.getElementById ('mymap');
let frame = document.createElement ('iframe');
frame.src = datasrc;
frame.id = "iframe-map";
frame.width = "600px";
frame.height = "450px";

let maplistner = function (e) {
    map.appendChild(frame);
    removeFadeOut(document.getElementById('placeholder-img'), 2000);
    map.removeEventListener ("mouseover", maplistner);
};

function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.zIndex = -1;
    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}

map.addEventListener ('mouseover', maplistner);