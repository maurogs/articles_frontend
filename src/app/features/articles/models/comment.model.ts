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
