import { ImageDetails } from './general.types';

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
  instruments: WorkCategoryInstrument[];
  text: string;
}
