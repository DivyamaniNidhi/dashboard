import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar, useMediaQuery } from "@mui/material";
import { logout, auth } from "../config/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth); // Get logged-in user
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is small

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Show Avatar on small screens, Full name otherwise */}
        {user ? (
          isSmallScreen ? (
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              {user.displayName.charAt(0).toUpperCase()}
            </Avatar>
          ) : (
            <Typography variant="h6">{user.displayName}</Typography>
          )
        ) : (
          <Typography variant="h6">Guest</Typography>
        )}

        {/* Center: Dashboard Title */}
        <Typography variant="h5" sx={{ flexGrow: 1, textAlign: "center" }}>
          Dashboard
        </Typography>

        {/* Right: Logout Button */}
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
