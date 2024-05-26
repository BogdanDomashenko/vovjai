import { WorkCategoryInstrument } from '../types/work.types';
import photoshop from '../../assets/icons/photoshop.png';
import clipStudio from '../../assets/icons/clip.png';
import afterEffects from '../../assets/icons/after-effects.png';
import ilustrator from '../../assets/icons/ai.png';
import figma from '../../assets/icons/figma.png';

export const WORK_CATEGORY_INSTUMENT_ICON: Record<WorkCategoryInstrument, string> = {
  PHOTOSHOP: photoshop,
  CLIP_STUDIO: clipStudio,
  AFTER_EFFECTS: afterEffects,
  ILUSTRATOR: ilustrator,
  FIGMA: figma,
};
