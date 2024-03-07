export type Content = R2Object;

export type ImageListResponseData = {
  success: boolean;
  photos: R2Object[];
};

export type R2Object = {
  customMetadata?: Metadata;
  uploaded: string;
  checksums?: {
    md5: string;
  };
  httpEtag?: string;
  etag: string;
  size: number;
  version?: string;
  key: string;
};

export type Metadata = {
  device_name?: string;
  f_number?: string | number;
  time?: string;
  iso?: string | number;
  focal_length?: string | number;
  shutter_speed?: string | number;
};
