window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const email = document.querySelector("#inputEmail");
  const contraseña = document.querySelector("#inputPassword");
  const form = document.forms[0];
  const url = "https://ctd-todo-api.herokuapp.com/v1";

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const payload = {
      email: email.value,
      password: contraseña.value,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };

    realizarLogin(settings);
    form.reset();
  });

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 2: Realizar el login [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarLogin(settings) {
    console.log("Lanzando la consulta a la API");
    fetch(`${url}/users/login`, settings)
      .then((response) => {
        console.log(response);

        if (response.ok != true) {
          alert("Algunos de los datos es incorrecto.");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Promesa cumplida: ");
        console.log(data);

        if (data.jwt) {
          //guardo en LocalStorage el objeto con el token
          localStorage.setItem("jwt", JSON.stringify(data.jwt));

          //redireccionamos a la página
          location.replace("/mis-tareas.html");
        }
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log(err);
      });
  }
});
