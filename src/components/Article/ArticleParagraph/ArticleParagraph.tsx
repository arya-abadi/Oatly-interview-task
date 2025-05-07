import { ArticleParagraphProps } from '@/types/IArticleParagraphProps';

export default function ArticleParagraph({ text }: ArticleParagraphProps) {
    return <p className="bg-gray-100 p-4 rounded shadow">{text}</p>;
}
