export const navVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      delay: 0.3,
    },
  },
};

export const hamburgerVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.3,
    },
  },
};