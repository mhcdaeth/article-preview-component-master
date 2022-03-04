var mobile = innerWidth <= 374
var desktop = innerWidth > 374

var share = document.querySelector(".share")


if(mobile === true){
    forMobile(share)
} else if(desktop === true){
    forDesktop(share)
}

function forMobile(shareBtn){

    share.addEventListener("click", function(){
        var hides_person = document.querySelector(".person").classList.toggle("deactive")
        var active = document.querySelector(".active").classList.toggle("flex")
        var bottomBackgroundChange = document.querySelector(".bottom").classList.toggle("bottom_bg")
        var shareActive = share.classList.toggle("share-active")
    })
        
}


function forDesktop(shareBtnDesktop){

    share.addEventListener("click", function(){
                var active = document.querySelector(".active").classList.toggle("flex")
    })

}
