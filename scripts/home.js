const cssVars = getComputedStyle(document.querySelector(":root"))
const header = document.getElementById("header")

window.addEventListener("scroll", e => {
    const bgMarginBottom = parseFloat(cssVars.getPropertyValue("--bg-margin-bottom").replace("px", ""))
    if (window.scrollY >= bgMarginBottom + 20) {
        header.style.color = "var(--black)"
        header.style.backgroundColor = "var(--white)"
    } else {
        header.style.color = "var(--white)"
        header.style.backgroundColor = ""
    }
})