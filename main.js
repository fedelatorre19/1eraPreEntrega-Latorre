let edad;

do {
  edad = Number(prompt("Ingrese su edad"));

  if (edad < 0) {
    alert("Por favor, ingrese una edad válida (número no negativo).");
  }
} while (edad < 0);

if (edad >= 18) {
  alert("Usted es mayor de edad");
} else {
  alert("Usted es menor de edad");
}