"use client";
import Videos from "@/components/Videos";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Video } from "@/types/VideosType";
import { Channel } from "@/types/ChannelType";
import { useSearchParams } from "next/navigation";
import { fetchFromApi } from "@/utils/fetchFromApi";

export default function SearchFeed() {
  const searchParams = useSearchParams();

  const searchTerm: string | null = searchParams.get("search");

  const [items, setItems] = useState<(Video | Channel)[]>([]);
  useEffect(() => {
    fetchFromApi(`search?query=${searchTerm}`)
      .then((data) => data.json())
      .then((data) => setItems(data.data));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm} Videos</span>
      </Typography>
      <Videos data={items} />
    </Box>
  );
}
