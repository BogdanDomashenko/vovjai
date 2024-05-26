import { AxiosError } from 'axios';

export type ResponseEntry<T> = {
  data: T;
  meta: unknown;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type ResponseError = AxiosError<{
  data: null;
  error: {
    message: string;
    status: number;
    name: string;
    details: {
      code?: string;
    };
  };
}>;

export interface PaginationRequest {
  page: number;
  pageSize?: number;
}

export type ResponseRecord<T> = T & { id: number; createdAt: string; updatedAt: string };

export interface ImageDetails {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    small: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path: string | null;
      size: number;
      width: number;
      height: number;
      sizeInBytes: number;
    };
    thumbnail: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path: string | null;
      size: number;
      width: number;
      height: number;
      sizeInBytes: number;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}
