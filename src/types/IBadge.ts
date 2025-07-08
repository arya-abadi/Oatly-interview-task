import React from "react";

export interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    size?: "small" | "medium" | "large";
    variant?: "dark" | "light";
    onClick?: () => void;
}