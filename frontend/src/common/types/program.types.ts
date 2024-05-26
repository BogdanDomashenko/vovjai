import { ImageDetails } from './general.types';

export interface ProgramSubcategory {
  name: string;
  programCategory: ProgramCategory;
}

export interface ProgramCategory {
  name: string;
  programSubcategories: ProgramSubcategory[];
}

export interface Program {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  programCategory: ProgramCategory;
  programSubcategory: ProgramSubcategory;
  price: number;
  special: boolean;
  image: ImageDetails;
  discount: number;
}
