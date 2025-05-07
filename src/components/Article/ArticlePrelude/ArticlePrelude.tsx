import {ArticlePreludeProps} from "@/types/IArticlePrelude";

export default function ArticlePrelude({text}: ArticlePreludeProps) {
    return <h2 className="text-prelude font-prelude w-[40rem] z-10">{text}</h2>;
}
