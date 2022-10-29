import { MapPin, Money } from "phosphor-react";
import { CartItem } from "../../components/CartItem";
import { CartPageContainer, DeliveryContainer, FormContainer } from "./styles";

export function Cart() {
  return (
    <CartPageContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <DeliveryContainer>
          <div>
            {<MapPin size={24} />}
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <FormContainer action="">
            <label htmlFor="cep">
              <input
                name="cep"
                className="cep"
                type="text"
                placeholder="CEP"
              />
            </label>
            <label htmlFor="rua">
              <input
                name="rua"
                className="rua"
                type="text"
                placeholder="Rua"
              />
            </label>
            <label htmlFor="numero">
              <input
                name="numero"
                className="numero"
                type="text"
                placeholder="Número"
              />
            </label>
            <label htmlFor="complemento">
              <input
                name="complemento"
                className="complemento"
                type="text"
                placeholder="Complemento"
              />
            </label>
            <label htmlFor="bairro">
              <input
                name="bairro"
                className="bairro"
                type="text"
                placeholder="Bairro"
              />
            </label>
            <label htmlFor="cidade">
              <input
                name="cidade"
                className="cidade"
                type="text"
                placeholder="Cidade"
              />
            </label>
            <label htmlFor="uf">
              <input
                name="uf"
                className="uf"
                type="text"
                placeholder="UF"
              />
            </label>
          </FormContainer>
          <div>
            {<Money />}
            <div>
              <strong>Pagamento</strong>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
            <div>
              <button>Cartão de Crédito</button>
              <button>Cartão de Débito</button>
              <button>Dinheiro</button>
            </div>
          </div>
        </DeliveryContainer>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div>
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
        </div>
      </div>
    </CartPageContainer>
  );
}
