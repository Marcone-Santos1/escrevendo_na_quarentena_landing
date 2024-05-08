import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    children: string,
    onClick?: () => void,
    className?: string,
    disabled?: boolean
}

const Button = ({ children, onClick, className, disabled }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={twMerge('bg-gray-500 text-gray-50 w-24', className)}
            disabled={disabled}
        >
            { children }
        </button>
    )
}

export default Button;