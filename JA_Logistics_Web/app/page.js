"use client";
import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import logo from "@/public/LEGO-figurhoved i skinnering.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpeedIcon from "@mui/icons-material/Speed";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import TrainIcon from "@mui/icons-material/Train";

const navy = "#0B1830";
const yellow = "#F5C928";

const features = [
  {
    icon: <SpeedIcon />,
    title: "Save valuable time",
    description:
      "Reduce unnecessary steps and create more efficient workflows.",
  },
  {
    icon: <PrecisionManufacturingIcon />,
    title: "Improve efficiency",
    description:
      "Make everyday operations smoother with a smarter approach.",
  },
  {
    icon: <LightbulbOutlinedIcon />,
    title: "Think differently",
    description:
      "Discover new possibilities through practical innovation.",
  },
];

export default function Home() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>

      {/* NAVIGATION */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          color: navy,
          borderBottom: "1px solid #E9EDF2",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 82 }}>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={1.5}>
              <Image
                src={logo}
                alt="Trackflow logo"
                width={52}
                height={52}
                style={{ objectFit: "contain" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: 900, letterSpacing: 1.5 }}
              >
                TRACKFLOW
              </Typography>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Stack
              direction="row"
              spacing={{ xs: 1, md: 4 }}
              sx={{ alignItems: "center" }}
            >
              {["Home", "Solution", "About", "Contact"].map((item) => (
                <Typography
                  key={item}
                  component={Link}
                  href={
                    item === "Home"
                      ? "#home"
                      : item === "Solution"
                        ? "#solution"
                        : item === "About"
                          ? "#about"
                          : "#contact"
                  }
                  sx={{
                    display: { xs: item === "Home" ? "block" : "none", sm: "block" },
                    color: navy,
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 600,
                    "&:hover": { color: "#C99D00" },
                  }}
                >
                  {item}
                </Typography>
              ))}

              <Button
                component={Link}
                href="#contact"
                variant="contained"
                sx={{
                  bgcolor: yellow,
                  color: navy,
                  fontWeight: 800,
                  px: 2.5,
                  "&:hover": { bgcolor: "#E5B900" },
                }}
              >
                Get in touch
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO */}
      <Box
        id="home"
        sx={{
          bgcolor: navy,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "radial-gradient(circle at 80% 50%, #19375A 0%, transparent 45%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            sx={{ minHeight: { xs: 650, md: 610 }, py: 8, alignItems: "center" }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: yellow,
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: 2,
                  }}
                >
                  <TrainIcon fontSize="small" />
                  SMARTER RAIL OPERATIONS
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: 43, md: 64 },
                    fontWeight: 900,
                    lineHeight: 1.08,
                    letterSpacing: -2,
                  }}
                >
                  Make every
                  <Box component="span" sx={{ color: yellow, display: "block" }}>
                    movement
                  </Box>
                  count.
                </Typography>

                <Typography
                  sx={{
                    color: "#C5D0DF",
                    fontSize: { xs: 16, md: 19 },
                    lineHeight: 1.8,
                    maxWidth: 480,
                  }}
                >
                  A smarter way to approach railway operations.
                  We turn complex processes into simple,
                  efficient and practical solutions.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 2 }}
                >
                  <Button
                    component={Link}
                    href="#solution"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: yellow,
                      color: navy,
                      px: 3,
                      py: 1.6,
                      fontWeight: 800,
                      "&:hover": { bgcolor: "#E5B900" },
                    }}
                  >
                    Discover our solution
                  </Button>

                  <Button
                    component={Link}
                    href="#about"
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      borderColor: "#63758D",
                      px: 3,
                      py: 1.6,
                      "&:hover": {
                        borderColor: yellow,
                        color: yellow,
                      },
                    }}
                  >
                    Learn more
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: { xs: 300, md: 460 },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "85%",
                    height: "85%",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(245,201,40,0.13), transparent 70%)",
                  },
                }}
              >
                <Image
                  src={logo}
                  alt="Trackflow LEGO railway emblem"
                  width={540}
                  height={540}
                  priority
                  style={{
                    width: "100%",
                    maxWidth: 490,
                    height: "auto",
                    objectFit: "contain",
                    position: "relative",
                    filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.35))",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Decorative bottom line */}
        <Box sx={{ height: 5, bgcolor: yellow }} />
      </Box>

      {/* INTRODUCTION */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }} >
            <Typography
              sx={{
                color: "#B28B00",
                fontWeight: 800,
                letterSpacing: 2,
                fontSize: 13,
              }}
            >
              OUR APPROACH
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: navy,
                fontWeight: 900,
                fontSize: { xs: 32, md: 45 },
                lineHeight: 1.2,
              }}
            >
              Efficiency starts with a better approach.
            </Typography>

            <Typography
              sx={{
                color: "#687386",
                fontSize: 17,
                lineHeight: 1.9,
                maxWidth: 700,
              }}
            >
              Time is one of the most valuable resources in any operation.
              By looking at processes from a different perspective,
              we help identify opportunities to work smarter,
              reduce unnecessary complexity and create better results.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* FEATURES */}
      <Box
        id="solution"
        sx={{
          bgcolor: "#F5F7FA",
          py: { xs: 8, md: 11 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ mb: 6, alignItems: "center" }}>
            <Typography
              sx={{
                color: "#B28B00",
                fontWeight: 800,
                letterSpacing: 2,
                fontSize: 13,
              }}
            >
              WHAT WE FOCUS ON
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: navy,
                fontWeight: 900,
                textAlign: "center",
                fontSize: { xs: 30, md: 42 },
              }}
            >
              Small improvements. Big impact.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid key={feature.title} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 3,
                    border: "1px solid #E5EAF0",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 15px 35px rgba(11,24,48,0.09)",
                      borderColor: yellow,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: 2,
                      bgcolor: "#FFF6D6",
                      color: "#B28B00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      "& svg": { fontSize: 30 },
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: navy, mb: 2 }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{ color: "#687386", lineHeight: 1.8 }}
                  >
                    {feature.description}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 3,
                      color: "#B28B00",
                      fontWeight: 900,
                      fontSize: 13,
                    }}
                  >
                    0{index + 1}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CALL TO ACTION */}
      <Box id="contact" sx={{ py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: navy,
              borderRadius: 4,
              p: { xs: 4, md: 7 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                variant="h3"
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: { xs: 30, md: 42 },
                  mb: 2,
                }}
              >
                Ready to move forward?
              </Typography>

              <Typography sx={{ color: "#C5D0DF", lineHeight: 1.8 }}>
                Discover how a smarter approach can make
                a difference in your everyday operations.
              </Typography>
            </Box>

            <Button
              component="a"
              href="mailto:info@trackflow.example"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: yellow,
                color: navy,
                px: 4,
                py: 2,
                whiteSpace: "nowrap",
                fontWeight: 900,
                "&:hover": { bgcolor: "#E5B900" },
              }}
            >
              Contact our team
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#071224", color: "#fff", py: 4 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: {
                xs: "flex-start",
                sm: "center"
              }
            }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Image
                src={logo}
                alt="Trackflow"
                width={38}
                height={38}
              />
              <Typography fontWeight={900} letterSpacing={1.5}>
                TRACKFLOW
              </Typography>
            </Stack>

            <Typography sx={{ color: "#8290A5", fontSize: 13 }}>
              © {2026} Trackflow. All rights reserved.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}