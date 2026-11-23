import { Box, Container, Stack, Typography } from "@mui/material";

export default function About() {
    const navy = "#0B1830";

    return (
        <Box id="about" sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="md">
                <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center", height: "100hv" }} >
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
    );
}