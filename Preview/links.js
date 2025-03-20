const links = [
    { texto: "Veterinario", href: "#veterinario" }, //SOLO HAY Q CAMBIAR EL STRING POR EL LINK
    { texto: "Cuidadores", href: "#cuidadores" },
    { texto: "Hoteles", href: "#hoteles" },
    { texto: "Peluquería", href: "#peluqueria" },
];

function crearLinks() {
    const contenedorLinks = document.createElement("div");
    contenedorLinks.classList.add("services-container");
    contenedorLinks.setAttribute("id", "menuLinks");
    

    links.forEach((linkInfo) => {
        const tarjetaProfesional = document.createElement("div");
        tarjetaProfesional.classList.add("card-service");

        const enlaceProfesional = document.createElement("a");
        enlaceProfesional.textContent = linkInfo.texto;
        enlaceProfesional.setAttribute("href", linkInfo.href);
        enlaceProfesional.classList.add("enlace-profesional");

        tarjetaProfesional.appendChild(enlaceProfesional);
        contenedorLinks.appendChild(tarjetaProfesional);
    });

    const seccionServicios = document.getElementById("services");
    if (seccionServicios) {
        seccionServicios.appendChild(contenedorLinks);
    } else {console.log("Vete a cagar!");
    }
}

crearLinks();
