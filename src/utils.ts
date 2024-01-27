export const sortByDatePosts = (elements: Array<any>): Array<any> => {
  if (!elements) return [];

  return elements
    .sort((a, b) => {
      return new Date(a.data.date).getTime() - new Date(b.data.date).getTime();
    })
    .reverse();
};
