import { ArticleParagraphProps } from '@/types/IArticleParagraphProps';

export default function ArticleParagraph({ text }: ArticleParagraphProps) {
    return <p className="text-paragraph-mobile lg:text-paragraph">{text}</p>;
}
