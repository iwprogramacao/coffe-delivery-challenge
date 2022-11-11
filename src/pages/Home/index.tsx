import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import embalagemCoffee from "../../assets/embalagem-cafe-com-fundo-colorido.png";
import { StyledIcon } from "../../components/StyledIcon";
import { coffeeList } from "../../data/coffees";
import { Card } from "./components/Card";
import { HomeContainer, LayoutContainer, MainInfoContainer, MenuGrid } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <LayoutContainer>
        <div className="wrapper">
          <MainInfoContainer>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
              <div>
                <StyledIcon
                  text="Compra simples e segura"
                  variant="dark-yellow"
                >
                  <ShoppingCart weight="fill" />
                </StyledIcon>
                <StyledIcon
                  text="Embalagem mantém o café intacto"
                  variant="gray"
                >
                  <Package weight="fill" />
                </StyledIcon>
                <StyledIcon
                  text="Entrega rápida e rastreada"
                  variant="light-yellow"
                >
                  <Timer weight="fill" />
                </StyledIcon>
                <StyledIcon
                  text="O café chega fresquinho até você"
                  variant="purple"
                >
                  <Coffee weight="fill" />
                </StyledIcon>
              </div>
            </div>
            <img
              src={embalagemCoffee}
              alt="Copo descartável para café com fundo amarelo"
            />
          </MainInfoContainer>
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
