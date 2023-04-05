export interface Category {
  id: string;
  code?: string;
  name?: string;
  parentCategory: Category | null;
}
