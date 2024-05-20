import blogs from '../blogs.json'

const blogsContainer = document.getElementById("blogs-container")
const blogsList = blogs["blogs"]
    
blogsList.forEach(blog => {
    const div = document.createElement("div")
    const img = document.createElement("img")
    const text = document.createElement("div")

    div.className = "blog-card"
    div.style.backgroundColor = blog.bgColor
    div.onclick = e => location.href = blog.link
    img.src = blog.imgSrc
    img.className = "blog-card-img"
    text.innerText = blog.text

    div.appendChild(img)
    div.appendChild(text)
    blogsContainer.appendChild(div)
})
