export const startPositionMenu = {
  hidden: {
    top: ["0%", "0%", "100%"],
    opacity: ["100%", "100%", "100%"],
    width: ["100%", "30%", "30%"],
    //borderRadius: ["0% 0% 0% 0%", "0% 30% 30% 0%", "0% 30% 30% 0%"],
    borderRadius: ["0% 50px 50px 0%", "0% 50px 50px 0%", "0% 50px 50px 0%"],
  },
  visible: {
    top: ["-100%", "0%", "0%"],
    opacity: ["100%", "100%", "100%"],
    width: ["30%", "30%", "100%"],
    //borderRadius: ["0% 25% 25% 0%", "0% 30% 30% 0%", "0% 0% 0% 0%"],
    borderRadius: ["0 50px 50px 0", "0 50px 50px 0", "0 50px 50px 0 "],
  },
};

export const menuItemBehavior = {
  hide: {
    x: [0, -768],
  },
  show: {
    x: [-768, 0],
  },
};

export const iconVariants = {
  rotateIcon: {
    rotate: [0, 360],
  },
  norotateIcon: {
    rotate: [-0, -360],
  },
};
