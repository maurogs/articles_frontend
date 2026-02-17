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
