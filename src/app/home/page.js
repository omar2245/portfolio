"use client";
import { Stack, Typography, Box, Divider, Chip } from "@mui/material";
import Link from "next/link";
import React from "react";
import Button from "@/component/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Image from "next/image";
import ProjectCard from "@/component/ProjectCard";
import { RESUME_LINK, MOS_LINK } from "@/utils/utils";
import Head from "next/head";
const Home = () => {
  return (
    <Box px={3}>
      <Head>
        <title>My page title</title>
      </Head>
      <Stack component={"section"} py={16} spacing={1}>
        <Typography variant="h4" fontWeight={600}>
          嗨！我是Omar
        </Typography>
        <Typography variant="h6" color="#4F4F4F">
          我擁有一年工作經驗的前端工程師，目前正在轉職為UI/UX設計師。
          <br />
          前端經驗讓我更了解使用者如何與產品互動，理解技術可行性，減少設計與開發之間的溝通障礙。
        </Typography>

        <Stack pt={1}>
          <Link href={"/"}>
            <Button
              endIcon={<FileDownloadOutlinedIcon />}
              variant="outlined"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#3E3E3E" }}
              onClick={() => window.open(RESUME_LINK)}
            >
              下載履歷
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Divider />

      <Stack component={"section"} pl={16} py={8} spacing={6}>
        <Stack spacing={8} direction={"row"}>
          <Typography
            variant="h6"
            fontWeight={600}
            color="secondary"
            width={"200px"}
          >
            學歷
          </Typography>
          <Stack spacing={4}>
            <Stack spacing={0.5}>
              <Typography fontSize={"18px"} fontWeight={600}>
                國立中正大學
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                資訊工程研究所 | 碩士
              </Typography>
              <Typography color="#5e5e5e">2019-2021</Typography>
            </Stack>

            <Stack spacing={0.5}>
              <Typography fontSize={"18px"} fontWeight={600}>
                國立中正大學
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                資訊工程研究系 | 學士
              </Typography>
              <Typography color="#5e5e5e">2015-2019</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={8} direction={"row"}>
          <Typography
            variant="h6"
            fontWeight={600}
            color="secondary"
            width={"200px"}
          >
            工作經歷
          </Typography>
          <Stack spacing={4}>
            <Stack spacing={0.5}>
              <Typography variant="h6" fontWeight={600}>
                前端工程師
              </Typography>
              <Typography color="#5e5e5e">2023/11 - 2024/4</Typography>
              <Typography>集星網路股份有限公司</Typography>
              <Typography color="#5e5e5e">
                職務內容：網頁後台系統的開發、後台CRUD處理、管理員權限
              </Typography>
            </Stack>

            <Stack spacing={0.5}>
              <Typography variant="h6" fontWeight={600}>
                前端工程師
              </Typography>
              <Typography color="#5e5e5e">2022/9 - 2023/4</Typography>
              <Typography>薩摩亞商毅成科技有限公司</Typography>
              <Typography color="#5e5e5e">
                職務內容：金融產品後台系統開發
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Divider />

      <Stack component={"section"} py={8} spacing={1}>
        <Stack>
          <Typography variant="h4" textAlign={"center"}>
            設計案例
          </Typography>

          <ProjectCard
            time={2024}
            imgSrc={"/asset/mos_cover.png"}
            title={"Mos App Redesign"}
            content={
              "本專案以 MOS Order APP為對象，根據使用者在 App Store評論區反映的問題進行重設設計，目的是提升使用者體驗並解決實際使用痛點。"
            }
            tags={["UI/UX", "Redisgn", "iOS"]}
            link={MOS_LINK}
          />
        </Stack>
      </Stack>

      <Stack component={"section"} py={8} spacing={1}>
        <Stack>
          <Typography variant="h4" textAlign={"center"}>
            前端專案
          </Typography>

          <ProjectCard
            time={"2024"}
            imgSrc={"/asset/t.png"}
            title={"簡易社群系統搭建"}
            content={
              "使用Vue3 + VITE開發，主要是模仿Threads的方式切版，並且使用JSONPlaceholder提供的免費API做串接。"
            }
            tags={["前端", "Vue3.js"]}
            link="https://flourishing-creponne-b7a1dc.netlify.app"
            githubLink="https://github.com/omar2245/social-media"
          />
          <ProjectCard
            time={"2022-2023"}
            imgSrc={"/asset/promptopia.png"}
            title={"發文系統"}
            content={
              "本專案主要功能是發文系統。用戶可以透過登入功能進入系統，瀏覽其他用戶的文章，並管理自己的發文，包括進行編輯或更新。"
            }
            tags={["前端", "Next.js", "React.js"]}
            link="https://project-promtopia-steel.vercel.app/"
            githubLink="https://github.com/omar2245/project_promtopia"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
