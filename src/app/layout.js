"use client";
import { theme } from "@/style/theme";
import Image from "next/image";
import "../style/global.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Typography, Box, Stack } from "@mui/material";
import Button from "@/component/Button";
import { Noto_Sans_TC } from "next/font/google";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { RESUME_LINK } from "@/utils/utils";

const roboto = Noto_Sans_TC({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <Box sx={{ color: "#000000" }}>
            <AppBar
              position="sticky"
              sx={{
                backgroundColor: "white",
                color: "#000000",
                display: "flex",
                justifyContent: "center",
                px: 2,
                py: 2,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="1200px"
                sx={{ width: "100%", margin: "0 auto" }}
              >
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <Image
                    src={"/asset/logo.png"}
                    width={40}
                    height={40}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                    alt="mos"
                  />
                  <Typography variant="h6">Omar You</Typography>
                </Stack>
                <Stack
                  component={"nav"}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                  sx={{
                    color: "#5e5e5e",
                    textDecoration: "none",
                    a: { textDecoration: "none", color: "inherit" },
                  }}
                >
                  {/* <Link href="/">我的作品</Link>
                  <Link href="/">關於我</Link> */}
                  <Button
                    variant="outlined"
                    sx={{
                      fontWeight: 700,
                    }}
                    endIcon={<FileDownloadOutlinedIcon />}
                    onClick={() => window.open(RESUME_LINK)}
                  >
                    下載履歷
                  </Button>
                </Stack>
              </Stack>
            </AppBar>
            <Box
              maxWidth="1200px"
              justifyContent="center"
              sx={{
                width: "100%",
                margin: "0 auto",
              }}
              className="main"
            >
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
