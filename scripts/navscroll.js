window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    var openbgr = this.document.querySelector("a.opensec");
    header.classList.toggle("sticky", this.window.scrollY > 0);
    openbgr.classList.toggle("sticky", this.window.scrollY > 0);
})