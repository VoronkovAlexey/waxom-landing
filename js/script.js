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

function Block1ImgHover(){
    document.getElementById("block1Img").src = "img/icons/icon_1_1.png";
    document.getElementById("line1").src = "img/icons/line_1_1.png";

}

function Block1Img(){
    document.getElementById("block1Img").src = "img/icons/icon_1.png";
    document.getElementById("line1").src = "img/icons/line_1.png";

}

function Block2ImgHover(){
    document.getElementById("block2Img").src = "img/icons/icon_2_1.png";
    document.getElementById("line2").src = "img/icons/line_1_1.png";

}

function Block2Img(){
    document.getElementById("block2Img").src = "img/icons/icon_2.png";
    document.getElementById("line2").src = "img/icons/line_1.png";

}

function Block3ImgHover(){
    document.getElementById("block3Img").src = "img/icons/icon_3_1.png";
    document.getElementById("line3").src = "img/icons/line_1_1.png";

}

function Block3Img(){
    document.getElementById("block3Img").src = "img/icons/icon_3.png";
    document.getElementById("line3").src = "img/icons/line_1.png";

}

function Block4ImgHover(){
    document.getElementById("block4Img").src = "img/icons/icon_4_1.png";
    document.getElementById("line4").src = "img/icons/line_1_1.png";

}

function Block4Img(){
    document.getElementById("block4Img").src = "img/icons/icon_4.png";
    document.getElementById("line4").src = "img/icons/line_1.png";

}




