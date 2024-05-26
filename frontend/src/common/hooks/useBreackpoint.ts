import { useState, useEffect } from 'react';
import { useWindowSize } from './useWindowSize';
import { BREAK_POINT_NAMES } from '../constants/breakpoint.constants';
import { Breakpoint } from '../types/breakpoint.types';

const breakpoints = [
  { size: 640, name: BREAK_POINT_NAMES.xs },
  { size: 768, name: BREAK_POINT_NAMES.sm },
  { size: 1024, name: BREAK_POINT_NAMES.md },
  { size: 1280, name: BREAK_POINT_NAMES.lg },
  { size: 1536, name: BREAK_POINT_NAMES.xl },
  { size: Infinity, name: BREAK_POINT_NAMES['2xl'] },
];

export const useBreakpoint = () => {
  const { width } = useWindowSize();

  const [breakpoint, setBreakpoint] = useState(() => {
    return breakpoints.find((bp) => width < bp.size)?.name;
  });

  useEffect(() => {
    setBreakpoint(breakpoints.find((bp) => width < bp.size)?.name);
  }, [width]);

  const isBreakpointHigherThan = (compareWith: Breakpoint) => {
    const currentBreakpointIndex = breakpoints.findIndex((bp) => bp.name === breakpoint);
    const compareWithIndex = breakpoints.findIndex((bp) => bp.name === compareWith);
    return currentBreakpointIndex >= compareWithIndex;
  };

  const isBreakpointLowerThan = (compareWith: Breakpoint) => {
    const currentBreakpointIndex = breakpoints.findIndex((bp) => bp.name === breakpoint);
    const compareWithIndex = breakpoints.findIndex((bp) => bp.name === compareWith);
    return currentBreakpointIndex <= compareWithIndex;
  };

  return { breakpoint, isBreakpointHigherThan, isBreakpointLowerThan };
};
