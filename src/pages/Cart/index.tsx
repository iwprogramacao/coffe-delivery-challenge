import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  const { register, handleSubmit } = useForm();

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

  function moneyConverter(price: number) {
    const priceConverted = price.toFixed(2).replace(".", ",");
    return priceConverted;
  }

  const navigate = useNavigate();
  function handleConfirmOrder(data: any) {
    navigate("/delivery", { state: data });
  }

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
          <FormContainer
            id="confirmOrder"
            onSubmit={handleSubmit(handleConfirmOrder)}
            action=""
          >
            <input
              className="cep"
              type="text"
              placeholder="CEP"
              required
              {...register("cep")}
            />

            <input
              className="rua"
              type="text"
              placeholder="Rua"
              required
              {...register("rua")}
            />
            <input
              className="numero"
              type="text"
              placeholder="Número"
              required
              {...register("numero")}
            />
            <input
              className="complemento"
              type="text"
              placeholder="Complemento"
              required
              {...register("complemento")}
            />
            <input
              className="bairro"
              type="text"
              placeholder="Bairro"
              required
              {...register("bairro")}
            />
            <input
              className="cidade"
              type="text"
              placeholder="Cidade"
              required
              {...register("cidade")}
            />
            <input
              className="uf"
              type="text"
              placeholder="UF"
              required
              {...register("uf")}
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
              <span>R$ {moneyConverter(totalItems)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,99</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {moneyConverter(cartTotal)}</strong>
            </div>

            <button
              form="confirmOrder"
              type="submit"
            >
              Confirmar Pedido
            </button>
          </PricesContainer>
        </CartWrapper>
      </div>
    </CartPageContainer>
  );
}
