import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const initValue = { email: "", password: "" };

const FormularioSinValidarObjeto = ({ signIn }) => {
  const [values, setValues] = useState(initValue);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  console.log(values);
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          onChange={handleOnChange}
          value={values.email}
        />
        <FormHelperText>Well never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password" name="password">
          Your password
        </FormLabel>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={handleOnChange}
          value={values.password}
        />
      </FormControl>
      <Button
        onClick={() => {
          signIn(values.email, values.password);
        }}
      >
        Guardar
      </Button>
    </>
  );
};
export default FormularioSinValidarObjeto;
