"use client";
import React from "react";
import { Stack, Typography, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./Button";

const ProjectCard = ({
  imgSrc,
  time,
  title,
  content,
  tags = [],
  link = "/",
  githubLink = "",
}) => {
  const router = useRouter();
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
          <Stack pt={4} spacing={2} direction={"row"}>
            {githubLink.length > 0 ? (
              <Link
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="contained">了解專案細節</Button>
              </Link>
            ) : (
              <Link
                href={link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="contained">了解專案細節</Button>
              </Link>
            )}

            {githubLink.length > 0 && (
              <Link
                href={githubLink}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="outlined" startIcon={<GitHubIcon />}>
                  Github
                </Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProjectCard;
