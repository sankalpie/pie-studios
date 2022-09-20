let counter=0;

function showImage() {
    // myImage : ID of image on which to place new image

    var image = document.getElementById('myImage');

    console.log(image.width);

    margin = 20;

    l = image.offsetLeft;
    t = image.offsetTop;
    w = image.width;
    h = image.height;

    // Location inside the image
    offX = parseInt(Math.random() * w);
    offY = parseInt(Math.random() * h);

    if(offX > margin) offX -= margin;
    if(offY > margin) offY -= margin;

    l += offX;
    t += offY;

    var newImage = document.createElement("img");
    newImage.setAttribute('src', '1.jpg');
    newImage.setAttribute('class', 'overlays');
    newImage.style.left = l + "px";
    newImage.style.top = t + "px";
    document.body.appendChild(newImage);
}