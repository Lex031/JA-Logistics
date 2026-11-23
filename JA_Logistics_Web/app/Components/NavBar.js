"use client"
import Link from "next/link";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material"
import Image from "next/image"

const navy = "#0B1830";
const yellow = "#F5C928";

export default function Navigation({ logo }) {
    return (
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
                        {["Home", "Solution", "About", "Group", "Contact"].map((item) => (
                            <Typography
                                key={item}
                                component={Link}
                                href={
                                    item === "Home"
                                        ? "/"
                                        : item === "Solution"
                                            ? "/solution"
                                            : item === "About"
                                                ? "/about"
                                                : item === "/contact"
                                                    ? "/contact" : "/group"
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
                            href="/contact"
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
    );
}