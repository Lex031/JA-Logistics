"use client"
import logo from "@/public/logo.png"
import { Box } from "@mui/material";
import { Footer, Navigation } from "./Components";

export default function ClientLayout({ children }) {
    return (
        <Box sx={{
            bgcolor: "#fff",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <Navigation logo={logo} />
            <Box
                component="main"
                sx={{
                    flex: 1,
                }}
            >
                {children}
            </Box>
            <Footer logo={logo} />
        </Box>
    );
}
