"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "next/navigation";
import { fetchFromApi } from "@/utils/fetchFromApi";
import { DisplayVid, RelatedVideo, Video } from "@/types/VideosType";
import Link from "next/link";
import Videos from "@/components/Videos";

const DisplayVideo = () => {
  const [videoDetail, setVideoDetail] = useState<DisplayVid | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const searchParams = useSearchParams();
  const videoId: string | null = searchParams.get("id");
  useEffect(() => {
    fetchFromApi(`video?id=${videoId}`)
      .then((data) => data.json())
      .then((data) => setVideoDetail(data));

    fetchFromApi(`related?id=${videoId}`)
      .then((data) => data.json())
      .then((data) => setVideos(data.data));
  }, [videoId]);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail && videoDetail.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link href={`/channel/query?id=${videoDetail?.channelId}`}>
                <Typography variant="subtitle1" color="#fff">
                  {videoDetail?.channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetail &&
                    parseInt(videoDetail?.viewCount).toLocaleString()}{" "}
                  Views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: "1", xs: "5" }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos data={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default DisplayVideo;
