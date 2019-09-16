var imgList = new Array("url(img/photo.png)","url(img/photo2.jpg)","url(img/photo3.jpg)");
var index = 0;
function leftarrow(){
    index--;
    if (index < 0) {
        index = imgList.length - 1;
    }
    document.getElementById("firstPageContainer").style.backgroundImage = imgList[index];
    document.getElementById("galeryCheck"+index).checked = true;
    
};

function rightarrow(){
    index++;
    if (index > imgList.length - 1) {
        index = 0;
    }
    
    document.getElementById("firstPageContainer").style.backgroundImage = imgList[index];
    document.getElementById("galeryCheck"+index).checked = true;
    
};

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

function burgerMenuButton_activate(){
    event.preventDefault;
    document.getElementById("burgerMenuButton").classList.toggle("burgerMenuButton_active");
    document.getElementById("navMenu").classList.toggle("navMenu_active");

}




