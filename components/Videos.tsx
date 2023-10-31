import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { Video } from "@/types/VideosType";
import { Channel } from "@/types/ChannelType";

type Props = {
  data: (Video | Channel)[];
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
};

const Videos = ({ data, direction }: Props) => {
  function isVideo(item: Video | Channel): item is Video {
    return item.type === "video";
  }

  function isChannel(item: Video | Channel): item is Channel {
    return item.type === "channel";
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {data.map((item, idx) => {
        return (
          <Box key={idx}>
            {isVideo(item) && <VideoCard video={item} />}
            {isChannel(item) && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
