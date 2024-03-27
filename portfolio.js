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

const cursor_dot = document.getElementById("cursor_dot");
const cursor_outline = document.getElementById("cursor_outline");

window.addEventListener("mousemove", function (e) {
    const posx = e.clientX;
    const posy = e.clientY;
    cursor_dot.style.left = posx + "px";
    cursor_dot.style.top = posy + "px";
    cursor_outline.animate({left : posx + "px", top : posy + "px"}, {duration : 400, fill : "forwards"});
})
document.documentElement.addEventListener('mouseleave', function (e) {
    cursor_outline.animate({opacity : 0}, {duration : 500, fill : "forwards"});
    cursor_dot.animate({opacity : 0}, {duration : 500, fill : "forwards"});
})
document.documentElement.addEventListener('mouseenter', function (e) {
    cursor_dot.style.opacity= "1";
    cursor_dot.style.opacity= "1";
    cursor_outline.animate({opacity : 1}, {duration : 500, fill : "forwards"});
    cursor_dot.animate({opacity : 1}, {duration : 500, fill : "forwards"});
})