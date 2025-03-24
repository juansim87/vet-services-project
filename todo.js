
let clinicas = [
  {
    nombreCentro: "Huellas Felices",
    servicios: ["veterinario", "peluqueria canina"],
    localidad: "Madrid",
  },
  {
    nombreCentro: "Amigos Peludos",
    servicios: ["hotel", "cuidador", "veterinario"],
    localidad: "Barcelona",
  },
  {
    nombreCentro: "Cola y Bigote",
    servicios: ["peluqueria canina", "cuidador"],
    localidad: "Valencia",
  },
  {
    nombreCentro: "Patitas Sanas",
    servicios: ["veterinario"],
    localidad: "Sevilla",
  },
  {
    nombreCentro: "Mimos Vet",
    servicios: ["hotel", "cuidador"],
    localidad: "Bilbao",
  },
  {
    nombreCentro: "Cuatro Patas",
    servicios: ["veterinario", "cuidador", "peluqueria canina"],
    localidad: "Zaragoza",
  },
  {
    nombreCentro: "Pelo Suelto",
    servicios: ["peluqueria canina", "hotel"],
    localidad: "Málaga",
  },
  {
    nombreCentro: "La Caseta",
    servicios: ["hotel"],
    localidad: "A Coruña",
  },
  {
    nombreCentro: "Vet&Love",
    servicios: ["veterinario", "cuidador"],
    localidad: "Granada",
  },
  {
    nombreCentro: "Patas Urbanas",
    servicios: ["cuidador", "peluqueria canina"],
    localidad: "Madrid",
  }
];

const links = [
  { 
    texto: "Veterinarios",
    href: "#", 
    servicio: "veterinario" 
  },
  { 
    texto: "Peluquería Canina", 
    href: "#", 
    servicio: "peluqueria canina" 
  },
  { 
    texto: "Hoteles para mascotas", 
    href: "#", 
    servicio: "hotel" 
  },
  { texto: "Cuidadores", 
    href: "#", 
    servicio: "cuidador" 
  }
];

let filtroActualLocalidad = "todas";
let filtroActualServicio = null;

//TARJETAS CLINICAS

function renderClinicas(localidadSeleccionada = "todas", servicioSeleccionado = null) {
  const clinicaList = document.getElementById("premises");
    clinicaList.style.display = "flex";
    clinicaList.style.flexDirection = "column";

  // Eliminar solo las tarjetas de clínicas
  const tarjetasClinicas = clinicaList.querySelectorAll(".card-clinica");
  tarjetasClinicas.forEach((tarjeta) => tarjeta.remove());

  let clinicasFiltradas = clinicas;

  // Filtro localidad
  if (localidadSeleccionada !== "todas") {
    clinicasFiltradas = clinicasFiltradas.filter(
      (clinica) => clinica.localidad === localidadSeleccionada
    ); console.log("Filtro  localidad aplicado");
    
  }
  //Fitro servicio
  if (servicioSeleccionado) {
    clinicasFiltradas = clinicasFiltradas.filter(
      (clinica) => clinica.servicios.includes(servicioSeleccionado)
    ); console.log("Filtro servicios aplicado")
  }

  clinicasFiltradas.forEach((clinica) => {
    const tarjetaClinica = document.createElement("div");
    tarjetaClinica.classList.add("card-clinica");

    const nombreClinica = document.createElement("h2");
    nombreClinica.textContent = clinica.nombreCentro;

    const serviciosClinica = document.createElement("p");
    serviciosClinica.textContent = `Servicios: ${clinica.servicios.join(", ")}`;

    const localidadClinica = document.createElement("p");
    localidadClinica.textContent = `Localidad: ${clinica.localidad}`;

    tarjetaClinica.append(nombreClinica, serviciosClinica, localidadClinica);
    clinicaList.appendChild(tarjetaClinica);
  });
}

function botonFiltro() {
  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("filter-button");

  const label = document.createElement("label");
  label.textContent = "Filtrar por localidad:";
  label.setAttribute("for", "filtroLocalidad");

  const select = document.createElement("select");
  select.setAttribute("id", "filtroLocalidad");

  const opcionTodas = document.createElement("option");
  opcionTodas.value = "todas";
  opcionTodas.textContent = "Todas las localidades";
  select.appendChild(opcionTodas);

  const localidadesUnicas = [...new Set(clinicas.map((clinica) => clinica.localidad))];
  localidadesUnicas.forEach((localidad) => {
    const opcion = document.createElement("option");
    opcion.value = localidad;
    opcion.textContent = localidad;
    select.appendChild(opcion);
  });

  select.addEventListener("change", (e) => {
    filtroActualLocalidad = e.target.value;
    renderClinicas(filtroActualLocalidad, filtroActualServicio);
  });

  contenedorFiltro.appendChild(label);
  contenedorFiltro.appendChild(select);

  const contenedorPrincipal = document.getElementById("premises");
  contenedorPrincipal.before(contenedorFiltro);
}

function crearLinks() {
  const contenedorLinks = document.createElement("div");
  contenedorLinks.classList.add("services-container");
  contenedorLinks.setAttribute("id", "menuLinks");

  links.forEach((linkInfo) => {
    const tarjetaProfesional = document.createElement("div");
    tarjetaProfesional.classList.add("card-service");

    const enlaceProfesional = document.createElement("a");
    enlaceProfesional.textContent = linkInfo.texto;
    enlaceProfesional.setAttribute("href", "#");
    enlaceProfesional.classList.add("enlace-profesional");
    enlaceProfesional.dataset.servicio = linkInfo.servicio;

    enlaceProfesional.addEventListener("click", (e) => {
      e.preventDefault();
      filtroActualServicio = e.target.dataset.servicio;
      renderClinicas(filtroActualLocalidad, filtroActualServicio);
    });

    tarjetaProfesional.appendChild(enlaceProfesional);
    contenedorLinks.appendChild(tarjetaProfesional);
  });

  const seccionServicios = document.getElementById("premises");
  if (seccionServicios) {
    seccionServicios.appendChild(contenedorLinks);
  } 
}

function crearBotonReset() {
  const contenedorBotonReset = document.createElement("div");
  contenedorBotonReset.classList.add("reset-button");

  const botonReset = document.createElement("button");
  botonReset.textContent = "Resetear Filtros";
  botonReset.classList.add("boton-reset");

  
  botonReset.addEventListener("click", () => {
    filtroActualLocalidad = "todas";
    filtroActualServicio = null;
    document.getElementById("filtroLocalidad").value = "todas"; 
    renderClinicas(filtroActualLocalidad, filtroActualServicio); 
  });

  contenedorBotonReset.appendChild(botonReset);

  const contenedorPrincipal = document.getElementById("premises");
  contenedorPrincipal.after(contenedorBotonReset);
}

crearBotonReset();

botonFiltro();      
crearLinks();      
renderClinicas();   