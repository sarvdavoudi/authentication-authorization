import WithAuth from "@/components/Hoc/WithAuth";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Typography variant="h4">Welcome to the Home Page</Typography>
      <Typography>
        This page is protected and requires authentication.
      </Typography>
      <Button href="/login" type="submit" variant="contained" color="primary">
        Go to login page
      </Button>
    </Box>
  );
};

// Wrap your component with the HOC
export default WithAuth(Home);
