export interface Processor {
  id: string;
  name: string;
  model: string;
  prices: number;
  availability: string;
  
}
export interface ComponentCategory {
  id: string;
  name: string;
  key: string;
}

// export type SortField = 'name' | 'model' | 'price';
// export type SortDirection = 'asc' | 'desc';