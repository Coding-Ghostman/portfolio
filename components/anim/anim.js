export const slideUp = {
  initial: (i) => ({
    y: i % 2 == 0 ? 220 : -220,
    fontWeight: 100,
  }),
  enter: (i) => ({
    y: 0,
    fontWeight: 700,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 4 + 0.05 * i,

      fontWeight: {
        duration: 0.8,
        delay: 4.42,
      },
    },
  }),
};

export const descSlideUp = {
  initial: (i) => ({
    y: 40,
    fontWeight: 100,
  }),
  enter: (i) => ({
    y: 0,
    fontWeight: 400,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
      delay: 4 + 0.02 * i,

      fontWeight: {
        duration: 0.6,
        delay: 4.3,
      },
    },
  }),
};

export const opacity = {
  initial: {
    opacity: 0,
    fontWeight: 200,
  },
  enter: {
    opacity: 1,
    fontWeight: 800,
    transition: {
      duration: 0.9,
      delay: 0.2,
      fontWeight: {
        duration: 1,
        delay: 0.5,
      },
    },
  },
  exit: {
    opacity: 0,
    fontWeight: 200,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};


const curve = {
  duration: 0.8,
  ease: [0.76, 0, 0.24, 1],
};

export const menuSlide = {
  initial: {
    x: -120,
    fontWeight: 100,
    transition: { ...curve, delay: 0.4 },
  },
  hovering: {
    fontWeight: 200,
    transition: {
      ...curve,
      duration: 0.13,
      delay: 0,
    },
  },
  enter: (i) => ({
    x: 0,
    fontWeight: 700,
    transition: {
      ...curve,
      fontWeight: {
        delay: 0.2,
        duration: 0.2,
      },
      delay: 4.5 + 0.14 * i,
    },
  }),
};
