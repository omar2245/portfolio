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

      <Stack
        component={"img"}
        src={"/asset/locarue_cover.png"}
        borderRadius={2}
      />

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          簡介
        </Typography>
        <Typography color="#303030">
          為小型商圈打造的數位商店。具備後台管理系統讓賣家管理商品以及前台頁面，消費者也可以透過前台購買商品。
        </Typography>
        <Stack direction={"row"} spacing={2} width={"100%"}>
          <Stack
            spacing={1}
            borderRadius={2}
            border={1}
            borderColor={"#CCCCCC"}
            p={3}
            width={"100%"}
          >
            <Stack>
              <Typography color="#909090" fontSize={"14px"}>
                擔任角色
              </Typography>
              <Typography color="#303030" fontWeight={600}>
                UX設計實習生
              </Typography>
            </Stack>
          </Stack>

          <Stack
            spacing={1}
            borderRadius={2}
            border={1}
            borderColor={"#CCCCCC"}
            p={3}
            width={"100%"}
          >
            <Stack>
              <Typography color="#909090" fontSize={"14px"}>
                負責項目
              </Typography>
              <Typography color="#303030" fontWeight={600}>
                UI設計、競品分析
              </Typography>
            </Stack>
          </Stack>

          <Stack
            spacing={1}
            borderRadius={2}
            border={1}
            borderColor={"#CCCCCC"}
            p={3}
            width={"100%"}
          >
            <Stack>
              <Typography color="#909090" fontSize={"14px"}>
                服務公司
              </Typography>
              <Typography color="#303030" fontWeight={600}>
                樂可露
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          團隊目標
        </Typography>
        <Typography>
          在台灣的小型商圈通常缺乏線上形象，此平台幫助他們建立線上形象，提供了賣家和買家核心工具，使他們能夠連結與購買商品。
        </Typography>
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
            <Typography fontWeight={600}>買家功能</Typography>
            <Divider />

            <Typography component={"ul"} color="#303030">
              <li>
                精簡購物體驗：易於使用的介面瀏覽商店和產品，配備購物車及安全的付款選項
              </li>
              <li>交易透明化：獲得詳細的交易資訊，確保購買過程順暢</li>
              <li>訊息整合：透過LINE與賣家保持聯繫，獲取即時更新及支援服務</li>
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
            <Typography fontWeight={600}>賣家功能</Typography>
            <Divider />
            <Typography component={"ul"} color="#303030">
              <li>商店與商品管理：輕鬆設置商店並管理商品目錄</li>
              <li>
                訂單管理：直觀地管理訂單，更新商店和商品資訊，並追蹤銷售績效
              </li>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={1}>
        <Typography fontWeight={600} color="secondary" variant="h6">
          設計系統
        </Typography>
        <Typography>
          建立元件庫裡，方便快速取用並且確保設計上的一致性。
        </Typography>
        <Stack
          component={"img"}
          src={"/asset/locarue_design_system.PNG"}
          borderRadius={2}
        />
      </Stack>
      <Stack spacing={1}>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <Typography fontWeight={600} color="secondary" variant="h6">
            設計產出 | 賣家後台管理系統
          </Typography>
        </Stack>

        <Box></Box>

        <Stack
          component={"img"}
          src={"/asset/locarue_design_marchant.png"}
          borderRadius={2}
        />
        <Typography fontWeight={600}>商品管理</Typography>
        <Typography>讓賣家可以新增、管理商品</Typography>
        <Typography fontWeight={600}>訂單管理</Typography>
        <Typography>讓賣家可以商品訂單、確認訂單細節</Typography>
        <Typography fontWeight={600}>付款管理</Typography>
        <Typography>
          讓賣家設定買家可以使用何種付款方式，方便賣家處理金流
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <Typography fontWeight={600} color="secondary" variant="h6">
            設計產出 | 買家前台
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<OpenInNewIcon />}
            onClick={() =>
              window.open(
                "https://www.figma.com/proto/IPG1PAio74VqoPQCP3C6qt/Locarue?node-id=2043-3510&t=5X7gR5PjBzsRafTx-0&scaling=min-zoom&content-scaling=fixed&page-id=2043%3A3507&starting-point-node-id=2043%3A3510"
              )
            }
          >
            Prototype
          </Button>
        </Stack>

        <Box></Box>
        <Typography fontWeight={600}>前台</Typography>

        <Stack
          component={"img"}
          src={"/asset/locarue_cover.png"}
          borderRadius={2}
        />

        <Typography fontWeight={600}>商品總覽</Typography>
        <Typography>
          賣家在後台新增的商品以及商品類別都可以在商品總覽的頁面中看到，讓買家可以挑選
        </Typography>

        <Typography fontWeight={600}>商品細節</Typography>
        <Typography>
          根據賣家在後台設定的商品介紹，讓買家可以看到商品細節並且自行選擇要購買的數量
        </Typography>

        <Typography fontWeight={600}>購物車</Typography>
        <Typography>商品總覽：顯示買家購買的所有物品以及總計多少錢</Typography>
        <Typography>
          付款方式：買家可以選擇用信用卡、LINEPAY或Apple Pay(Google Pay)付款
        </Typography>
      </Stack>
    </Stack>
  );
};

export default page;
