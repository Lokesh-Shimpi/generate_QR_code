let imgbox = document.getElementById("imgbox");
let image = document.getElementById("image");
let text = document.getElementById("text");

function generateQR(){
    if(text.value.length>0){
        image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
        imgbox.classList.add("show-img");
    }else{
        text.classList.add('error');
        setTimeout(()=>{
            text.classList.remove('error');
        },2000);
    }
}