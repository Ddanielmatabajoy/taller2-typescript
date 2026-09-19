/**
 * TODO: EJERCICIO 1 - Calculadora Básica
 * Crea una función llamada calculadora que reciba dos números y un operador (+, -, *, /).
 * La función debe retornar el resultado de la operación
 * Debe imprimir un ejemplo con cada operador
 * Tener en cuenta la division por 0
 * Ejemplo: calculadora(10, 5, "+"); -> Resultado esperado: 15 
 */
function calculadora(a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Error: no se puede dividir entre 0";
      }
      return a / b;
    default:
      return "Operador no válido";
  }
}
 
console.log(calculadora(10, 5, "+")); 
console.log(calculadora(10, 5, "-")); 
console.log(calculadora(10, 5, "*")); 
console.log(calculadora(10, 5, "/")); 
console.log(calculadora(10, 0, "/"));
/**
 * TODO: EJERCICIO 2 - Tabla de Multiplicar
 * Crea una función llamada tablaMultiplicar.
 * Debe recibir 2 numeros:
 *  - El primero es el numero de la tabla de multiplicar
 *  - El segundo es la cantidad de operaciones a realizar
 * Debe imprimir la tabla de multiplicar solicitada
 * Ejemplo: 2 y 15 -> Tabla de Multiplicar del 2 al 15
 */
function tablaMultiplicar(numero, cantidad) {
  console.log(`Tabla del ${numero}`);
  for (let i = 1; i <= cantidad; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
 
tablaMultiplicar(2, 15);
/**
 * TODO: EJERCICIO 3 - Gestión de Producto
 * Tienes el siguiente arreglo.
 * Realiza las siguientes operaciones:
 *  - Agregar "Monitor"
 *  - Agregar "Audífonos" al inicio
 *  - Eliminar el último elemento
 *  - Mostrar el arreglo final
 */

const productos = ["Laptop", "Mouse", "Teclado"];
 
productos.push("Monitor");
productos.unshift("Audífonos");
productos.pop();
 
console.log("--- Arreglo final de productos ---");
console.log(productos);
/**
 * TODO: EJERCICIO 4 - Inventario de Estudiantes
 * Crea un objeto llamado estudiante. Debe contener:
 *  - nombre
 *  - edad
 *  - carrera
 *  - materias (array)
 * Posteriormente:
 *  - Cambia la edad.
 *  - Agrega una nueva materia.
 *  - Muestra todas las propiedades utilizando Object.entries() (Investigar).
 */
const estudiante = {
  nombre: "Laura",
  edad: 20,
  carrera: "Ingeniería",
  materias: ["Matemáticas", "Programación"],
};
 
estudiante.edad = 21;
estudiante.materias.push("Bases de Datos");
 
console.log("--- Propiedades del estudiante ---");
for (const [clave, valor] of Object.entries(estudiante)) {
  console.log(`${clave}:`, valor);
}

/**
 * TODO: EJERCICIO 5 - Filtrar Empleados
 * Dado el siguiente arreglo:
 * Obtén un nuevo arreglo que contenga únicamente los empleados 
 * cuyo salario sea mayor o igual a 4000.
 */
const empleados = [
  { nombre: "Ana", salario: 3000 },
  { nombre: "Luis", salario: 5000 },
  { nombre: "Pedro", salario: 2500 },
  { nombre: "Sara", salario: 7000 },
];
 
const empleadosBienPagados = empleados.filter((empleado) => empleado.salario >= 4000);
console.log("Empleados con salario >= 4000");
console.log(empleadosBienPagados);

/**
 * TODO: EJERCICIO 6 - Estadísticas de Ventas
 * Dado el siguiente arreglo:
 * Calcular:
 *  - Total vendido.
 *  - Venta más alta (Math.max investigar).
 *  - Promedio de ventas.
 */
const ventas = [250, 400, 150, 600, 800];
 
const totalVendido = ventas.reduce((acumulado, venta) => acumulado + venta, 0);
const ventaMasAlta = Math.max(...ventas);
const promedioVentas = totalVendido / ventas.length;
 
console.log("Estadísticas de ventas");
console.log("Total vendido:", totalVendido);
console.log("Venta más alta:", ventaMasAlta);
console.log("Promedio de ventas:", promedioVentas);

/**
 * TODO: EJERCICIO 7 - Catálogo de Libros
 * Dado el siguiente arreglo:
 * Realiza las siguientes operaciones:
 *  - Encontrar el libro con id 2.
 *  - Obtener solo los libros disponibles.
 *  - Crear un arreglo únicamente con los títulos.
 */

const libros = [
  { id: 1, titulo: "JavaScript", disponible: true },
  { id: 2, titulo: "Python", disponible: false },
  { id: 3, titulo: "Java", disponible: true },
];
 
const libroConId2 = libros.find((libro) => libro.id === 2);
const librosDisponibles = libros.filter((libro) => libro.disponible);
const titulosLibros = libros.map((libro) => libro.titulo);
 
console.log("Catálogo de libros");
console.log("Libro con id 2:", libroConId2);
console.log("Libros disponibles:", librosDisponibles);
console.log("Solo títulos:", titulosLibros);

/**
 * TODO: EJERCICIO 8 - Copias y Referencias
 * Dado el siguiente objeto:
 * Realiza lo siguiente:
 *  - Crea una copia del usuario utilizando asignación (=).
 *  - Modifica el nombre de la copia.
 *  - Observa el resultado de ambos.
 *  - Ahora crea una copia utilizando Spread.
 *  - Modifica nuevamente el nombre.
 *  - Observa el resultado de ambos.
 *  - Explica la diferencia entre ambos casos.
 */

const usuario = {
  nombre: "Carlos",
  edad: 30,
};
 
const copiaPorAsignacion = usuario;
copiaPorAsignacion.nombre = "Carlos Modificado";
 
console.log("Copia por asignación");
console.log("usuario:", usuario);
console.log("copiaPorAsignacion:", copiaPorAsignacion);
 
usuario.nombre = "Carlos";
 
const copiaConSpread = { ...usuario };
copiaConSpread.nombre = "Carlos romero";
 
console.log(" Copia con Spread ");
console.log("usuario:", usuario);
console.log("copiaConSpread:", copiaConSpread);

/**
 * TODO: EJERCICIO 9 - Desestructuración
 * Dado el siguiente objeto:
 * Realiza las siguientes tareas:
 *  - Extrae las propiedades marca y ram.
 *  - Renombra almacenamiento como ssd.
 *  - Asigna un valor por defecto a una propiedad llamada tarjetaGrafica.
 */

const computador = {
  marca: "Lenovo",
  procesador: "Intel i7",
  ram: 16,
  almacenamiento: 512,
};
 
const {
  marca,
  ram,
  almacenamiento: ssd,
  tarjetaGrafica = "Integrada",
} = computador;
 
console.log("Desestructuración del computador");
console.log("Marca:", marca);
console.log("RAM:", ram);
console.log("SSD (antes almacenamiento):", ssd);
console.log("Tarjeta gráfica (valor por defecto):", tarjetaGrafica);

/**
 * TODO: EJERCICIO 10 - Sistema de Gestión de Estudiantes
 * Dado el siguiente arreglo:
 * Desarrolla un programa que permita:
 *  - Mostrar únicamente los estudiantes aprobados (nota mayor o igual a 3.0).
 *  - Mostrar únicamente los mayores de edad.
 *  - Obtener un arreglo únicamente con los nombres.
 *  - Buscar al estudiante con id 3.
 *  - Calcular el promedio de todas las notas.
 *  - Encontrar el estudiante con la nota más alta.
 *  - Crear un nuevo arreglo agregando la propiedad estado, cuyo valor será "Aprobó" o "Reprobó" según la nota.
 *  - Realizar una copia del arreglo utilizando el operador Spread.
 */

const estudiantes2 = [
  { id: 1, nombre: "Ana", nota: 4.5, edad: 20 },
  { id: 2, nombre: "Luis", nota: 3.8, edad: 18 },
  { id: 3, nombre: "Carlos", nota: 4.9, edad: 22 },
  { id: 4, nombre: "Laura", nota: 2.9, edad: 19 },
];
 
const aprobados = estudiantes2.filter((est) => est.nota >= 3.0);
console.log("Estudiantes aprobados");
console.log(aprobados);
 

const mayoresDeEdad = estudiantes2.filter((est) => est.edad >= 18);
console.log(" Estudiantes mayores de edad ");
console.log(mayoresDeEdad);

const nombresEstudiantes = estudiantes2.map((est) => est.nombre);
console.log(" Solo nombres");
console.log(nombresEstudiantes);

const estudianteId3 = estudiantes2.find((est) => est.id === 3);
console.log(" Estudiante con id 3");
console.log(estudianteId3);
 

const promedioNotas =
  estudiantes2.reduce((acumulado, est) => acumulado + est.nota, 0) / estudiantes2.length;
console.log("--- Promedio de notas ---");
console.log(promedioNotas);
 
const estudianteNotaMasAlta = estudiantes2.reduce((mejor, actual) =>
  actual.nota > mejor.nota ? actual : mejor
);
console.log(" Estudiante con nota más alta ");
console.log(estudianteNotaMasAlta);
 
const estudiantesConEstado = estudiantes2.map((est) => ({
  ...est,
  estado: est.nota >= 3.0 ? "Aprobó" : "Reprobó",
}));
console.log("--- Estudiantes con estado ---");
console.log(estudiantesConEstado);
 

const copiaEstudiantes = [...estudiantes2];
console.log(" Copia del arreglo con Spread ");
console.log(copiaEstudiantes);
