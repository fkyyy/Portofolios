//toggle & responsive navigation//
const navslide = () => {
    const burger = document.queryselector(".burger")
    const navlists =document.querySelector("nav")

    burger.addeventlistener("click",() => {
        navlists.classList.toggle("nav-active")
        burger.classlist.toggle("toggle-burger")
    });
};

navslide();
//clear form before unload//

window.onbeforeunload = () => {
    for (const form of document.getelementbytagname("form")){
        form.reset();
    }
};
