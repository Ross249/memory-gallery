export type Content = R2Object;

export type ImageListResponseData = {
  success: boolean;
  photos: R2Object[];
};

export type R2Object = {
  customMetadata?: any;
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
