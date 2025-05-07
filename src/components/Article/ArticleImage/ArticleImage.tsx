import Image from "next/image";
import {ArticleImageProps} from '@/types/IArticleImage';

export default function ArticleImage({src, alt}: ArticleImageProps) {
    return (
        <figure className="col-span-2 relative rounded shadow min-h-[300px]">
            <Image
                src={src}
                alt={alt ?? "Article Image"}
                fill
                priority
                className="object-cover rounded"
            />
        </figure>
    );
}
