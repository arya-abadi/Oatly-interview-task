"use client";
import nordicSeedImage from "../../../public/assets/images/NordGen.webp";
import ArticleHeader from "@/components/Article/ArticleHeader/ArticleHeader";
import ArticlePrelude from "@/components/Article/ArticlePrelude/ArticlePrelude";
import ArticleParagraph from "@/components/Article/ArticleParagraph/ArticleParagraph";
import ArticleImage from "@/components/Article/ArticleImage/ArticleImage";
import {ArticleProps} from "@/types/IArticle";
import {useBreakpoint} from "@/hooks/useBreakpoint";

export default function Article({articleData}: ArticleProps) {
    const {isDesktop} = useBreakpoint();

    if (!isDesktop) {
        return (
            <article className="flex flex-col gap-8 px-4">
                <ArticleHeader
                    title={articleData.title}
                    author={articleData.author}
                    category={articleData.category}
                    date={articleData.publishedAt}
                />
                <ArticleImage
                    src={nordicSeedImage}
                    alt={`${articleData.title} image`}
                />
                <ArticlePrelude text={articleData.prelude}/>
                {articleData.paragraphs.map((text, idx) => (
                    <ArticleParagraph key={idx} text={text}/>
                ))}
            </article>
        );
    }

    return (
        <article className="grid grid-cols-3 gap-10">
            <section className="flex flex-col gap-6">
                <ArticleHeader
                    title={articleData.title}
                    author={articleData.author}
                    category={articleData.category}
                    date={articleData.publishedAt}
                />
                <ArticlePrelude text={articleData.prelude}/>
                {articleData.paragraphs.slice(0, 2).map((text, idx) => (
                    <ArticleParagraph key={idx} text={text}/>
                ))}
            </section>
            <ArticleImage
                src={nordicSeedImage}
                alt={`${articleData.title} image`}
            />

            {articleData.paragraphs.slice(2).map((text, idx) => (
                <ArticleParagraph key={idx + 2} text={text}/>
            ))}

        </article>
    );
}
