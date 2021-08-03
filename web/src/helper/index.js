export const scrollTo = (ref) => {
  window.scroll({
    top: ref.current.scrollIntoView,
    behavior: "smooth",
  });
};
