import PropTypes from "prop-types";
import { twMerge } from 'tailwind-merge'

const Button = ({ children, onClick, className, disabled }) => {
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

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;