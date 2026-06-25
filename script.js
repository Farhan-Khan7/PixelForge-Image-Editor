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


const presetFilters = {

    original: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        grayscale: 0,
        sepia: 0,
        invert: 0,
        blurimg: 0,
        opacity: 100,
        hueRotate: 0
    },

    vintage: {
        brightness: 105,
        contrast: 90,
        saturation: 80,
        grayscale: 0,
        sepia: 35,
        invert: 0,
        blurimg: 0,
        opacity: 100,
        hueRotate: 10
    },

    warm: {
        brightness: 108,
        contrast: 105,
        saturation: 120,
        grayscale: 0,
        sepia: 12,
        invert: 0,
        blurimg: 0,
        opacity: 100,
        hueRotate: -10
    },

    cool: {
        brightness: 98,
        contrast: 105,
        saturation: 110,
        grayscale: 0,
        sepia: 0,
        invert: 0,
        blurimg: 0,
        opacity: 100,
        hueRotate: 25
    },

    dramatic: {
        brightness: 95,
        contrast: 150,
        saturation: 130,
        grayscale: 0,
        sepia: 0,
        invert: 0,
        blurimg: 0,
        opacity: 100,
        hueRotate: 0
    },

    noir: {
        brightness: 100,
        contrast: 180,
        saturation: 0,
        grayscale: 100,
        sepia: 0,
        invert: 0,
        blurimg: 0,
        opacity: 100,
        hueRotate: 0
    },

    faded: {
        brightness: 110,
        contrast: 75,
        saturation: 70,
        grayscale: 10,
        sepia: 0,
        invert: 0,
        blurimg: 1,
        opacity: 95,
        hueRotate: 0
    },

    dreamy: {
        brightness: 115,
        contrast: 85,
        saturation: 115,
        grayscale: 0,
        sepia: 8,
        invert: 0,
        blurimg: 2,
        opacity: 95,
        hueRotate: 5
    },

    cyberpunk: {
        brightness: 110,
        contrast: 145,
        saturation: 180,
        grayscale: 0,
        sepia: 0,
        invert: 0,
        blurimg: 0,
        opacity: 100,
        hueRotate: 45
    },

    cinematic: {
        brightness: 95,
        contrast: 135,
        saturation: 110,
        grayscale: 5,
        sepia: 8,
        invert: 0,
        blurimg: 0,
        opacity: 100,
        hueRotate: -5
    }

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


function updateSlider() {
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
    Object.assign(Filters, defaultFilters);

}

const resetFilters = document.querySelector("#reset-editing");

resetFilters.addEventListener("click", function () {
    resetFilter()
    updateSlider()
    applyFilters()
})


// Adjust panel open code 

const filtersPanel = document.querySelector(".filters");
const adjustPanel = document.querySelector(".panels");
const adjustImgBtn = document.querySelector("#adjust-img");
const filterBtn = document.querySelector("#filters");
const editPanel = document.querySelector(".editor-controls");
const imgPreview = document.querySelector(".image-preview");


let activePanel = null;
adjustImgBtn.addEventListener("click", function () {

    if (activePanel === "adjust") {
        editPanel.style.display = "none";
        imgPreview.style.right = "0";
        activePanel = null;
        return;
    }
    editPanel.style.display = "flex";
    filtersPanel.style.display = "none";
    imgPreview.style.right = "0";

    activePanel = "adjust";
});

filterBtn.addEventListener("click", function () {

    if (activePanel === "filter") {
        filtersPanel.style.display = "none";
        imgPreview.style.right = "0";
        activePanel = null;
        return;
    }

    filtersPanel.style.display = "flex";
    editPanel.style.display = "none";
    imgPreview.style.right = "250px";

    activePanel = "filter";
});



// Preset Filter ke liye code 

const presetButtons = document.querySelectorAll(".preset-btn");


presetButtons.forEach(function(buttons){
    
    buttons.addEventListener("click",function(){
        
        let presetFilter = presetFilters[this.dataset.filter];

        console.log(presetFilter)

        Object.assign(Filters , presetFilter)

        updateSlider();
        applyFilters();
    })
})