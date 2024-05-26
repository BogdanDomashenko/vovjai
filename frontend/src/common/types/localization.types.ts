export interface Language {
  code: string;
  name: string;
}

export interface Translation {
  key: string;
  text: string;
  language: Language;
}
