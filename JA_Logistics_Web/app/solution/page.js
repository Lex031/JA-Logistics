import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

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

export default function Solution() {
    const navy = "#0B1830";
    const yellow = "#F5C928";

    return (
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
    );
}