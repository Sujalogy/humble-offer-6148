let para = document.getElementById("sliders");
    let array = [ 
        "NEW! Build Your Own Multipacks. Bundle & Save!",
        "50-70% Off Sitewide + New Arrivals",    
        "50% Off Jeans & Shorts + Free Ship On $50+",    
        "NEW! Build Your Own Multipacks. Bundle & Save!",    
        "50-70% Off Sitewide + New Arrivals"
    ];

    let line = 0;

    function updateSlider() {
        para.innerText = array[line];
    }

    function prevSlide() {
        line--;
        if (line < 0) {
            line = array.length - 1;
        }
        updateSlider();
    }

    function nextSlide() {
        line++;
        if (line >= array.length) {
            line = 0;
        }
        updateSlider();
    }

    setInterval(nextSlide, 5000);
