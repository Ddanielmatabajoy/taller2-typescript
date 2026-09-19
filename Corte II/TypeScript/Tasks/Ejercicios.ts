/**
 * TODO: TALLER DE TYPESCRIPT
 */


/**
 * TODO: EJERCICIO 1 - Tipos Básicos
 *
 * Declara las siguientes variables utilizando
 * el tipo de dato correcto:
 *
 * - nombre
 * - edad
 * - salario
 * - estaActivo
 * - ciudad
 *
 * Posteriormente:
 * - Imprime todas las variables y luego su tipo de dato con typeof.
 * - Ej: console.log(variable, typeof variable)
 */
const nombre: string = "Daniel Esteban Matabajoy Romero";
const edad: number = 23;
const salario: number = 500.000;
const estaActivo: boolean = true;
const ciudad: string = "Tuluá";
 
console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(salario, typeof salario);
console.log(estaActivo, typeof estaActivo);
console.log(ciudad, typeof ciudad);

/**
 * TODO: EJERCICIO 2 - Arrays Tipados
 *
 * Crea los siguientes arreglos:
 *
 * - Un arreglo de números.
 * - Un arreglo de strings.
 * - Un arreglo de booleanos.
 *
 * Después:
 *
 * - Agrega un nuevo elemento (uso del push).
 * - Elimina el último elemento (uso del pop).
 * - Recorre cada arreglo utilizando for...of.
 */
const numeros: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["rojo", "verde", "azul"];
const booleanos: boolean[] = [true, false, true];
 
numeros.push(6);
strings.push("amarillo");
booleanos.push(false);
 
numeros.pop();
strings.pop();
booleanos.pop();
 
console.log("Array de número");
for (const num of numeros) {
  console.log(num);
}
 
console.log("Array de string");
for (const str of strings) {
  console.log(str);
}
 
console.log("Array de booleanos");
for (const bool of booleanos) {
  console.log(bool);
}

/**
 * TODO: EJERCICIO 3 - Crear un Type
 *
 * Crea un type llamado Producto que contenga:
 *
 * - id
 * - nombre
 * - precio
 * - disponible
 *
 * Después:
 *
 * - Crea dos productos.
 * - Imprime ambos productos.
 */
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
};
 
const producto1: Producto = {
  id: 1,
  nombre: "Laptop",
  precio: 3200000,
  disponible: true,
};
 
const producto2: Producto = {
  id: 2,
  nombre: "Mouse",
  precio: 45000,
  disponible: false,
};
 
console.log(producto1);
console.log(producto2);

/**
 * TODO: EJERCICIO 4 - Interfaces
 *
 * Crea una interface llamada Empleado.
 *
 * Debe contener:
 *
 * - nombre
 * - cargo
 * - salario
 *
 * Después:
 *
 * - Crea dos empleados.
 * - Muéstralos por consola.
 */
interface Empleado {
  nombre: string;
  cargo: string;
  salario: number;
}
 
const empleado1: Empleado = {
  nombre: "Andres navarro",
  cargo: "Desarrolladora",
  salario: 4000000,
};
 
const empleado2: Empleado = {
  nombre: "Daniel Matabajoy",
  cargo: "Diseñador",
  salario: 3200000,
};
 
console.log(empleado1);
console.log(empleado2);

/**
 * TODO: EJERCICIO 5 - Union Types
 *
 * Crea una función llamada mostrarDato.
 *
 * Debe recibir un parámetro que pueda ser:
 *
 * - string
 * - number
 *
 * Si recibe un string deberá mostrarlo en mayúsculas (uso del toUpperCase).
 * Si recibe un número deberá mostrarlo con dos decimales (uso del toFixed).
 */

function mostrarDato(dato: string | number): void {
  if (typeof dato === "string") {
    console.log(dato.toUpperCase());
  } else {
    console.log(dato.toFixed(2));
  }
}
 
mostrarDato("hola mundo");
mostrarDato(3.14);
/**
 * TODO: EJERCICIO 6 - Enums
 *
 * Crea un enum llamado EstadoPedido.
 *
 * Debe contener:
 *
 * - Pendiente
 * - EnProceso
 * - Enviado
 * - Entregado
 *
 * Después:
 *
 * - Crea una variable utilizando el enum.
 * - Imprime su valor.
 */
enum EstadoPedido {
  Pendiente,
  EnProceso,
  Enviado,
  Entregado,
}
 
const estadoActual: EstadoPedido = EstadoPedido.EnProceso;
console.log(estadoActual, EstadoPedido[estadoActual]);
/**
 * ==========================================================
 */


/**
 * TODO: EJERCICIO 7 - Clases
 *
 * Crea una clase llamada Vehiculo.
 *
 * Debe contener:
 *
 * - marca
 * - modelo
 *
 * Agrega un método llamado mostrarInformacion()
 * que imprima ambas propiedades.
 *
 * Crea dos objetos utilizando la clase.
 */
class Vehiculo {
  marca: string;
  modelo: string;
 
  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }
 
  mostrarInformacion(): void {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
}
 
const vehiculo1 = new Vehiculo("Toyota", "Corolla");
const vehiculo2 = new Vehiculo("Mazda", "CX-5");
 
vehiculo1.mostrarInformacion();
vehiculo2.mostrarInformacion();

/**
 * TODO: EJERCICIO 8 - Herencia
 *
 * Crea una clase Persona.
 *
 * Debe contener:
 *
 * - nombre
 * - edad
 *
 * Luego crea una clase Estudiante
 * que herede de Persona.
 *
 * Agrega la propiedad carrera.
 *
 * Finalmente crea un estudiante
 * e imprime toda su información.
 */
class Persona {
  nombre: string;
  edad: number;
 
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
 
class Estudiante extends Persona {
  carrera: string;
 
  constructor(nombre: string, edad: number, carrera: string) {
    super(nombre, edad);
    this.carrera = carrera;
  }
}
 
const estudiante1 = new Estudiante("Daniel Matabajoy", 23, "Ingeniería de Sistemas");
console.log(
  `Nombre: ${estudiante1.nombre}, Edad: ${estudiante1.edad}, Carrera: ${estudiante1.carrera}`
);

/**
 * TODO: EJERCICIO 9 - Generics
 *
 * Crea una función genérica llamada
 * obtenerPrimero().
 *
 * Debe recibir un arreglo de cualquier tipo
 * y retornar el primer elemento.
 *
 * Prueba la función con:
 *
 * - Un arreglo de números.
 * - Un arreglo de strings.
 * - Un arreglo de booleanos.
 */
function obtenerPrimero<T>(arreglo: T[]): T {
  return arreglo[0];
}
 
const primerNumero = obtenerPrimero<number>([10, 20, 30]);
const primerString = obtenerPrimero<string>(["uno", "dos", "tres"]);
const primerBooleano = obtenerPrimero<boolean>([false, true]);
 
console.log(primerNumero);
console.log(primerString);
console.log(primerBooleano);
/**
 * TODO: EJERCICIO 10 - Sistema de Usuarios
 *
 * Desarrolla un pequeño sistema utilizando
 * todo lo aprendido durante el curso.
 *
 * Requisitos:
 *
 * 1. Crear un type llamado Usuario.
 *
 * Debe contener:
 *
 * - id
 * - nombre
 * - edad
 * - activo
 *
 * 2. Crear un arreglo tipado de usuarios.
 *
 * 3. Crear una función para agregar usuarios (uso del push).
 *
 * 4. Crear una función para buscar un usuario por su id (uso del find).
 *
 * 5. Crear una función para mostrar únicamente los usuarios activos (uso del filter).
 *
 * 6. Mostrar el arreglo final.
 */
type Usuario = {
  id: number;
  nombre: string;
  edad: number;
  activo: boolean;
};
 
const usuarios: Usuario[] = [];
 
function agregarUsuario(usuario: Usuario): void {
  usuarios.push(usuario);
}
 
function buscarUsuarioPorId(id: number): Usuario | undefined {
  return usuarios.find((usuario) => usuario.id === id);
}
 
function mostrarUsuariosActivos(): Usuario[] {
  return usuarios.filter((usuario) => usuario.activo);
}
 
agregarUsuario({ id: 1, nombre: "daniel matabajoy", edad: 30, activo: true });
agregarUsuario({ id: 2, nombre: "felipe ortega", edad: 25, activo: false });
agregarUsuario({ id: 3, nombre: "Juan jose osorio", edad: 40, activo: true });
 
console.log("-Usuario encontrado (id 2");
console.log(buscarUsuarioPorId(2));
 
console.log("Usuarios activos");
console.log(mostrarUsuariosActivos());
 
console.log("Arreglo final de usuarios");
console.log(usuarios);


export {};