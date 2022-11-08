import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartItem } from "../../components/CartItem";
import { ShoppingContext } from "../../contexts/ShoppingContext";
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
  const { shoppingList } = useContext(ShoppingContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!shoppingList) {
      setTotalItems(0);
    } else {
      calculateTotalItems();
    }
  }, [shoppingList]);

  function calculateTotalItems() {
    setTotalItems(
      shoppingList
        .map((coffee) => coffee.price * coffee.quantity)
        .reduce((total, coffee) => total + coffee, 0)
    );
  }

  const DELIVERY_PRICE = 3.99;

  const cartTotal = DELIVERY_PRICE + totalItems;

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
            {shoppingList.map((coffee) => {
              return (
                <CartItem
                  id={coffee.id}
                  name={coffee.name}
                  image={coffee.image}
                  quantity={coffee.quantity}
                  price={coffee.price * coffee.quantity}
                />
              );
            })}
          </div>
          <PricesContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ {totalItems}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3.99</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {cartTotal}</strong>
            </div>
          </PricesContainer>{" "}
        </CartWrapper>
      </div>
    </CartPageContainer>
  );
}
