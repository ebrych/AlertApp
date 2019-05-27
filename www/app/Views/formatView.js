function homeViewFormat(){
    //document.getElementById('body').style.backgroundColor='#008477';
    document.getElementById('body').removeAttribute("style");
    document.getElementById('body').style.background="url('./img/cityBg.png')";
    document.getElementById('body').style.backgroundSize='cover';
    document.getElementById('body').style.backgroundPosition='100% top';
    document.getElementById('body').style.backgroundAttachment='fixed';
    document.getElementById('body').style.backgroundRepeat='no-repeat'; 
}
function internalViewFormat(){
    document.getElementById('body').removeAttribute("style");
    document.getElementById('body').style.backgroundColor="#f3f3f3";
}