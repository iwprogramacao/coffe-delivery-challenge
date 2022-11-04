import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import motoboyDelivery from "../../assets/motoboy-delivery.png";
import {
  DataDeliveryContainer,
  DeliveryContainer,
  InfoDeliveryContainer,
  TitleContent,
} from "./styles";

export function Delivery() {
  return (
    <DeliveryContainer>
      <div>
        <TitleContent>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContent>
        <DataDeliveryContainer>
          <InfoDeliveryContainer>
            {<MapPin size={24} />}
            <div>
              <p>
                Entrega em <strong>Rua da bandeira, 836</strong>
              </p>
              <p>Centro - Cascavel, PR</p>
            </div>
          </InfoDeliveryContainer>
          <InfoDeliveryContainer>
            {<Timer size={24} />}
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoDeliveryContainer>
          <InfoDeliveryContainer>
            {<CurrencyDollar size={24} />}
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </InfoDeliveryContainer>
        </DataDeliveryContainer>
      </div>

      <img
        src={motoboyDelivery}
        alt=""
      />
    </DeliveryContainer>
  );
}
