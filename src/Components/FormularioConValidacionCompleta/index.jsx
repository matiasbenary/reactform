import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const userSchema = object({
  email: string().email().required("El email es requerido"),
  password: string().required().min(8),
});

const FormularioCompleto = ({ signIn }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const onSubmit = ({ email, password }) => signIn(email, password);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" name="email" {...register("email")} />
        <FormHelperText>Well never share your email.</FormHelperText>
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor="password" name="password">
          Your password
        </FormLabel>
        <Input
          id="password"
          type="password"
          name="password"
          {...register("password")}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
export default FormularioCompleto;
