"use client";
import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useRouter } from "next/navigation";

import Button from "@/component/Button";
import { PROTOTYPE_LINK } from "@/utils/utils";

const page = () => {
  const router = useRouter();
  return (
    <Stack p={4} spacing={4} position={"relative"} minHeight={"100vh"}>
      <Box
        position={"sticky"}
        zIndex={1000}
        top={88}
        backgroundColor="white"
        boxShadow={1}
        borderRadius={2}
        width={"84.8px"}
      >
        <Button
          startIcon={<ArrowBackIosNewIcon />}
          sx={{ px: "16px" }}
          onClick={() => router.push("/design")}
        >
          返回
        </Button>
      </Box>

      <Stack component={"img"} src={"/asset/cover_mos.webp"} borderRadius={2} />

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          簡介
        </Typography>
        <Typography color="#303030">
          Mos Order APP是摩斯漢堡推出的行動點餐服務，主要功能有外帶、外送服務。
        </Typography>
        <Box>
          <Button
            onClick={() =>
              window.open("https://apps.apple.com/tw/app/mos-order/id509435066")
            }
            variant="outlined"
            startIcon={<OpenInNewIcon />}
          >
            APP Store連結
          </Button>
        </Box>
      </Stack>

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          定義問題
        </Typography>
        <Typography>根據APP Store的評論區以及主頁面的問題有以下：</Typography>
        <Stack
          direction={{
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          }}
          justifyContent={"space-between"}
          spacing={2}
        >
          <Stack
            spacing={2}
            border={1}
            borderRadius={2}
            borderColor={"LightGray"}
            px={3}
            py={2}
            width={{ xl: "50%", lg: "50%", md: "50%" }}
          >
            <Typography fontWeight={600}>登入驗證問題</Typography>
            <Divider />

            <Typography component={"ul"} color="#303030">
              <li>點完餐後才說沒有登入</li>
              <li>登入驗證過期並不會跳回登入頁面</li>
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            border={1}
            borderRadius={2}
            borderColor={"LightGray"}
            px={3}
            py={2}
            width={{ xl: "50%", lg: "50%", md: "50%" }}
          >
            <Typography fontWeight={600}>主畫面</Typography>
            <Divider />
            <Typography component={"ul"} color="#303030">
              <li>點餐後找不到訂單(製作中的餐點會跑去歷史訂單)</li>
              <li>
                主頁面許多功能皆與會員有關，如：會員專區、摩斯卡、安心取溫馨送、訂單紀錄、訊息
              </li>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          改善目標
        </Typography>
        <Typography>
          登入驗證問題，在開啟APP時做判斷，而主畫面調整至較為直覺。
        </Typography>
        <Stack
          direction={{
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          }}
          spacing={2}
        >
          <Stack
            spacing={2}
            border={1}
            borderRadius={2}
            borderColor={"LightGray"}
            px={3}
            py={2}
            width={{ xl: "50%", lg: "50%", md: "50%" }}
          >
            <Typography fontWeight={600}>登入驗證問題</Typography>
            <Divider />

            <Typography color="#303030">
              透過Splash
              Screen判斷使用者是否有登入或登入驗證的Token是否過期，若未登入或是Token過期則導回歡迎或登入頁面，若已登入導回主頁
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            border={1}
            borderRadius={2}
            borderColor={"LightGray"}
            px={3}
            py={2}
            width={{ xl: "50%", lg: "50%", md: "50%" }}
          >
            <Typography fontWeight={600}>主畫面</Typography>
            <Divider />
            <Typography component={"ul"} color="#303030">
              <li>將底部導航列調整成首頁、分店、會員專區</li>
              <li>
                首頁留下常用功能：立即點餐(外帶自取)、安心外送、摩斯卡QRCODE結帳/儲值和行銷的Banner
              </li>
              <li>若有訂單時會在主頁面顯示訂單進度</li>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          Design System | 設計系統
        </Typography>
        <Typography>
          建立元件庫裡，方便快速取用並且確保設計上的一致性。
        </Typography>
        <Stack
          component={"img"}
          src={"/asset/design_sys.png"}
          borderRadius={2}
        />
      </Stack>

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          User Flow | 使用者流程
        </Typography>
        <Typography fontWeight={600}>登入流程</Typography>
        <Stack
          component={"img"}
          src={"/asset/login_flow.png"}
          borderRadius={2}
        />

        <Typography fontWeight={600}>主畫面</Typography>
        <Stack
          component={"img"}
          src={"/asset/main_page_flow.png"}
          borderRadius={2}
        />
      </Stack>

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          Wireframe | 線框稿
        </Typography>
        <Typography fontWeight={600}>登入</Typography>
        <Typography>
          與APP原本的登入方法相同，採用手機OTP的方式簡化使用者登入流程
        </Typography>
        <Stack
          component={"img"}
          src={"/asset/wireframe_login.png"}
          borderRadius={2}
        />

        <Typography fontWeight={600}>主畫面</Typography>
        <Typography component={"ul"}>
          <li>將底部導航列調整成首頁、分店、會員專區。</li>
          <li>在主頁面新增餐點製作中提醒，並且在點擊後會進入餐點詳情頁面。</li>
          <li>原APP中較為分散的會員功能整合至會員專區。</li>
        </Typography>
        <Stack
          component={"img"}
          src={"/asset/wireframe_main.png"}
          borderRadius={2}
        />
      </Stack>

      <Stack spacing={1}>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <Typography fontWeight={600} color="secondary" variant="h6">
            Mock Up | 設計精稿
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<OpenInNewIcon />}
            onClick={() => window.open(PROTOTYPE_LINK)}
          >
            Prototype
          </Button>
        </Stack>

        <Box></Box>
        <Typography fontWeight={600}>登入</Typography>

        <Stack
          component={"img"}
          src={"/asset/mockup_login.png"}
          borderRadius={2}
        />

        <Typography fontWeight={600}>主畫面</Typography>

        <Stack
          component={"img"}
          src={"/asset/mockup_main.png"}
          borderRadius={2}
        />
      </Stack>
    </Stack>
  );
};

export default page;
