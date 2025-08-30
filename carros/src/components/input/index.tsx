import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
    type: string,
    placeholder: string,
    name: string,
    register: UseFormRegister<any>,
    error?: string,
    rules?: RegisterOptions;
}

export function Input({ name, placeholder, type, register, rules, error }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            <input
                className={`w-full border-2 rounded-md h-11 px-2 focus:outline-none 
                    ${error ? "border-red-500" : "border-zinc-300"}`}
                placeholder={placeholder}
                type={type}
                {...register(name, rules)}
                id={name}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
