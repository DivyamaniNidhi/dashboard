import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { signInWithGoogle } from "../config/config";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      navigate("/app"); // Redirect to dashboard after login
    }
  };

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h3">Welcome!</Typography>
      <Typography variant="h6" mt={2}>Sign in to access the app</Typography>
      <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 3 }}>
        Login with Google
      </Button>
    </Box>
  );
};

export default Welcome;
