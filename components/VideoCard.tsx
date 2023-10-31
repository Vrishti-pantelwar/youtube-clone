import { Video } from "@/types/VideosType";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "@/utils/constants";
import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type Props = { video: Video };
const VideoCard = ({ video }: Props) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358", md: "320px" },
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Link
        href={video.videoId ? `/video/query?id=${video.videoId}` : demoVideoUrl}
      >
        <CardMedia
          component="img"
          image={video?.thumbnail[0]?.url}
          alt={video.title}
          sx={{ width: { xs: "100%", sm: "358", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link href={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: "#FFF" }}
          >
            {video.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          href={video.channelId ? "/channel/video.channelId" : demoChannelUrl}
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            style={{ color: "gray" }}
          >
            {video.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
