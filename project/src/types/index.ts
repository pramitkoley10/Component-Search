export interface Component {
  [x: string]: any;
  availability: string;
  id: string;
  name: string;
  category: string;
  model: string;
  image: string;
  price: number
  prices: {
    amazon?: number;
    flipkart?: number;
    mdcomputer?: number;
    vedantcomputer?: number;
  };
  inStock: boolean;
}

export interface ComponentCategory {
  id: string;
  name: string;
  key: string;
}
export type SortField = 'name' | 'model' | 'price';
export type SortDirection = 'asc' | 'desc';