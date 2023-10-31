export type Channel = {
  type: "channel";
  channelId: string | null;
  title: string;
  description: string;
  subscriberCount: string | null;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
  videoCount: string | null;
};

export type Meta = {
  title: string;
  description: string;
  thumbnail: { url: string; width: number; height: number }[];
  image: Image;
  subscriberCount: string;
  keywords: string[];
  isFamilySafe: boolean;
  availableCountries: string[];
};

export type Image = {
  banner: Thumbnail[];
  tvBanner: Thumbnail[];
  mobileBanner: Thumbnail[];
};

export type Thumbnail = {};
