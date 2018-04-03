//The caption version works great now. Remark md code: ![:sound path/to/image.jpg, A figure caption](path/to/audio.wav)

function play(p){
    var a=document.getElementById(p);
    a.play();
};
remark.macros.soundgood = function () {
    var sound = this;
    var image = arguments[0];

    return '<audio id="' + sound + '" src="' + sound + '"></audio>' +
    '<img  style=\'cursor: pointer;\' src="' + image + '" onClick="play(\'' + sound + '\')" class="sound" />';
};

remark.macros.sound = function () {
    var sound = this;
    var image = arguments[0];
    if (arguments.length > 1) {
        var caption = arguments[1];
    } else {
        caption = 'undefined';
    } 
    if (caption == 'undefined') {
        caption = "";
    } 
    caption = caption.replace(/^"(.*)"$/, '$1');
    caption = caption.replace(/^'(.*)'$/, '$1');



    return '<audio id="' + sound + '" src="' + sound + '"></audio>' +

    '<div style="position: relative; text-align: left; margin-bottom: -8px; margin-right: 8px;">' +
    '<img src="' + image + '" style="width: 32px; cursor: pointer;" onClick="play(\'' + sound + '\')" class="sound" alt="' + caption + '" />' +
    '<div style="cursor: pointer; position: absolute; top: 2px; left: 36px;"><a onClick="play(\'' + sound + '\')">' + caption +'</a></div></div>'
};

remark.macros.youtube = function () {
    var id = this;
    return ' <iframe width="420" height="315" src="https://www.youtube.com/embed/' + id + '"></iframe>'; 
};

