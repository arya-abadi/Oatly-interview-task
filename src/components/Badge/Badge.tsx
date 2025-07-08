import {BadgeProps} from '@/types/IBadge';

export default function Badge({children, className = "", size = "medium", variant = "light", onClick}: BadgeProps) {
    return (
        <div
            onClick={onClick}
            className={`text-paragraph-mobile border rounded-full px-2 cursor-pointer 
            ${size === "small" ? "lg:px-2" : size === "medium" ? "lg:px-4" : "lg:px-8"}
            ${variant === "light" ? "border-black" : "border-white bg-black text-white"}  
            w-fit uppercase whitespace-nowrap ${className}`}>
            {children}
        </div>
    );
}
