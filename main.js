/* Start Responsive header  */
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".list-items");
    const navLinks = document.querySelectorAll(".list-items li");

    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .8}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
/* End Responsive header  */


/* Start Store Products Filters */

(function() {


const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll(".store-item");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter;

        

        storeItems.forEach((item) => {
            if(filter === "all") {
                item.style.display = "block"
            } else {
                if(item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        })
    })
})



})();


(function() {
    const searchBox = document.querySelector("#search-item");
    const storeItems = document.querySelectorAll(".store-item");

    searchBox.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase().trim();

        storeItems.forEach((item) => {
            if(item.textContent.includes(searchFilter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        })
    })

})();

/* End store Products filters*/