import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "../components/Header";
import Counter from "../components/Counter";
import UserDataForm from "../components/UserDataForm";
import RichTextEditor from "../components/RichTextEditor";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // True if screen is large

  return (
    <Box>
      <Header />
      <Box p={3} marginRight={4}>
        <Counter />

        {/* Flexbox Layout: Side by Side on Large Screens, Vertical on Small Screens */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isLargeScreen ? "row" : "column",
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1, minWidth: "50%" }}> 
            <UserDataForm />
          </Box>
          <Box sx={{ flex: 1, minWidth: "50%" }}> 
            <RichTextEditor />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
