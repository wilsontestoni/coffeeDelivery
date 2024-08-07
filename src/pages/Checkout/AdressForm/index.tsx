import { useFormContext } from "react-hook-form";
import { AdressInputsContainer } from "../styles";
import { InputContainer } from "./styles";

export function AdressForm() {
  const { register } = useFormContext();

  return (
    <AdressInputsContainer>
      <InputContainer $variantWidth="200">
        <input type="number" placeholder="CEP" {...register("cep")} />
      </InputContainer>

      <InputContainer>
        <input type="text" placeholder="Rua" {...register("street")} required />
      </InputContainer>

      <div>
        <InputContainer>
          <input
            type="text"
            placeholder="Número"
            {...register("number")}
            required
          />
        </InputContainer>
        <InputContainer>
          <input
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
          <span>Opcional</span>
        </InputContainer>
      </div>

      <div>
        <InputContainer>
          <input
            type="text"
            placeholder="Bairro"
            {...register("neighborhood")}
            required
          />
        </InputContainer>
        <InputContainer>
          <input
            type="text"
            placeholder="Cidade"
            {...register("city")}
            required
          />
        </InputContainer>
        <InputContainer>
          <input type="text" placeholder="UF" {...register("uf")} required />
        </InputContainer>
      </div>
    </AdressInputsContainer>
  );
}
