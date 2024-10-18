const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.

const pizzasIdImpar = () => {  
  pizzas.forEach((pizza) => {
    if (pizza.id % 2 === 1){
      console.log (`${pizza.nombre} tiene id impar, ${pizza.id}`);

    }     
        
  });
};
pizzasIdImpar();

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

  const pizzaMenorValor = (precio) => {  
    const existe = pizzas.some((pizza) => {  
        return pizza.precio < precio; 
    });
    
    existe ? 
        console.log(`Existe una pizza que valga menos de $${precio}`) : 
        console.log(`No existe una pizza que valga menos de $${precio}`);
};

pizzaMenorValor(600); 

// c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach(pizza => {
  console.log(`Pizza: ${pizza.nombre}, Precio: $${pizza.precio}`);
});

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

pizzas.forEach(pizza => {
  console.log(`Pizza: ${pizza.nombre}`);
  pizza.ingredientes.forEach(ingrediente => {
      console.log(`Ingrediente: ${ingrediente}`);
  });
  console.log('');
});
