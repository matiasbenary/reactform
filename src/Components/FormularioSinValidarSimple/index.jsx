import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const FormularioSinValidarSimple = ({ signIn }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        onClick={() => {
          signIn(email, password);
        }}
      >
        Guardar
      </Button>
    </>
  );
};
export default FormularioSinValidarSimple;
