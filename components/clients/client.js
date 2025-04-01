const submitCreateNewClient = (event) => {
  event.preventDefault();

  const clientName = document.querySelector("#client-name");
  const petName = document.querySelector("#pet-name");
  const petSpecies = document.querySelector("#pet-species");
  const petBreed = document.querySelector("#pet-breed");
  const clientMail = document.querySelector("#client-email");
  const review = document.querySelector("#review");
  const petImage = document.querySelector("#pet-image");
  // const image = document.querySelector("")

  const newClient = {
    id: new Date().getTime(),
    mascota: petName.value,
    especie: petSpecies.value,
    raza: petBreed.value,
    imagen: petImage.value || "/media/client-pets/pet-icon.png",
    isShowing: false,
    cliente: clientName.value,
    email: clientMail.value,
    comentario: review.value,
    // proximaCita: "24-04-2025",
  };

  clientes.unshift(newClient);

  // saveDataInStorage("client-database", appData);

  console.log(appData);

  renderClients();
};

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

    const clientReview = document.createElement("p");
    clientReview.textContent = `Comentario: ${client.comentario}`;

    const btnShowImg = document.createElement("button");
    btnShowImg.classList.add("btn");
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

    const clientName = document.createElement("p");
    clientName.textContent = `Cliente: ${client.cliente}`;

    const clientEmail = document.createElement("p");
    clientEmail.textContent = `Email: ${client.email}`;

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("btn");
    btnEdit.textContent = "Editar cliente";
    btnEdit.addEventListener("click", () => {
      client.isEditing = !client.isEditing;
      renderClients();
    });

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar ficha";
    btnDelete.classList.add("btn");

    btnDelete.addEventListener("click", () => {
      clientes = clientes.filter((c) => c.id !== client.id);

      renderClients();
    });

    clientCard.append(
      petName,
      btnShowImg,
      petImg,
      petSpecies,
      petBreed,
      clientName,
      clientEmail,
      clientReview,
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

      const reviewBox = document.createElement("div");
      const reviewLabel = document.createElement("label");
      reviewLabel.textContent = "Modificar reseña:";

      const review = document.createElement("textarea");
      review.id = `edit-review-${client.id}`;
      review.value = client.comentario;

      reviewBox.append(reviewLabel, review);

      const petImageBox = document.createElement("div");
      const petImageLabel = document.createElement("label");
      petImageLabel.textContent = "Modificar imagen";

      const petImage = document.createElement("textarea");
      petImage.id = `edit-pet-image-${client.id}`;
      petImage.value = client.imagen;

      petImageBox.append(petImageLabel, petImage);

      const btnSubmitEdit = document.createElement("button");
      btnSubmitEdit.classList.add("btn");
      btnSubmitEdit.type = "submit";
      btnSubmitEdit.textContent = "Confirmar cambios";

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        editClient(client.id, {
          cliente: clientName.value,
          especie: petSpecies.value,
          raza: petBreed.value,
          imagen: petImage.value,
          comentario: review.value,
        });
        event.target.reset();
      });

      form.append(
        clientNameBox,
        speciesBox,
        breedBox,
        petImageBox,
        reviewBox,
        btnSubmitEdit
      );

      clientCard.appendChild(form);
    }

    container.append(clientCard);
  });
};
