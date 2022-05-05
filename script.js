const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated")[0].classList.add("fade-in-top");
        }
    })
})

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated")[1].classList.add("fade-in-top");
        }
    })
})

const card1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated-card")[0].classList.add("fade-in-left");
        }
    })
})

const card2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated-card")[1].classList.add("fade-in-top");
        }
    })
})

const card3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            document.querySelectorAll(".animated-card")[2].classList.add("fade-in-right");
        }
    })
})

observer1.observe(document.querySelector("#row1"));
observer2.observe(document.querySelector("#row2"));
card1.observe(document.querySelector("#card1"));
card2.observe(document.querySelector("#card2"));
card3.observe(document.querySelector("#card3"));

