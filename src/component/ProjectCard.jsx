import React from "react";
import { Stack, Typography, Chip } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectCard = ({
  imgSrc,
  time,
  title,
  content,
  tags = [],
  link = "/",
  githubLink = "",
}) => {
  return (
    <>
      <Stack
        pt={8}
        direction={{
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        }}
        spacing={4}
      >
        <Stack
          width={{
            xl: "600px",
            lg: "600px",
            md: "600px",
            sm: "auto",
            xs: "auto",
          }}
          component={"img"}
          src={imgSrc}
          borderRadius={2}
        />

        <Stack spacing={1} mt={{ xs: 1, sm: 1, md: 0 }}>
          <Typography color="#6f6f6f">{time}</Typography>
          <Typography variant="h5" fontStyle={600}>
            {title}
          </Typography>
          <Typography color="#5e5e5e">{content}</Typography>

          <Stack direction={"row"} spacing={1} pt={1}>
            {tags.map((t) => (
              <Chip label={t} key={t} />
            ))}
          </Stack>
          <Stack pt={4} spacing={2}>
            <Button
              variant="contained"
              sx={{ a: { textDecoration: "none", color: "inherit" } }}
            >
              <Link href={link} rel="noopener noreferrer" target="_blank">
                了解專案細節
              </Link>
            </Button>
            {githubLink.length > 0 && (
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                sx={{
                  a: {
                    textDecoration: "none",
                    color: "inherit",
                    textTransform: "none",
                  },
                }}
              >
                <Link
                  href={githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Link>
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProjectCard;
