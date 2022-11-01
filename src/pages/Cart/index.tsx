import { Bank, Cards, CreditCard, CurrencyDollar, MapPin, MapPinLine, Money } from "phosphor-react";
import { CartItem } from "../../components/CartItem";
import {
  CartPageContainer,
  CartWrapper,
  DeliveryContainer,
  FormContainer,
  PaymentButton,
  PaymentContainer,
  PaymentMethodContainer,
  PricesContainer,
} from "./styles";

export function Cart() {
  return (
    <CartPageContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <DeliveryContainer>
          <div>
            {<MapPinLine size={24} />}
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <FormContainer action="">
            <input
              name="cep"
              className="cep"
              type="text"
              placeholder="CEP"
            />

            <input
              name="rua"
              className="rua"
              type="text"
              placeholder="Rua"
            />

            <input
              name="numero"
              className="numero"
              type="text"
              placeholder="Número"
            />
            <input
              name="complemento"
              className="complemento"
              type="text"
              placeholder="Complemento"
            />
            <input
              name="bairro"
              className="bairro"
              type="text"
              placeholder="Bairro"
            />
            <input
              name="cidade"
              className="cidade"
              type="text"
              placeholder="Cidade"
            />
            <input
              name="uf"
              className="uf"
              type="text"
              placeholder="UF"
            />
          </FormContainer>
        </DeliveryContainer>
        <PaymentContainer>
          <div>
            {<CurrencyDollar size={24} />}
            <div>
              <strong>Pagamento</strong>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>
          <PaymentMethodContainer>
            <PaymentButton>
              {
                <CreditCard
                  size={18}
                  color={"#8047F8"}
                />
              }
              Cartão de Crédito
            </PaymentButton>
            <PaymentButton>
              {
                <Bank
                  size={18}
                  color={"#8047F8"}
                />
              }
              Cartão de Débito
            </PaymentButton>
            <PaymentButton>
              {
                <Money
                  size={18}
                  color={"#8047F8"}
                />
              }
              Dinheiro
            </PaymentButton>
          </PaymentMethodContainer>
        </PaymentContainer>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <CartWrapper>
          <div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <PricesContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </PricesContainer>{" "}
        </CartWrapper>
      </div>
    </CartPageContainer>
  );
}
