export interface ApiResponse<T> {
  data: T;
  meta: {
    total_pages: number;
    total: number;
    current_page: number;
  };
}
