export interface Article {
  id: string;
  type: string;
  attributes: {
    title: string;
    body: string;
    authorName: string;
    createdAt: string;
    commentsCount: number;
  };
}

export interface Comment {
  id: string;
  type: string;
  attributes: {
    body: string;
    authorName: string;
    createdAt: string;
    articleId: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  meta: {
    total_pages: number;
    total: number;
    current_page: number;
  };
}
