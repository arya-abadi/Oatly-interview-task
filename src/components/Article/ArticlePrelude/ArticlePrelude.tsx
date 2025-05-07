import {ArticlePreludeProps} from "@/types/IArticlePrelude";

export default function ArticlePrelude({text}: ArticlePreludeProps) {
    return <p className="text-prelude font-prelude w-[40rem] z-10">{text}</p>;
}
