var imgList = new Array("img/photo.png","img/photo2.jpg","img/photo3.jpg");
var index = 0;
function leftarrow(){
    index--;
    if (index < 0) {
        index = imgList.length - 1;
    }
    document.getElementById("mainImage").src = imgList[index];
    // document.getElementById("mainImage").slideRight = imgList[index];
    document.getElementById("galeryCheck"+index).checked = checked;
    
}

function rightarrow(){
    index++;
    if (index > imgList.length - 1) {
        index = 0;
    }
    document.getElementById("mainImage").src = imgList[index];
    // document.getElementById("mainImage").slideLeft = imgList[index];
    document.getElementById("galeryCheck"+index).checked = true;
    // document.write()
    
}
    