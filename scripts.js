function upDate(previewPic) {
    let mainImage = document.getElementById("main-image");
    let imageText = document.getElementById("image-text");

    mainImage.src = previewPic.src;
    imageText.textContent = previewPic.alt;
}

function undo() {
    let mainImage = document.getElementById("main-image");
    let imageText = document.getElementById("image-text");

    mainImage.src = "Dalat_city.jpg"; // Trở lại ảnh Đà Lạt mặc định
    imageText.textContent = "Hover over an image below to display here.";
}
