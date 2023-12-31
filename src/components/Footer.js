import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        direction="row"
        gap="40px"
        justifyContent="center"
        alignItems="center"
        p="15px"
      >
        <img src={Logo} alt="logo" />
        <Typography>Anusha Sharma</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
