let clientes = [
  {
    id: 1,
    isEditing: false,
    mascota: "Atapuerco",
    especie: "cerdo",
    imagen: "/media/client-pets/atapuerco.webp",
    isShowing: false,
    cliente: "Juan Simón",
    proximaCita: "2025-03-06",
  },
  {
    id: 2,
    isEditing: false,
    mascota: "Piticli",
    especie: "loro",
    imagen: "/media/client-pets/piticli.webp",
    isShowing: false,
    cliente: "Luis Fury",
    proximaCita: "2025-03-06",
  },
  {
    id: 3,
    isEditing: false,
    mascota: "Freya",
    especie: "perro",
    imagen: "/media/client-pets/freya.webp",
    isShowing: false,
    cliente: "Luis Simón",
    proximaCita: "2025-03-06",
  },
  {
    id: 4,
    isEditing: false,
    mascota: "Brunelleschi",
    especie: "gato",
    imagen: "/media/client-pets/brunelleschi.webp",
    isShowing: false,
    cliente: "Eugenio Drosdov",
    proximaCita: "2025-03-06",
  },
];

//NAV

const navContent = document.querySelector(".nav-content");

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
titleImg.setAttribute("src", "/media/paws-icon.webp");

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
clientForm.classList.add("form");

//NOMBRE CLIENTE
const clientNameBox = document.createElement("div");
clientNameBox.classList.add("form-item");

const clientNameLabel = document.createElement("label");
clientNameLabel.setAttribute("for", "client-name");
clientNameLabel.textContent = "Nombre y apellidos: ";

const clientNameInput = document.createElement("input");
clientNameInput.setAttribute("id", "client-name");
clientNameInput.setAttribute("type", "text");
clientNameInput.setAttribute("placeholder", "Ej: John Doe");

clientNameBox.append(clientNameLabel, clientNameInput);

//NOMBRE MASCOTA

const petNameBox = document.createElement("div");
petNameBox.classList.add("form-item");

const petNameLabel = document.createElement("label");
petNameLabel.setAttribute("for", "pet-name");
petNameLabel.textContent = "Nombre de mascota: ";

const petNameInput = document.createElement("input");
petNameInput.setAttribute("id", "pet-name");
petNameInput.setAttribute("type", "text");
petNameInput.setAttribute("placeholder", "Ej: Micifús");

petNameBox.append(petNameLabel, petNameInput);

//ESPECIE MASCOTA

const petSpeciesBox = document.createElement("div");
petSpeciesBox.classList.add("form-item");

const petSpeciesLabel = document.createElement("label");
petSpeciesLabel.setAttribute("for", "pet-species");
petSpeciesLabel.textContent = "Especie: ";

const petSpeciesInput = document.createElement("input");
petSpeciesInput.setAttribute("id", "pet-species");
petSpeciesInput.setAttribute("type", "text");
petSpeciesInput.setAttribute("placeholder", "Ej: Gato");

petSpeciesBox.append(petSpeciesLabel, petSpeciesInput);

//RAZA DE MASCOTA

const petBreedBox = document.createElement("div");
petBreedBox.classList.add("form-item");

const petBreedLabel = document.createElement("label");
petBreedLabel.setAttribute("for", "pet-breed");
petBreedLabel.textContent = "Raza: ";

const petBreedInput = document.createElement("input");
petBreedInput.id = "pet-breed";
petBreedInput.setAttribute("type", "text");
petBreedInput.setAttribute("placeholder", "Ej: Callejero");

petBreedBox.append(petBreedLabel, petBreedInput);

//EMAIL

const clientEmail = document.createElement("div");
clientEmail.classList.add("form-item");

const clientEmailLabel = document.createElement("label");
clientEmailLabel.setAttribute("for", "client-email");
clientEmailLabel.textContent = "Email: ";

const clientEmailInput = document.createElement("input");
clientEmailInput.setAttribute("id", "client-email");
clientEmailInput.setAttribute("type", "email");
clientEmailInput.setAttribute("placeholder", "Ej: juan.simon@mascotero.com");

clientEmail.append(clientEmailLabel, clientEmailInput);

//BOTÓN SUBMIT

const btnSubmit = document.createElement("button");
btnSubmit.type = "submit";
btnSubmit.textContent = "Registrarse";
btnSubmit.classList.add("btn");

// btnSubmit.addEventListener(event => {
//   event.preventDefault();
// })

// btnSubmit.addEventListener("click", () => {

// })

clientForm.append(
  clientNameBox,
  petNameBox,
  petSpeciesBox,
  petBreedBox,
  clientEmail,
  btnSubmit
);
clientFormBox.append(formTitle, clientForm);
clientFormSection.appendChild(clientFormBox);

const renderClients = () => {
  const container = document.getElementById("element");
  container.innerHTML = "";
  clientes.forEach((client) => {
    const clientCard = document.createElement("div");
    clientCard.classList.add("client-card");

    const petName = document.createElement("h2");
    petName.textContent = `${client.mascota}`;

    const petImg = document.createElement("img");
    petImg.setAttribute("src", client.imagen);
    petImg.classList.add("hidden");
    
    const btnShowImg = document.createElement("button");
    btnShowImg.type = "button";
    btnShowImg.textContent = "Mostrar Imagen";

    btnShowImg.addEventListener("click", () => {
      client.isShowing = !client.isShowing;
      
      if (!client.isShowing) {
        petImg.classList.remove("hidden");
        btnShowImg.textContent = "Ocultar Imagen";
      } else { 
        petImg.classList.add("hidden");
        btnShowImg.textContent = "Mostrar Imagen";
      }
    });

    const petSpecies = document.createElement("p");
    petSpecies.textContent = `Especie: ${client.especie}`;

    const proximaCita = document.createElement("p");
    proximaCita.textContent = `Próxima cita: ${client.proximaCita}`;

    const clientName = document.createElement("p");

    clientName.textContent = `Cliente: ${client.cliente}`;

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar cliente";
    btnEdit.addEventListener("click", () => {
      client.isEditing = !client.isEditing;
      renderClients();
    });

    // {
    //   id: 1,
    //   isEditing: false,
    //   mascota: "Atapuerco",
    //   especie: "cerdo",
    //   imagen: "/media/client-pets/atapuerco.jpg",
    //   cliente: "Juan Simón",
    //   proximaCita: "",
    // },

    clientCard.append(
      petName,
      btnShowImg,
      petImg,
      petSpecies,
      clientName,
      proximaCita,
      btnEdit
    );

    if (client.isEditing) {
      const form = document.createElement("form");
      const input = document.createElement("input");
      input.id = `edit-cliente-${client.id}`;
      input.value = client.cliente;

      const species = document.createElement("input");
      species.id = `edit-species-${client.id}`;
      species.value = client.especie;

      const nextDate = document.createElement("input");
      nextDate.type = "date";
      nextDate.id = `edit-date-${client.id}`;
      nextDate.value = client.proximaCita;

      const btnSubmit = document.createElement("button");
      btnSubmit.type = "submit";
      btnSubmit.textContent = "Editar";
      form.appendChild(btnSubmit);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit form");

        editClient(client.id, {
          cliente: input.value,
          especie: species.value,
          proximaCita: nextDate.value,
        });
        event.target.reset();
      });

      form.append(input, species, nextDate);

      clientCard.appendChild(form);
    }

    container.append(clientCard);
  });
};

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
