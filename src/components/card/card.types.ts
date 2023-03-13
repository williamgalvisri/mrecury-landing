import { MutableRefObject } from "react";

export interface CardProps {
    title: string;
    description: string;
    className?: string;
    icon?: JSX.Element
    id?: string;
}