import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const navy = "#0B1830";
const yellow = "#F5C928";

export default function Contact() {
    return (
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
    );
}