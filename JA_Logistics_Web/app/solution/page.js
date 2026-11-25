import {
    Box,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
    Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import SpeedIcon from "@mui/icons-material/Speed";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const features = [
    {
        icon: <SpeedIcon />,
        title: "Raspberry Pi",
        description:
            "We use a Raspberry Pi to connect with the switches and control the track layout.",
        image: "/images/solution/raspberry-pi.jpeg",
        github: "https://github.com/Lex031/JA-Logistics/tree/Embedded/JA_Logistics_Embedded",
        technologies: [
            "Python",
            "I2C",
        ],
    },
    {
        icon: <PrecisionManufacturingIcon />,
        title: "LEGO and Bluetooth",
        description:
            "We connect to the train via the LEGO controller in the train using its built-in Bluetooth.",
        image: "/images/solution/track-layout.jpeg",
        github: "https://github.com/Lex031/JA-Logistics/tree/Embedded/JA_Logistics_Embedded",
        technologies: [
            "Javascript",
            "BLE",
        ],
    },
    {
        icon: <LightbulbOutlinedIcon />,
        title: "The Website",
        description:
            "Our website documents the project, explains our solution, and presents the technologies used during development.",
        image: "/images/solution/website.png",
        github: "https://github.com/Lex031/JA-Logistics/tree/Web/JA_Logistics_Web",
        technologies: [
            "Next.js",
            "React",
            "Material UI",
            "Date-fns",
            "Netlify",
        ],
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
                <Stack
                    spacing={2}
                    sx={{
                        mb: 6,
                        alignItems: "center",
                    }}
                >
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
                        <Grid
                            key={feature.title}
                            size={{ xs: 12, md: 4 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    height: "100%",
                                    borderRadius: 3,
                                    border: "1px solid #E5EAF0",
                                    overflow: "hidden",
                                    transition: "all 0.25s ease",
                                    display: "flex",
                                    flexDirection: "column",

                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow:
                                            "0 15px 35px rgba(11,24,48,0.09)",
                                        borderColor: yellow,
                                    },
                                }}
                            >
                                {/* Image */}
                                {feature.image && (
                                    <Box
                                        component="img"
                                        src={feature.image}
                                        alt={feature.title}
                                        sx={{
                                            width: "100%",
                                            height: 220,
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                )}

                                {/* Content */}
                                <Box
                                    sx={{
                                        p: 4,
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    {/* Icon */}
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
                                            "& svg": {
                                                fontSize: 30,
                                            },
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 800,
                                            color: navy,
                                            mb: 2,
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            color: "#687386",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>

                                    {/* Technologies */}
                                    {feature.technologies && (
                                        <Box sx={{ mt: 3 }}>
                                            <Typography
                                                sx={{
                                                    color: navy,
                                                    fontWeight: 800,
                                                    mb: 1.5,
                                                    fontSize: 14,
                                                }}
                                            >
                                                TECHNOLOGIES USED
                                            </Typography>

                                            <Stack
                                                direction="row"
                                                flexWrap="wrap"
                                                gap={1}
                                            >
                                                {feature.technologies.map(
                                                    (technology) => (
                                                        <Chip
                                                            key={technology}
                                                            label={technology}
                                                            size="small"
                                                            sx={{
                                                                bgcolor:
                                                                    "#FFF6D6",
                                                                color: navy,
                                                                fontWeight: 700,
                                                                border: `1px solid ${yellow}`,
                                                            }}
                                                        />
                                                    )
                                                )}
                                            </Stack>
                                        </Box>
                                    )}
                                    {feature.github && (
                                        <Link
                                            href={feature.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="none"
                                            sx={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 1,
                                                mt: 3,
                                                color: navy,
                                                fontWeight: 700,
                                                width: "fit-content",
                                                transition: "color 0.2s ease",

                                                "&:hover": {
                                                    color: "#B28B00",
                                                },
                                            }}
                                        >
                                            <GitHubIcon />
                                            View on GitHub
                                        </Link>
                                    )}
                                    {/* Number */}
                                    <Typography
                                        sx={{
                                            mt: "auto",
                                            pt: 3,
                                            color: "#B28B00",
                                            fontWeight: 900,
                                            fontSize: 13,
                                        }}
                                    >
                                        0{index + 1}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ mt: { xs: 8, md: 10 } }}>
                    <Stack
                        spacing={2}
                        sx={{
                            mb: 4,
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#B28B00",
                                fontWeight: 800,
                                letterSpacing: 2,
                                fontSize: 13,
                            }}
                        >
                            SEE IT IN ACTION
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
                            Project Demonstration
                        </Typography>

                        <Typography
                            sx={{
                                color: "#687386",
                                textAlign: "center",
                                maxWidth: 700,
                                lineHeight: 1.8,
                            }}
                        >
                            Watch our prototype in action and see how the different
                            components work together to control the LEGO railway.
                        </Typography>
                    </Stack>

                    <Paper
                        elevation={0}
                        sx={{
                            maxWidth: 1000,
                            mx: "auto",
                            overflow: "hidden",
                            borderRadius: 3,
                            border: "1px solid #E5EAF0",
                            backgroundColor: navy,
                            boxShadow: "0 15px 35px rgba(11,24,48,0.12)",
                        }}
                    >
                        <Box
                            component="video"
                            src="/videos/track-demo.mp4"
                            controls
                            muted
                            playsInline
                            sx={{
                                display: "block",
                                width: "100%",
                                aspectRatio: "16 / 9",
                                objectFit: "contain",
                                backgroundColor: navy,
                            }}
                        />
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}