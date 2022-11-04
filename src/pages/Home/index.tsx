import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import embalagemCoffe from "../../assets/embalagem-cafe-com-fundo-colorido.png";

import { Card } from "./components/Card";
import { HomeContainer, LayoutContainer, MainInfoContainer, MenuGrid } from "./styles";

const coffeList = [
  {
    image: "./src/assets/products/latte.png",
    tag: ["Tradicional"],
    name: "Expresso",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 6.99,
  },
  {
    image: "./src/assets/products/americano.png",
    tag: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 6.99,
  },
  {
    image: "./src/assets/products/expresso-cremoso.png",
    tag: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.99,
  },
  {
    image: "./src/assets/products/expresso-gelado.png",
    tag: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 7.99,
  },
  {
    image: "./src/assets/products/cafe-com-leite.png",
    tag: ["Tradicional", "Com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 6.99,
  },
  {
    image: "./src/assets/products/latte.png",
    tag: ["Tradicional", "Com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 8.99,
  },
  {
    image: "./src/assets/products/capuccino.png",
    tag: ["Tradicional", "Com leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 8.99,
  },
  {
    image: "./src/assets/products/macchiato.png",
    tag: ["Tradicional", "Com leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 8.99,
  },
  {
    image: "./src/assets/products/mocaccino.png",
    tag: ["Tradicional", "Com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 10.99,
  },
  {
    image: "./src/assets/products/chocolate-quente.png",
    tag: ["Tradicional", "Com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 7.99,
  },
];

export function Home() {
  return (
    <HomeContainer>
      <LayoutContainer>
        <MainInfoContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div>
            <div>
              <span>
                <ShoppingCart />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <span>
                <Package />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </div>
          <div>
            <div>
              <span>
                <Timer />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <span>
                <Coffee />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </MainInfoContainer>
        <img
          src={embalagemCoffe}
          alt="Copo descartável para café com fundo amarelo"
        />
      </LayoutContainer>
      <MenuGrid>
        <h2>Nossos cafés</h2>
        <section>
          {coffeList.map((coffe) => {
            return (
              <Card
                key={String(Math.random())}
                image={coffe.image}
                tags={coffe.tag}
                name={coffe.name}
                description={coffe.description}
                price={coffe.price}
              />
            );
          })}
        </section>
      </MenuGrid>
    </HomeContainer>
  );
}
