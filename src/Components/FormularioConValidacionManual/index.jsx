import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { object, string } from "yup";

const userSchema = object({
  email: string().email().required(),
  password: string().required().min(8),
});

const initValue = { email: "", password: "" };

const FormularioConValidacionManual = ({ signIn }) => {
  const [values, setValues] = useState(initValue);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnClick = () => {
    userSchema
      .validate(values, { abortEarly: false })
      .then((valid) => {
        console.log("valid:", valid);

        signIn(values.email, values.password);
      })
      .catch((err) => {
        console.log("err:", err.errors, err.path, err.inner);
      });
  };
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
          handleOnClick();
        }}
      >
        Guardar
      </Button>
    </>
  );
};
export default FormularioConValidacionManual;
