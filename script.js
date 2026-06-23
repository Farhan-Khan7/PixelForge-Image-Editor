const uploadLabel = document.querySelector("#upload-label");
const inputImg = document.querySelector("#input-img");
const previewImg = document.querySelector("#preview-image");
const showImgsection = document.querySelector(".show-img")


inputImg.addEventListener("change", function () {
    const imgPath = inputImg.files[0];


    if (!imgPath) return;

    const src = URL.createObjectURL(imgPath);
    previewImg.src = `${src}`;
    showImgsection.style.display = "flex";

})