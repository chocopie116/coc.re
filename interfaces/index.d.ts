interface Work {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  thumbnail: ThumbnailImage;
  body: string;
}

interface ThumbnailImage {
  url: string;
}
interface WorksResponse {
  contents: Work[];
  totalCount: number;
  offset: number;
  limit: number;
}

interface MyWork {
  id: string;
  title: string;
  thumbnail: string;
}
