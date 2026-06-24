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

// For apply filters


const defaultFilters = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscale: 0,
    sepia: 0,
    invert: 0,
    blurimg: 0,
    opacity: 100,
    hueRotate: 0
};

const Filters = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscale: 0,
    sepia: 0,
    invert: 0,
    blurimg: 0,
    opacity: 100,
    hueRotate: 0
};


function applyFilters() {
    previewImg.style.filter = `
        brightness(${Filters.brightness}%)
        contrast(${Filters.contrast}%)
        saturate(${Filters.saturation}%)
        grayscale(${defaultFilters.grayscale}%)
        sepia(${Filters.sepia}%)
        invert(${Filters.invert}%)
        blur(${Filters.blurimg}px)
        opacity(${Filters.opacity}%)
        hue-rotate(${Filters.hueRotate}deg)
    `;
}


// Brightness
const brightnessControl = document.querySelector("#brightness input");
const brightnessPercentage = document.querySelector("#brightness .value");

brightnessControl.addEventListener("input", function () {
    Filters.brightness = this.value;
    brightnessPercentage.textContent = `${Filters.brightness}%`;
    applyFilters();
});

// Contrast
const contrastControl = document.querySelector("#contrast input");
const contrastPercentage = document.querySelector("#contrast .value");

contrastControl.addEventListener("input", function () {
    Filters.contrast = this.value;
    contrastPercentage.textContent = `${Filters.contrast}%`;
    applyFilters();
});

// Saturation
const saturationControl = document.querySelector("#saturation input");
const saturationPercentage = document.querySelector("#saturation .value");

saturationControl.addEventListener("input", function () {
    Filters.saturation = this.value;
    saturationPercentage.textContent = `${Filters.saturation}%`;
    applyFilters();
});

// Grayscale
const grayscaleControl = document.querySelector("#grayscale input");
const grayscalePercentage = document.querySelector("#grayscale .value");

grayscaleControl.addEventListener("input", function () {
    Filters.grayscale = this.value;
    grayscalePercentage.textContent = `${Filters.grayscale}%`;
    applyFilters();
});

// Sepia
const sepiaControl = document.querySelector("#sepia input");
const sepiaPercentage = document.querySelector("#sepia .value");

sepiaControl.addEventListener("input", function () {
    Filters.sepia = this.value;
    sepiaPercentage.textContent = `${Filters.sepia}%`;
    applyFilters();
});

// Invert
const invertControl = document.querySelector("#invert input");
const invertPercentage = document.querySelector("#invert .value");

invertControl.addEventListener("input", function () {
    Filters.invert = this.value;
    invertPercentage.textContent = `${Filters.invert}%`;
    applyFilters();
});

// Blur
const blurControl = document.querySelector("#blur input");
const blurPercentage = document.querySelector("#blur .value");

blurControl.addEventListener("input", function () {
    Filters.blurimg = this.value;
    blurPercentage.textContent = `${Filters.blurimg}px`;
    applyFilters();
});

// Opacity
const opacityControl = document.querySelector("#opacity input");
const opacityPercentage = document.querySelector("#opacity .value");

opacityControl.addEventListener("input", function () {
    Filters.opacity = this.value;
    opacityPercentage.textContent = `${Filters.opacity}%`;
    applyFilters();
});

// Hue Rotate
const hueRotateControl = document.querySelector("#hue-rotate input");
const hueRotatePercentage = document.querySelector("#hue-rotate .value");

hueRotateControl.addEventListener("input", function () {
    Filters.hueRotate = this.value;
    hueRotatePercentage.textContent = `${Filters.hueRotate}°`;
    applyFilters();
});



// Reset All filters 


function resetFilter() {
Filters.brightness = defaultFilters.brightness;
Filters.contrast = defaultFilters.contrast;
Filters.saturation = defaultFilters.saturation;
Filters.grayscale = defaultFilters.grayscale;
Filters.sepia = defaultFilters.sepia;
Filters.invert = defaultFilters.invert;
Filters.blurimg = defaultFilters.blurimg;
Filters.opacity = defaultFilters.opacity;
Filters.hueRotate = defaultFilters.hueRotate;

    brightnessControl.value = Filters.brightness
    contrastControl.value = Filters.contrast
    saturationControl.value = Filters.saturation
    grayscaleControl.value = Filters.grayscale
    sepiaControl.value = Filters.sepia
    invertControl.value = Filters.invert
    blurControl.value = Filters.blurimg
    opacityControl.value = Filters.opacity
    hueRotateControl.value = Filters.hueRotate

    brightnessPercentage.textContent = `${Filters.brightness}%`;
    contrastPercentage.textContent = `${Filters.contrast}%`;
    saturationPercentage.textContent = `${Filters.saturation}%`;
    grayscalePercentage.textContent = `${Filters.grayscale}%`;
    sepiaPercentage.textContent = `${Filters.sepia}%`;
    invertPercentage.textContent = `${Filters.invert}%`;
    blurPercentage.textContent = `${Filters.blurimg}px`;
    opacityPercentage.textContent = `${Filters.opacity}%`;
    hueRotatePercentage.textContent = `${Filters.hueRotate}°`;
}

const resetFilters = document.querySelector("#reset-editing");

resetFilters.addEventListener("click", function () {
    resetFilter()
    applyFilters()
})


// Adjust panel open code 

const adjustImgBtn = document.querySelector("#adjust-img");
const editPanel = document.querySelector(".editor-controls");
const imgPreview = document.querySelector(".image-preview");

let isOpen = true
adjustImgBtn.addEventListener("click", function(){
    if(isOpen){
        editPanel.style.display = "flex"
        editPanel.style.animation = "panelOpen 1.7s ease forwards";
        imgPreview.style.animation = "previewOpen 2s ease forwards";
        isOpen = false
    }else{
        editPanel.style.animation = "panelClose 1s ease forwards";
        setTimeout(() =>{
            imgPreview.style.animation = "previewClose .8s ease forwards";
            editPanel.style.display = "none"
        },1000)
        isOpen = true
    }
})