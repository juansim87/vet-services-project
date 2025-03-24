let clientes = [
  {
    mascota: "Atapuerco",
    especie: "cerdo",
<<<<<<< HEAD
    imagen: "url()",
    cliente: "Juan Simón",
    "próxima cita": "",
=======
    raza: "vietnamita",
    imagen: "/media/client-pets/atapuerco.webp",
    isShowing: false,
    cliente: "Juan Simón",
    email: "juan.simon@pet-it.com",
    proximaCita: "2025-03-06",
>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330
  },
  {
    mascota: "Piticli",
    especie: "loro",
<<<<<<< HEAD
    imagen: "url()",
    cliente: "Luis Fury",
    "próxima cita": "",
=======
    raza: "",
    imagen: "/media/client-pets/piticli.webp",
    isShowing: false,
    cliente: "Luis Fury",
    email: "fury.lopez@pet-it.com",
    proximaCita: "2025-03-06",
>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330
  },
  {
    mascota: "Freya",
    especie: "perro",
<<<<<<< HEAD
    imagen: "url()",
    cliente: "Luis Simón",
    "próxima cita": "",
=======
    raza: "",
    imagen: "/media/client-pets/freya.webp",
    isShowing: false,
    cliente: "Luis Simón",
    email: "luis.simon@pet-it.com",
    proximaCita: "2025-03-06",
>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330
  },
  {
    mascota: "Brunelleschi",
    especie: "gato",
<<<<<<< HEAD
    imagen: "url()",
    cliente: "Eugenio Drosdov",
    "próxima cita": "",
=======
    raza: "",
    imagen: "/media/client-pets/brunelleschi.webp",
    isShowing: false,
    cliente: "Eugenio Drosdov",
    email: "far.drosdov@pet-it.com",
    proximaCita: "2025-03-06",
>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330
  },
];

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

<<<<<<< HEAD
function renderClinicas(localidadSeleccionada = "todas", servicioSeleccionado = null) {
  const clinicaList = document.getElementById("premises");
    clinicaList.style.display = "flex";
    clinicaList.style.flexDirection = "column";

  // Eliminar solo las tarjetas de clínicas
  const tarjetasClinicas = clinicaList.querySelectorAll(".card-clinica");
  tarjetasClinicas.forEach((tarjeta) => tarjeta.remove());
=======
const title = document.createElement("h1");
title.textContent = "Pet It";
title.style.fontSize = "60px";

const titleImgBox = document.createElement("div");
titleImgBox.classList.add("title-img");

const titleImg = document.createElement("img");
titleImg.src = "/media/paws-icon.webp";
>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330

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

<<<<<<< HEAD
  const opcionTodas = document.createElement("option");
  opcionTodas.value = "todas";
  opcionTodas.textContent = "Todas las localidades";
  select.appendChild(opcionTodas);
=======
const clientForm = document.createElement("form");
clientFormBox.id = "create-client-form";
>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330

  const localidadesUnicas = [...new Set(clinicas.map((clinica) => clinica.localidad))];
  localidadesUnicas.forEach((localidad) => {
    const opcion = document.createElement("option");
    opcion.value = localidad;
    opcion.textContent = localidad;
    select.appendChild(opcion);
  });

<<<<<<< HEAD
  select.addEventListener("change", (e) => {
    filtroActualLocalidad = e.target.value;
    renderClinicas(filtroActualLocalidad, filtroActualServicio);
  });

  contenedorFiltro.appendChild(label);
  contenedorFiltro.appendChild(select);
=======
const clientNameLabel = document.createElement("label");
clientNameLabel.for = "client-name";
clientNameLabel.textContent = "Nombre y apellidos: ";

const clientNameInput = document.createElement("input");
clientNameInput.id = "client-name";
clientNameInput.type = "text";
clientNameInput.placeholder = "Ej: John Doe";
>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330

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

<<<<<<< HEAD
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
=======
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
clientEmailInput.placeholder = "Ej: juan.simon@mascotero.com";

clientEmail.append(clientEmailLabel, clientEmailInput);

//BOTÓN SUBMIT

const submitCreateNewClient = (event) => {
  event.preventDefault();

  const clientName = document.querySelector("#client-name");
  const petName = document.querySelector("#pet-name");
  const petSpecies = document.querySelector("#pet-species");
  const petBreed = document.querySelector("#pet-breed");
  const clientMail = document.querySelector("#client-email");

  const newClient = {
    id: new Date().getTime(),
    mascota: petName.value,
    especie: petSpecies.value,
    raza: petBreed.value,
    imagen: "/media/client-pets/pet-icon.png",
    isShowing: false,
    cliente: clientName.value,
    email: clientMail.value,
    proximaCita: "24-04-2025",
  };

  clientes.unshift(newClient);

  renderClients();
};

const deleteClient = (clientId) => {
  console.log("cliente", clientId);
  // clientes = clientes.filter(client => client.id !== clientId);
  renderClients();
}

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

const renderClients = () => {
  const container = document.getElementById("client-database");
  container.innerHTML = "";
  clientes.forEach((client) => {
    const clientCard = document.createElement("div");
    clientCard.classList.add("client-card");

    const petName = document.createElement("h2");
    petName.textContent = `${client.mascota}`;

    const petImg = document.createElement("img");
    petImg.setAttribute("src", client.imagen);
    petImg.classList.add("hidden");

    /**
     * Problemas con la lógica de este botón. Al final optamos por toggle para facilitarla.
     */

    const btnShowImg = document.createElement("button");
    btnShowImg.type = "button";
    btnShowImg.textContent = "Mostrar Imagen";

    btnShowImg.addEventListener("click", () => {
      client.isShowing = !client.isShowing;

      petImg.classList.toggle("hidden");

      if (!client.isShowing) {
        btnShowImg.textContent = "Mostrar Imagen";
      } else {
        btnShowImg.textContent = "Ocultar Imagen";
      }
    });

    const petSpecies = document.createElement("p");
    petSpecies.textContent = `Especie: ${client.especie}`;

    const petBreed = document.createElement("p");
    if (client.raza !== "") {
      petBreed.textContent = `Raza: ${client.raza}`;
    } else {
      petBreed.classList.add("hidden");
    }

    const nextDate = document.createElement("p");
    nextDate.textContent = `Próxima cita: ${client.proximaCita}`;

    const clientName = document.createElement("p");
    clientName.textContent = `Cliente: ${client.cliente}`;

    const clientEmail = document.createElement("p");
    clientEmail.textContent = `Email: ${client.email}`;

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar cliente";
    btnEdit.addEventListener("click", () => {
      client.isEditing = !client.isEditing;
      renderClients();
    });

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar ficha";
    btnDelete.addEventListener("click", deleteClient);

    clientCard.append(
      petName,
      btnShowImg,
      petImg,
      petSpecies,
      petBreed,
      clientName,
      clientEmail,
      nextDate,
      btnEdit,
      btnDelete
    );

    if (client.isEditing) {
      const form = document.createElement("form");

      const clientNameBox = document.createElement("div");

      const clientNameLabel = document.createElement("label");
      clientNameLabel.textContent = "Corregir nombre de cliente";

      const clientName = document.createElement("input");
      clientName.id = `edit-cliente-${client.id}`;
      clientName.value = client.cliente;
      
      clientNameBox.append(clientNameLabel, clientName);


      const speciesBox = document.createElement("div");

      const petSpeciesLabel = document.createElement("label");
      petSpeciesLabel.textContent = "Corregir especie:";

      const petSpecies = document.createElement("input");
      petSpecies.id = `edit-species-${client.id}`;
      petSpecies.value = client.especie;

      speciesBox.append(petSpeciesLabel, petSpecies);

      const breedBox = document.createElement("div");
      const petBreedLabel = document.createElement("label");
      petBreedLabel.textContent = "Corregir raza:";

      const petBreed = document.createElement("input");
      petBreed.id = `edit-breed-${client.id}`;
      petBreed.value = client.raza;

      breedBox.append(petBreedLabel, petBreed);

      const dateBox = document.createElement("div");

      const nextDateLabel = document.createElement("label");
      nextDateLabel.textContent = "Modificar próxima cita: ";
      
      const nextDate = document.createElement("input");
      nextDate.type = "date";
      nextDate.id = `edit-date-${client.id}`;
      nextDate.value = client.proximaCita;

      dateBox.append(nextDateLabel, nextDate)

      const btnSubmitEdit = document.createElement("button");
      btnSubmitEdit.type = "submit";
      btnSubmitEdit.textContent = "Editar";
      
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit form");

        editClient(client.id, {
          cliente: clientName.value,
          especie: petSpecies.value,
          proximaCita: nextDate.value,
        });
        event.target.reset();
      });

      form.append(clientNameBox, speciesBox, breedBox, dateBox, btnSubmitEdit);

      clientCard.appendChild(form);
    }

    container.append(clientCard);
>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330
  });

  const seccionServicios = document.getElementById("premises");
  if (seccionServicios) {
    seccionServicios.appendChild(contenedorLinks);
  } 
}

<<<<<<< HEAD
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
=======
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


>>>>>>> fe3e1c8dd7a3d8a10ed3be36ea1c4fd85a630330
