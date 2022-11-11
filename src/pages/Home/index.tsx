import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { v4 } from "uuid";

import embalagemCoffee from "../../assets/embalagem-cafe-com-fundo-colorido.png";
import { coffeeList } from "../../data/coffees";
import { Card } from "./components/Card";
import { HomeContainer, LayoutContainer, MainInfoContainer, MenuGrid } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <LayoutContainer>
        <div className="wrapper">
          <MainInfoContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <div>
              <div>
                <span>
                  <ShoppingCart weight="fill" />
                </span>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <span>
                  <Package weight="fill" />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <Timer weight="fill" />
                </span>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <span>
                  <Coffee weight="fill" />
                </span>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </MainInfoContainer>
          <img
            src={embalagemCoffee}
            alt="Copo descartável para café com fundo amarelo"
          />
        </div>
      </LayoutContainer>
      <MenuGrid>
        <div className="wrapper">
          <h2>Nossos cafés</h2>
          <section>
            {coffeeList.map((coffee) => {
              return <Card coffee={coffee} />;
            })}
          </section>
        </div>
      </MenuGrid>
    </HomeContainer>
  );
}
