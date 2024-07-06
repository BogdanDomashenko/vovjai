import { MediaDetails, ResponseRecord } from './general.types';

export interface WorkSubcategory {
  name: string;
  workCategory: ResponseRecord<WorkCategory>;
  works: ResponseRecord<Work>[];
  description: string;
}

export interface Work {
  title: string;
  shortDescription: string;
  workCategory: ResponseRecord<WorkCategory>;
  previewImage: MediaDetails;
  images: MediaDetails[] | null;
  worksSubcategory: ResponseRecord<WorkSubcategory>;
  longDescription: string;
  videos: string[] | null;
  date: string;
  media: MediaDetails[];
}

export type WorkCategoryInstrument =
  | 'PHOTOSHOP'
  | 'CLIP_STUDIO'
  | 'AFTER_EFFECTS'
  | 'ILUSTRATOR'
  | 'FIGMA';

export interface WorkCategory {
  name: string;
  type: 'main' | 'other';
  image: MediaDetails;
  pageImage: MediaDetails;
  instruments: WorkCategoryInstrument[];
  text: string;
  pageDescription: string;
  footerBg: MediaDetails;
  mobileImage?: MediaDetails;
  bgImage?: MediaDetails;
}
