import {BadgeProps} from '@/types/IBadge';

export default function Badge({children, className = ""}: BadgeProps) {
    return (
        <div
            className={`text-paragraph-mobile border border-black rounded-full px-2 
            lg:px-4 w-fit uppercase whitespace-nowrap ${className}`}>
            {children}
        </div>
    );
}
