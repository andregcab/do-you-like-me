const delay = (fn: () => void) => {
  setTimeout(() => {
    fn();
  }, 500);
};

export default delay;
