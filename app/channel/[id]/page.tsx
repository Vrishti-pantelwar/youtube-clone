"use client";
import ChannelCard from "@/components/ChannelCard";
import Videos from "@/components/Videos";
import { Meta } from "@/types/ChannelType";
import { Video } from "@/types/VideosType";
import { fetchFromApi } from "@/utils/fetchFromApi";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";

const DisplayChannel = () => {
  const searchParams = useSearchParams();

  const channelId: string | null = searchParams.get("id");
  const [meta, setMeta] = useState<Meta>();
  const [videos, setVideos] = useState<Video[]>([]);
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    fetchFromApi(`channel?id=${channelId}`)
      .then((data) => data.json())
      .then((data) => {
        setVideos(data.data);
        return setMeta(data.meta);
      })
      .catch((error) => console.log(error));
  }, [channelId]);

  useEffect(() => {
    setTitle(meta?.title ?? "");
  }, [meta]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(252,70,107,1) 0%, rgba(63,94,251,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        />
        {meta && (
          <ChannelCard
            channelDetail={{
              channelId: channelId,
              ...meta,
              type: "channel",
              videoCount: null,
            }}
            marginTop={-15}
          />
        )}
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos
          data={videos.map((vid) => {
            return { ...vid, type: "video", channelTitle: title };
          })}
        />
      </Box>
    </Box>
  );
};

export default DisplayChannel;
