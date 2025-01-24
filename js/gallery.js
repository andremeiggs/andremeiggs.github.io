/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Cambiar el texto del div con ID "image"
    document.getElementById("image").innerHTML = previewPic.alt;

    // Cambiar la imagen de fondo del div con ID "image"
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
    // Restaurar el texto original
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";

    // Restaurar la imagen de fondo original
    document.getElementById("image").style.backgroundImage = "url('https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2017/06/00c04d57e42c56f9116eef3f1df14d53-1024x666.jpg')";
}
