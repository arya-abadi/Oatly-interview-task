import Badge from "@/components/Badge/Badge";
import { ArticleHeaderProps } from '@/types/IArticleHeader';
import {useSearchParams} from "next/navigation";
import Link from "next/link";

export default function ArticleHeader({ title, author, category, date }: ArticleHeaderProps) {
    const searchParams = useSearchParams();
    const badgeVariant = searchParams.get("variant");
    return (
        <>
            <h1 className="text-heading-mobile lg:text-heading-tablet 2xl:text-heading font-heading font-medium tracking-tighter z-10 uppercase 2xl:w-[96rem] lg:w-[64rem] lg:mt-24">
                {title}
            </h1>
            <Link href="?variant=light">Light Variant</Link>
            <Link href="?variant=dark">Dark Variant</Link>
            <section className="flex items-center gap-2">
                <Badge variant={badgeVariant || "light"}>By {author} · {category}</Badge>
                <Badge variant={badgeVariant || "light"}>{date}</Badge>
            </section>
        </>
    );
}
