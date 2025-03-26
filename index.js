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



crearBotonReset();
botonFiltro();
crearLinks();
renderClinicas();
