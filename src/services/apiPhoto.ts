/* eslint-disable prettier/prettier */

interface IUrlsPhoto {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface ILinksPhoto {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface ILinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface IProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface ISocial {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: string;
}

interface ISponsorshipPhoto {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: IUser;
}

interface IUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: ILinks;
  profile_image: IProfileImage;
  instagram_username: string | null;
  total_collections: string | null;
  total_likes: string;
  total_photos: string;
  accepted_tos: boolean;
  for_hire: boolean;
  social: ISocial;
}

interface IPhotoAPI {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  urls: IUrlsPhoto;
  links: ILinksPhoto;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: ISponsorshipPhoto;
  topic_submissions: any;
  user: IUser;
}
export type {IPhotoAPI};
