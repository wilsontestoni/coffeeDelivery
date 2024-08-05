import { useFormContext } from "react-hook-form";
import { AdressInputsContainer } from "../styles";
import { Input } from "./styles";


export function AdressForm() {

  const { register } = useFormContext()

  return (
    <AdressInputsContainer>
      <Input
        $variantWidth="200"
        type="text"
        placeholder="CEP"
        {...register("cep")}
        required
      />
      <Input type="text" placeholder="Rua" {...register("street")} required />
      <div>
        <Input
          type="text"
          placeholder="Número"
          {...register("number")}
          required
        />
        <Input
          type="text"
          placeholder="Complemento"
          {...register("complement")}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Bairro"
          {...register("neighborhood")}
          required
        />
        <Input
          type="text"
          placeholder="Cidade"
          {...register("city")}
          required
        />
        <Input type="text" placeholder="UF" {...register("uf")} required />
      </div>
    </AdressInputsContainer>
  );
}
