import { Box, Button } from "@chakra-ui/react";

const CheckLogin = ({ hasLogin, signOut }) => {
  return (
    <Box>
      {hasLogin ? (
        <Box>
          <h1>Logeado</h1>
          <Button onClick={signOut}>Deslogear</Button>
        </Box>
      ) : (
        <h1>Sin logear</h1>
      )}
    </Box>
  );
};

export default CheckLogin;
