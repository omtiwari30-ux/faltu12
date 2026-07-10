let h1 = document.querySelector("#main");
window.addEventListener("keydown", function (dets) {
    if(dets.key===" "){
        h1.textContent = "spc";
    }
    else
    {
        console.log(dets);
        h1.textContent = dets.key;
    }
});
