"use client";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/ProfilePic.jpg";
import AnimatedText from "./components/AnimatedText";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen">
        <div className="flex items-center justify-between w-full">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "80vh",
              borderRadius: "0 30% 30% 0",
              marginRight: "10%",
            }}
          >
            <Image
              src={profilePic}
              alt="profilePic"
              // className="w-full h-auto"
              layout="fill"
              objectFit="cover"
              objectPosition="center top"
              style={{ marginRight: "20%" }}
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects,
              showcasing my expertise in React.js, web development and backend
              development.
            </p>
            <div className="flex gap-2 items-center self-start mt-2 ">
              <Link
                showAnchorIcon
                href="/resume.pdf"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold"
                sx={{ mt: 3, mb: 2 }}
              >
                Resume
              </Link>
              <Link
                showAnchorIcon
                href="mailto:ajitaganguly3@gmail.com"
                target={"_blank"}
                className="flex items-center p-2.5 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 hover:text-#66bfbf"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div>
        <p className="notion-text__content" style={{ padding: "3px 2px" }}>
          <span
            style={{
              lineHeight: "1.5rem",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          ></span>
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        <h3>
          <a href="#"></a>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "dark",
              color: "light",
              padding: "0.5rem 1.5rem",
              borderRadius: "0.25rem",
              fontSize: "2.25rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Career
          </span>
        </h3>
      </div>
      <Container maxWidth="lg">
        <Stack spacing={3} mb={5} mt={5}>
          <Card sx={{ margin: "0 auto" }}>
            <CardContent>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="h6" fontWeight="bold">
                    DEC 2021-PRESENT
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Programmer Analyst · Cognizant
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ color: "grey" }}
                    >
                      Java Full Stack Developer
                    </Typography>
                    <Typography>
                      Developed end-to-end software applications using Java,
                      Spring Boot and ReactJS. Collaborated in teams to manage
                      project priorities, deadlines, and deliverables.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="h6" fontWeight="bold">
                    APR 2021 - DEC 2021
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      SDS CAP Associate · Amazon
                    </Typography>
                    <Typography>
                      Demonstrated proficiency in resolving customer escalation
                      related to concession abuse and fraud. Adhered to Amazon's
                      policies and procedures, ensuring compliance and customer
                      satisfaction.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="h6" fontWeight="bold">
                    JUN 2020 - APR 2021
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      VCS Associate · Amazon
                    </Typography>
                    <Typography>
                      Provided exceptional customer service across multiple
                      communication channels, resolving complex issues.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="h6" fontWeight="bold">
                    JUN 2019 - JUL 2019
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Trainee · Ardent Computech
                    </Typography>
                    <Typography>
                      Developed machine learning models using Python for various
                      applications. Also collaborated in a team to design and
                      implement projects within tight timelines.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
