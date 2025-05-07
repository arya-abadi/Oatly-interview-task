interface ArticleData {
    title: string;
    author: string;
    category: string;
    publishedAt: string;
    prelude: string;
    paragraphs: string[];
}

export interface ArticleProps {
    articleData: ArticleData;
}