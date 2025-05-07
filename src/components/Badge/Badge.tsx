import {BadgeProps} from '@/types/IBadge';

export default function Badge({children, className = ""}: BadgeProps) {
    return (
        <div className={`border border-black rounded-full py-1 px-4 w-fit uppercase ${className}`}>
            {children}
        </div>
    );
}
