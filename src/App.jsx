import { Container, useToast } from "@chakra-ui/react";
import { useState } from "react";
import CheckLogin from "./Components/CheckLogin";
import FormularioCompleto from "./Components/FormularioConValidacionCompleta";
import FormularioConValidacionManual from "./Components/FormularioConValidacionManual";
import FormularioConReactHookForm from "./Components/FormularioConValidacionReactHookForm";
import FormularioSinValidarObjeto from "./Components/FormularioSinValidacionObjeto";
import FormularioSinValidarSimple from "./Components/FormularioSinValidarSimple";

function App() {
  const [hasLogin, setHasLogin] = useState(false);
  const toast = useToast();
  const signOut = () => setHasLogin(false);
  const signIn = (email, password) => {
    console.log(email, password);
    console.log(email === "test@test.com");
    console.log(password === "12345678");
    if (email === "test@test.com" && password === "12345678") {
      toast({
        title: `Ingreso con Exito`,
        status: "success",
        isClosable: true,
      });
      setHasLogin(true);
    } else {
      toast({
        title: `Error de credenciales`,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <Container mt="5">
      {hasLogin && <CheckLogin hasLogin={hasLogin} signOut={signOut} />}
      {hasLogin || <FormularioCompleto signIn={signIn} />}
    </Container>
  );
}

export default App;
