import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1818",
        color: "grey",
        padding: "20px",
        textAlign: "left",
        bottom: 0,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={2}
      >
       
         <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 5, color: "white" }}
        >
          {"© "}
          <Link
            color="inherit"
            href="/"
            sx={{ mt: 5, color: "white", ":hover": { color: "#66bfbf" } }}
          >
            Ajita Ganguly
          </Link>{" "}
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
