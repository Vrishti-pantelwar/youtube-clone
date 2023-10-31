"use client";
import SideBar from "@/components/SideBar";
import Videos from "@/components/Videos";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Video } from "@/types/VideosType";
import { Channel } from "@/types/ChannelType";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [items, setItems] = useState<(Video | Channel)[]>([]);
  useEffect(() => {
    fetchFromApi(`search?query=${selectedCategory}`)
      .then((data) => data.json())
      .then((data) => setItems(data.data));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Vrishti GG
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos data={items} />
      </Box>
    </Stack>
  );
}
