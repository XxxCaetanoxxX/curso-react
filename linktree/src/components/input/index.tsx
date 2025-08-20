import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
    return (
        <input
            className="bg-white border-o h-9 rounded-md outline-none px-2 mb-3"
            {...props}
        />

    )
}