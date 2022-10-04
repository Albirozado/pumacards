document.querySelectorAll(".imagem_pequena_1").forEach(image =>{
    image.addEventListener("mouseenter", () =>{
        var src = image.getAttribute("src")
        document.querySelector(".imagem_grande_1").src = src
    })
})
document.querySelectorAll(".imagem_pequena_2").forEach(image =>{
    image.addEventListener("mouseenter", () =>{
        var src = image.getAttribute("src")
        document.querySelector(".imagem_grande_2").src = src
    })
})

document.querySelectorAll(".imagem_pequena_3").forEach(image =>{
    image.addEventListener("mouseenter", () =>{
        var src = image.getAttribute("src")
        document.querySelector(".imagem_grande_3").src = src
    })
})
document.querySelectorAll(".imagem_pequena_4").forEach(image =>{
    image.addEventListener("mouseenter", () =>{
        var src = image.getAttribute("src")
        document.querySelector(".imagem_grande_4").src = src
    })
})
document.querySelectorAll(".imagem_pequena_5").forEach(image =>{
    image.addEventListener("mouseenter", () =>{
        var src = image.getAttribute("src")
        document.querySelector(".imagem_grande_5").src = src
    })
})
document.querySelectorAll(".imagem_pequena_6").forEach(image =>{
    image.addEventListener("mouseenter", () =>{
        var src = image.getAttribute("src")
        document.querySelector(".imagem_grande_6").src = src
    })
})

let containerPreview = document.querySelector(".container_preview")
let boxPreview = document.querySelectorAll(".preview")
let corpo = document.querySelector(".corpo")
document.querySelectorAll(".container_produtos .produto_box"). forEach(box =>{
    box.onclick = () =>{
        corpo.classList.add("barra")
        containerPreview.style.display = "flex"
        let nameAtribute = box.getAttribute("data-name")
        boxPreview.forEach(box =>{
            let targetAtribute = box.getAttribute("data-target")
            if(nameAtribute == targetAtribute){
                box.classList.add("active")
            }
        })

    }
})
boxPreview.forEach(fechar =>{
    fechar.querySelector(".fa-xmark").onclick = () =>{
        fechar.classList.remove("active")
        containerPreview.style.display = "none"
        corpo.classList.remove("barra")


    }
})

function loading (){
    document.querySelector(".preloader").style.display = "none"
    document.querySelector(".allcontainer").style.display = "block"
}

