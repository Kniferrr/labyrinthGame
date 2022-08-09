export const variants = {
    initial: {y: -1000, opacity: 0},
    visible: i => ({y: 0, opacity: 1, transition: { delay: i * 0.2}})
  }