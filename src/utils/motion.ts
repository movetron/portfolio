import { Variants } from 'framer-motion';
import { AnimationGeneratorType } from 'framer-motion';

export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: Number(delay),
      },
    },
  };
};

export const fadeIn = (
  direction: 'left' | 'right' | 'up' | 'down' | '',
  type?: AnimationGeneratorType,
  delay: number = 0,
  duration: number = 0.5,
): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type ?? 'tween',
        delay: Number(delay),
        duration: Number(duration),
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay: number = 0, duration: number = 0.5): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: Number(delay),
        duration: Number(duration),
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: AnimationGeneratorType = 'tween',
  delay: number = 0,
  duration: number = 0.5,
): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: Number(delay),
        duration: Number(duration),
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0,
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: Number(staggerChildren),
        delayChildren: Number(delayChildren) || 0,
      },
    },
  };
};
