let appData = clientes;

const CLIENT_DATABASE_TEMPLATE = {
  clientes: [],
};

document.addEventListener("DOMContentLoaded", () => {
  const clientDatabase = getDataFromStorage("client-database");

  if (!clientDatabase) {
    saveDataInStorage("client-database", CLIENT_DATABASE_TEMPLATE);
  }
  appData = getDataFromStorage("client-database");

  console.log("Valor inicial de App Data", appData);
});

const createElements = () => {
   //SECCIÓN HERO
  const hero = document.getElementById("hero");
  hero.style.setProperty("background-image", "url(/media/mascotas.webp)");
  hero.style.setProperty("background-repeat", "no-repeat");
  hero.style.setProperty("background-size", "cover");

  const titleBox = document.createElement("div");
  titleBox.classList.add("title-box");

  const title = document.createElement("h1");
  title.textContent = "Pet It";
  title.style.fontSize = "60px";

  const titleImgBox = document.createElement("div");
  titleImgBox.classList.add("title-img");

  const titleImg = document.createElement("img");
  titleImg.src = "/media/paws-icon.webp";

  titleImgBox.append(titleImg);

  titleBox.append(title, titleImgBox);

  hero.append(titleBox);

  //SECCIÓN DE FORM

  const clientFormSection = document.getElementById("info-form");

  //CAJA DE FORM

  const clientFormBox = document.createElement("div");
  clientFormBox.classList.add("form-box");

  //TÍTULO FORM

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Queremos conocerte";

  //FORM

  const clientForm = document.createElement("form");
  clientFormBox.id = "create-client-form";

  //NOMBRE CLIENTE
  const clientNameBox = document.createElement("div");
  clientNameBox.classList.add("form-item");

  const clientNameLabel = document.createElement("label");
  clientNameLabel.for = "client-name";
  clientNameLabel.textContent = "Nombre y apellidos: ";

  const clientNameInput = document.createElement("input");
  clientNameInput.id = "client-name";
  clientNameInput.type = "text";
  clientNameInput.placeholder = "Ej: John Doe";

  clientNameBox.append(clientNameLabel, clientNameInput);

  //NOMBRE MASCOTA

  const petNameBox = document.createElement("div");
  petNameBox.classList.add("form-item");

  const petNameLabel = document.createElement("label");
  petNameLabel.for = "pet-name";
  petNameLabel.textContent = "Nombre de mascota: ";

  const petNameInput = document.createElement("input");
  petNameInput.id = "pet-name";
  petNameInput.type = "text";
  petNameInput.placeholder = "Ej: Micifús";

  petNameBox.append(petNameLabel, petNameInput);

  //ESPECIE MASCOTA

  const petSpeciesBox = document.createElement("div");
  petSpeciesBox.classList.add("form-item");

  const petSpeciesLabel = document.createElement("label");
  petSpeciesLabel.for = "pet-species";
  petSpeciesLabel.textContent = "Especie: ";

  const petSpeciesInput = document.createElement("input");
  petSpeciesInput.id = "pet-species";
  petSpeciesInput.type = "text";
  petSpeciesInput.placeholder = "Ej: Gato";

  petSpeciesBox.append(petSpeciesLabel, petSpeciesInput);

  //RAZA DE MASCOTA

  const petBreedBox = document.createElement("div");
  petBreedBox.classList.add("form-item");

  const petBreedLabel = document.createElement("label");
  petBreedLabel.for = "pet-breed";
  petBreedLabel.textContent = "Raza: ";

  const petBreedInput = document.createElement("input");
  petBreedInput.id = "pet-breed";
  petBreedInput.type = "text";
  petBreedInput.placeholder = "Ej: Callejero";

  petBreedBox.append(petBreedLabel, petBreedInput);

  //EMAIL

  const clientEmail = document.createElement("div");
  clientEmail.classList.add("form-item");

  const clientEmailLabel = document.createElement("label");
  clientEmailLabel.for = "client-email";
  clientEmailLabel.textContent = "Email: ";

  const clientEmailInput = document.createElement("input");
  clientEmailInput.id = "client-email";
  clientEmailInput.type = "email";
  clientEmailInput.placeholder = "Ej: juan.simon@pet-it.com";

  clientEmail.append(clientEmailLabel, clientEmailInput);

  //BOTÓN SUBMIT

  const btnSubmitRegister = document.createElement("button");
  btnSubmitRegister.type = "submit";
  btnSubmitRegister.textContent = "Registrarse";
  btnSubmitRegister.classList.add("btn");

  btnSubmitRegister.addEventListener("click", submitCreateNewClient);

  clientForm.append(
    clientNameBox,
    petNameBox,
    petSpeciesBox,
    petBreedBox,
    clientEmail,
    btnSubmitRegister
  );

  clientFormBox.append(formTitle, clientForm);

  clientFormSection.appendChild(clientFormBox);

  console.log(clientFormBox);
};

createElements();

renderClients();

const editClient = (id, fields) => {
  const client = clientes.find((cliente) => cliente.id === id);
  if (client) {
    client.cliente = fields.cliente;
    client.isEditing = false;
    client.especie = fields.especie;
    client.proximaCita = fields.proximaCita;
  }
  renderClients();
};



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
  const clinicaList = document.getElementById("services");
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

  const contenedorPrincipal = document.getElementById("services");
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

  const seccionServicios = document.getElementById("services");
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

  const contenedorPrincipal = document.getElementById("services");
  contenedorPrincipal.after(contenedorBotonReset);
}

crearBotonReset();
botonFiltro();
crearLinks();
renderClinicas();
