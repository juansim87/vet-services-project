function crearFormularioMascota() {
    const form = document.createElement("form");
    form.setAttribute("id", "formularioMascota");

    const campos = [
        { label: "Nombre de la mascota", tipo: "text", name: "nombre" },
        { label: "Raza", tipo: "text", name: "raza" },
        { label: "Edad", tipo: "number", name: "edad" },
        { label: "Vacunas", tipo: "text", name: "vacunas" },
    ];

    campos.forEach(campo => {
        const label = document.createElement("label");
        label.textContent = campo.label;
        label.setAttribute("for", campo.name);

        const input = document.createElement("input");
        input.setAttribute("type", campo.tipo);
        input.setAttribute("name", campo.name);
        input.setAttribute("id", campo.name);
        input.setAttribute("placeholder", campo.label);
        input.required = true;

        form.appendChild(label);
        form.appendChild(document.createElement("br"));
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    });

    // Textarea
    const labelTextarea = document.createElement("label");
    labelTextarea.textContent = "Observaciones";
    labelTextarea.setAttribute("for", "observaciones");

    const textarea = document.createElement("textarea");
    textarea.setAttribute("name", "observaciones");
    textarea.setAttribute("id", "observaciones");
    textarea.setAttribute("placeholder", "Escribe aquí cualquier observación...");
    textarea.rows = 4;
    textarea.cols = 30;

    form.appendChild(labelTextarea);
    form.appendChild(document.createElement("br"));
    form.appendChild(textarea);
    form.appendChild(document.createElement("br"));

    // Botón de envío
    const boton = document.createElement("button");
    boton.setAttribute("type", "submit");
    boton.textContent = "Enviar";

    form.appendChild(document.createElement("br"));
    form.appendChild(boton);

    // Insertar el formulario 
    document.body.appendChild(form);

    form.addEventListener("submit", function (e) {
        const datos = {
            nombre: form.nombre.value,
            raza: form.raza.value,
            edad: form.edad.value,
            vacunas: form.vacunas.value,
            observaciones: form.observaciones.value
        };

        console.log("Datos del formulario:", datos);
        alert("Formulario enviado correctamente");
    });
}

crearFormularioMascota();


