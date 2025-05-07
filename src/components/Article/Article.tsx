import nordicSeedImage from "../../../public/assets/images/NordGen.webp";
import ArticleHeader from "@/components/Article/ArticleHeader/ArticleHeader";
import ArticlePrelude from "@/components/Article/ArticlePrelude/ArticlePrelude";
import ArticleParagraph from "@/components/Article/ArticleParagraph/ArticleParagraph";
import ArticleImage from "@/components/Article/ArticleImage/ArticleImage";
import {ArticleProps} from "@/types/IArticle";

export default function Article({ articleData }: ArticleProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-6">
                <ArticleHeader title={articleData.title} author={articleData.author} category={articleData.category} date={articleData.publishedAt}/>
                <ArticlePrelude text={articleData.prelude}/>
                {articleData.paragraphs.slice(0, 2).map((text, idx) => (
                    <ArticleParagraph key={idx} text={text}/>
                ))}
            </div>
            <ArticleImage src={nordicSeedImage} alt={`${articleData.title} image`}/>
            {articleData.paragraphs.slice(2).map((text, idx) => (
                <ArticleParagraph key={idx+2} text={text}/>
            ))}
        </div>
    )
}
