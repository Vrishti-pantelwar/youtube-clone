export type Video = {
  type: "video";
  videoId: string;
  title: string;
  channelTitle: string;
  channelId: string;
  description: string;
  viewCount: string;
  publishedText: string;
  lengthText: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
  richThumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
  channelThumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
};

export type DisplayVid = {
  id: string;
  title: string;
  lengthSeconds: string;
  keywords: string[];
  channelTitle: string;
  channelId: string;
  description: string;
  thumbnail: { url: string; width: number; height: number };
  allowRatings: boolean;
  viewCount: string;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  isLiveContent: boolean;
  isCrawlable: boolean;
  isFamilySafe: boolean;
  availableCountries: string[];
};

export type RelatedVideo = {
  type: string;
  videoId: string;
  title: string;
  lengthText: string;
  viewCount: string;
  publishedTimeText: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
  channelTitle: string;
  channelId: string;
  authorThumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
};
