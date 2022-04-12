/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
  if (!texto || /[^a-zA-Z_ ]/.test(texto)) {
    alert("Ingresá un texto valido por favor!");
    return false;
  }
  return true;
}

function normalizarTexto(texto) {
  const textoSinEspacio = texto.strim().toLowerCase();
  const textoNormalizado =
    textoSinEspacio.slice(0, 1).toUpperCase() + textoSinEspacio.slice(1);
  return textoNormalizado;
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {}

function normalizarEmail(email) {}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {}

function compararContrasenias(contrasenia_1, contrasenia_2) {}

// VALIDAR SIGN UP
function validarSignUp(nombre, apellido, email, password) {
  validarTexto(nombre);
  validarTexto(apellido);
}
