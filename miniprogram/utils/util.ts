export const getData = (list: any) => {
  return list.map((i: any) => {
    return {
      id: i.id,
      name: i.name,
      score: i.score.num,
      movieImage: i.movieImage,
      title: i.title,
    };
  });
};
