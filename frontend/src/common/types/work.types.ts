import { ImageDetails, ResponseRecord } from './general.types';

export interface WorkSubcategory {
  name: string;
  workCategory: ResponseRecord<WorkCategory>;
  works: ResponseRecord<Work>[];
}

export interface Work {
  title: string;
  shortDescription: string;
  workCategory: ResponseRecord<WorkCategory>;
  previewImage: ImageDetails;
  worksSubcategory: ResponseRecord<WorkSubcategory>;
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
  image: ImageDetails;
  pageImage: ImageDetails;
  instruments: WorkCategoryInstrument[];
  text: string;
  pageDescription: string;
}
