import { v4 } from "uuid";

export const coffeeList = [
  {
    id: v4(),
    image: "products/latte.png",
    tags: ["Tradicional"],
    name: "Expresso",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 6.99,
  },
  {
    id: v4(),
    image: "products/americano.png",
    tags: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 6.99,
  },
  {
    id: v4(),
    image: "products/expresso-cremoso.png",
    tags: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.99,
  },
  {
    id: v4(),
    image: "products/expresso-gelado.png",
    tags: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 7.99,
  },
  {
    id: v4(),
    image: "products/cafe-com-leite.png",
    tags: ["Tradicional", "Com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 6.99,
  },
  {
    id: v4(),
    image: "products/latte.png",
    tags: ["Tradicional", "Com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 8.99,
  },
  {
    id: v4(),
    image: "products/capuccino.png",
    tags: ["Tradicional", "Com leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 8.99,
  },
  {
    id: v4(),
    image: "products/macchiato.png",
    tags: ["Tradicional", "Com leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 8.99,
  },
  {
    id: v4(),
    image: "products/mocaccino.png",
    tags: ["Tradicional", "Com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 10.99,
  },
  {
    id: v4(),
    image: "products/chocolate-quente.png",
    tags: ["Tradicional", "Com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 7.99,
  },
];
