export const removeProprieties = (object: any | null, keys: string[]) =>
  keys.reduce((o, k) => {
    const { [k]: removed, ...p } = o;
    return p;
  }, object);
