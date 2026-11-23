"use client";

import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { differenceInYears } from "date-fns";
import people from "@/util/members";

export default function Group() {
    const members = people();
    const [today, setToday] = useState(null);

    useEffect(() => {
        setToday(new Date());
    }, []);

    return (
        <Box
            sx={{
                minHeight: "100%",
                py: { xs: 5, md: 8 },
                px: 2,
                color: "white",
            }}
        >
            <Container maxWidth="lg">
                {/* Heading */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 900,
                            color: "#ffcc00",
                            fontSize: { xs: "2.5rem", md: "4rem" },
                            textTransform: "uppercase",
                            textShadow: "4px 4px 0 #000",
                            mb: 2,
                        }}
                    >
                        Meet the Team
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 650,
                            mx: "auto",
                            color: "rgba(255,255,255,0.8)",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                        }}
                    >
                        The people behind the project.
                    </Typography>
                </Box>

                {/* Members */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: { xs: 3, md: 4 },
                    }}
                >
                    {members.map((member, index) => {
                        const age = today
                            ? differenceInYears(today, new Date(member.birthday))
                            : null;

                        return (
                            <Box
                                key={member.fullname}
                                sx={{
                                    position: "relative",
                                    backgroundColor: "#f5f5f5",
                                    color: "#071224",
                                    border: "4px solid #ffcc00",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "8px 8px 0 rgba(0,0,0,0.35)",
                                    transition: "transform 0.2s ease",

                                    "&:hover": {
                                        transform: "translateY(-8px) rotate(-1deg)",
                                    },
                                }}
                            >
                                {/* LEGO-style top section */}
                                <Box
                                    sx={{
                                        backgroundColor: "#ffcc00",
                                        p: 2,
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: 1,
                                    }}
                                >
                                    {[1, 2, 3, 4].map((stud) => (
                                        <Box
                                            key={stud}
                                            sx={{
                                                width: 28,
                                                height: 12,
                                                borderRadius: "50%",
                                                backgroundColor: "#e6b800",
                                                boxShadow:
                                                    "inset 0 2px 2px rgba(255,255,255,0.4)",
                                            }}
                                        />
                                    ))}
                                </Box>

                                {/* Profile image */}
                                <Box
                                    sx={{
                                        backgroundColor: "#071224",
                                        py: 4,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 180,
                                            height: 180,
                                            borderRadius: "50%",
                                            border: "6px solid #ffcc00",
                                            backgroundColor: "#fff",
                                            overflow: "hidden",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 0 0 6px #ffffff20",
                                        }}
                                    >
                                        {member.image ? (
                                            <Box
                                                component="img"
                                                src={member.image}
                                                alt={member.fullname}
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            <Typography
                                                sx={{
                                                    fontSize: "5rem",
                                                    fontWeight: 900,
                                                    color: "#ffcc00",
                                                }}
                                            >
                                                {member.fullname.charAt(0)}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>

                                {/* Content */}
                                <Box sx={{ p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 900,
                                            textAlign: "center",
                                            mb: 2,
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {member.fullname}
                                    </Typography>

                                    {/* Country */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: 1,
                                            mb: 2,
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={`https://flagcdn.com/w80/${member.countryShort.toLowerCase()}.png`}
                                            alt={`${member.country} flag`}
                                            sx={{
                                                width: 36,
                                                height: "auto",
                                                border: "1px solid #ddd",
                                            }}
                                        />

                                        <Typography fontWeight={700}>
                                            {member.country}
                                        </Typography>
                                    </Box>

                                    {/* Age */}
                                    <Box
                                        sx={{
                                            backgroundColor: "#071224",
                                            color: "white",
                                            p: 1.5,
                                            borderRadius: 2,
                                            textAlign: "center",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 800,
                                                color: "#ffcc00",
                                            }}
                                        >
                                            {age} years old
                                        </Typography>
                                    </Box>

                                    {/* About */}
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            lineHeight: 1.7,
                                            color: "#333",
                                        }}
                                    >
                                        {member.about}
                                    </Typography>
                                </Box>

                                {/* LEGO-style bottom studs */}
                                <Box
                                    sx={{
                                        backgroundColor: "#ffcc00",
                                        p: 2,
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: 1,
                                    }}
                                >
                                    {[1, 2, 3, 4].map((stud) => (
                                        <Box
                                            key={stud}
                                            sx={{
                                                width: 28,
                                                height: 12,
                                                borderRadius: "50%",
                                                backgroundColor: "#e6b800",
                                                boxShadow:
                                                    "inset 0 2px 2px rgba(255,255,255,0.4)",
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}