var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("modal2__close")[0];

btn2.onclick = function() {
    modal2.style.display = "block";
    modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}
