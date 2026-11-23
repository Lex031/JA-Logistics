"use client"

import { Box, Container, Stack, Typography } from "@mui/material"
import Image from "next/image"

export default function Footer({ logo }) {

    return (
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
    )
}