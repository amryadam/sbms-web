export const toEntities = (collection: any[]) => {
  return collection.reduce(
    (prev, next) => ({
      ...prev,
      [next.id]: next,
    }),
    {}
  );
};
export const toCountriesEntities = (collection: any[]) => {
  return collection.reduce(
    (prev, next) => ({
      ...prev,
      [next.ccn3]: next,
    }),
    {}
  );
};
