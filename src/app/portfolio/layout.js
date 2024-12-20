"use client";
import { theme } from "@/style/theme";
import Image from "next/image";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Typography, Box, Stack, Divider } from "@mui/material";
import Button from "@/component/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { RESUME_LINK } from "@/utils/utils";

import Link from "next/link";

const layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          color: "#000000",
          a: { textDecoration: "none", color: "inherit" },
        }}
      >
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
            component={Link}
            href={"/portfolio"}
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
                startIcon={<FileDownloadOutlinedIcon />}
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

          <Box pt={5} />

          <Divider />

          <Stack p={5} spacing={2}>
            <Typography variant="h5" fontWeight={600}>
              與我聯絡
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <EmailOutlinedIcon />
              <Typography>Email: omarchen1231@gmail.com</Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default layout;
