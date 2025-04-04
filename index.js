let appData = {};

// const CLIENT_DATABASE_TEMPLATE = {
//   clientes: [],
// };

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
  //SECCIÓN DE FORM

  const clientFormSection = document.getElementById("info-form");

  //CAJA DE FORM

  const clientFormBox = document.createElement("div");
  clientFormBox.classList.add("form-box");

  //TÍTULO FORM

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Únete al club mascotero";

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

  //IMAGEN

  const petImageBox = document.createElement("div");
  petImageBox.classList.add("form-item");

  const petImageLabel = document.createElement("label");
  petImageLabel.for = "pet-image";
  petImageLabel.textContent = "Selecciona una imagen";

  const petImageInput = document.createElement("input");
  petImageInput.id = "pet-image";
  // petImageInput.type = "file";
  petImageInput.type = "text";

  petImageBox.append(petImageLabel, petImageInput);


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

  //COMENTARIO
  const reviewBox = document.createElement("div");
  reviewBox.classList.add("review-text-area");

  const reviewLabel = document.createElement("label");
  reviewLabel.for = "review";
  reviewLabel.textContent = "Comentario: ";

  const reviewInput = document.createElement("textarea");
  reviewInput.id = "review";

  reviewBox.append(reviewLabel, reviewInput);

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
    petImageBox,
    clientEmail,
    reviewBox,
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
    client.raza = fields.raza;
    client.imagen = fields.imagen;
    client.comentario = fields.comentario;
  }

  renderClients();
};

crearBotonReset();
botonFiltro();
crearLinks();
renderClinicas();
