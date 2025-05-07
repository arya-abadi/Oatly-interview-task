import Badge from "@/components/Badge/Badge";
import {ArticleHeaderProps} from '@/types/IArticleHeader';

export default function ArticleHeader({title, author, category, date}: ArticleHeaderProps) {
    return (
        <>
            <h1 className="text-heading font-heading tracking-tighter z-10 uppercase w-[96rem]">
                {title}
            </h1>
            <div className="flex items-center gap-2">
                <Badge>By {author} · {category}</Badge>
                <Badge>{date}</Badge>
            </div>
        </>
    );
}
