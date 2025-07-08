import Badge from "@/components/Badge/Badge";
import { ArticleHeaderProps } from '@/types/IArticleHeader';

export default function ArticleHeader({ title, author, category, date }: ArticleHeaderProps) {
    return (
        <>
            <h1 className="text-heading-mobile lg:text-heading-tablet 2xl:text-heading font-heading font-medium tracking-tighter z-10 uppercase 2xl:w-[96rem] lg:w-[64rem] lg:mt-24">
                {title}
            </h1>
            <section className="flex items-center gap-2">
                <Badge variant="dark">By {author} · {category}</Badge>
                <Badge>{date}</Badge>
            </section>
        </>
    );
}
