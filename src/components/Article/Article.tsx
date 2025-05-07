"use client";
import nordicSeedImage from "../../assets/images/NordGen.webp";
import ArticleHeader from "@/components/Article/ArticleHeader/ArticleHeader";
import ArticlePrelude from "@/components/Article/ArticlePrelude/ArticlePrelude";
import ArticleParagraph from "@/components/Article/ArticleParagraph/ArticleParagraph";
import {ArticleProps} from "@/types/IArticle";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import Image from "next/image";

export default function Article({articleData}: ArticleProps) {
    const {isDesktop} = useBreakpoint();

    return isDesktop ? (<article className="grid grid-cols-3 gap-10">
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
            <figure className="col-span-2 relative rounded shadow min-h-[300px]">
                <Image
                    src={nordicSeedImage}
                    alt="Seed Vault"
                    fill
                    priority
                    className="object-cover rounded"
                />
            </figure>
            {articleData.paragraphs.slice(2).map((text, idx) => (
                <ArticleParagraph key={idx + 2} text={text}/>
            ))}

        </article>) :
        (<article className="flex flex-col gap-8 px-4">
            <ArticleHeader
                title={articleData.title}
                author={articleData.author}
                category={articleData.category}
                date={articleData.publishedAt}
            />
            <figure className="col-span-2 relative rounded shadow min-h-[300px]">
                <Image
                    src={nordicSeedImage}
                    alt="Seed Vault"
                    fill
                    priority
                    className="object-cover rounded"
                />
            </figure>
            <ArticlePrelude text={articleData.prelude}/>
            {articleData.paragraphs.map((text, idx) => (
                <ArticleParagraph key={idx} text={text}/>
            ))}
        </article>)
}
