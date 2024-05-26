type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const BREAK_POINT: Record<BreakPoint, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const BREAK_POINT_NAMES: Record<BreakPoint, string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
};
