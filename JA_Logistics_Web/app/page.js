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
} from "@mui/material";
import logo from "@/public/LEGO-figurhoved i skinnering.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrainIcon from "@mui/icons-material/Train";

const navy = "#0B1830";
const yellow = "#F5C928";



export default function Home() {
  return (
    <Box>
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
    </Box>
  );
}