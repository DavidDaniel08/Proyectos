// typing animation

var typed = new Typed(".typing", {
    strings:["","Student","Web Developer","Software Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// aside

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for(let i = 0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){

        removeBackSection();

        for(let j = 0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("activate")){
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }

            navList[j].querySelector("a").classList.remove("activate");
            }
            this.classList.add("activate")
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }

function removeBackSection(){
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num){
    allSection[num].classList.add("back-section");
}

function showSection(element){
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.remove("activate");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("activate")

}

function updateNav(element){
    for(let i = 0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("activate");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("activate");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}