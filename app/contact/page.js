"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function CustomizedTextField(props) {
  return (
    <TextField
      {...props}
      sx={{
        "& .MuiInputBase-root": {
          color: "#000000",
        },
        "& .MuiInputLabel-root": {
          color: "#000000",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#808080",
          },
          "&:hover fieldset": {
            borderColor: "#000000",
          },
        },
        "& .MuiInputLabel-shrink": {
          color: "#808080",
        },
      }}
    />
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#808080",
    },
    background: {
      default: "#ffffff",
    },
  },
});

export default function Contact() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#000000" }}>
              Contact Me
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomizedTextField
                    autoComplete="given-name"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomizedTextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomizedTextField
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                    name="subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomizedTextField
                    required
                    fullWidth
                    name="body"
                    label="Body"
                    id="body"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 9, color: 'black', fontWeight: 'bold' }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </main>
  );
}
