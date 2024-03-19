var typed = new Typed("#name", {strings: ["Developer", "Student","Raghav Babbar"],
        typeSpeed : 40,
        backSpeed : 40,
        backDelay : 1500,
        showCursor : false
        })

const fade_observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("fadein_show")
        }
        else{
            entry.target.classList.remove("fadein_show")
        }
    })
})

const bottotop_observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.classList.add("bottotop_show")
            }
            else{
                entry.target.classList.remove("bottotop_show")
            }
        })
    })

const fadeinelements = document.querySelectorAll(".fadein")
fadeinelements.forEach((el)=>{
    fade_observer.observe(el)
})
const bottotopelements = document.querySelectorAll(".bottotop")
bottotopelements.forEach((el)=>{
    bottotop_observer.observe(el)
})