import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";

import logotype from "../../assets/coffe-delivery-logo.svg";
import embalagemCoffe from "../../assets/embalagem-cafe-com-fundo-colorido.png";
import { Card } from "./components/Card";
import {
  HomeContainer,
  LayoutContainer,
  MainInfoContainer,
  MenuGrid,
  NavItemsContainer,
} from "./styles";

const coffeList = [
  {
    image: "../../../assets/products/expresso.png",
    tag: ["Tradicional"],
    name: "Expresso",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "6,90",
  },
  {
    image: "../../assets/products/expresso-americano.png",
    tag: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "6,90",
  },
  {
    image: "../../assets/products/expresso-cremoso.png",
    tag: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    image: "../../assets/products/expresso-gelado.png",
    tag: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "7,90",
  },
  {
    image: "../../assets/products/cafe-com-leite.png",
    tag: ["Tradicional", "Com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "6,90",
  },
  {
    image: "../../assets/products/latte.png",
    tag: ["Tradicional", "Com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "8,90",
  },
  {
    image: "../../assets/products/capuccino.png",
    tag: ["Tradicional", "Com leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "8,90",
  },
  {
    image: "../../assets/products/macchiato.png",
    tag: ["Tradicional", "Com leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: "8,90",
  },
  {
    image: "../../assets/products/mocaccino.png",
    tag: ["Tradicional", "Com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "10,50",
  },
  {
    image: "../../assets/products/chocolate-quente.png",
    tag: ["Tradicional", "Com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "7,90",
  },
];

export function Home() {
  return (
    <HomeContainer>
      <nav>
        <img
          src={logotype}
          alt=""
        />
        <NavItemsContainer>
          <div>
            {<MapPin size={24} />}
            <span>Cascavel, PR</span>
          </div>
          <button>{<ShoppingCart size={24} />}</button>
        </NavItemsContainer>
      </nav>
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
