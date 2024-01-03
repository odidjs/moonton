import PropTypes from 'prop-types';
import '../../css/button.css';

export default function Button({
    type = 'submit', variant = "primary", processing, className = '', disabled, children, ...props }) {
    
    Button.propTypes = {
        type: PropTypes.oneOf(["submit", 'button', 'reset']),
        className: PropTypes.string,
        variant: PropTypes.oneOf(['primary', 'danger', 'warning', 'light-outline', 'white-outline']),
        processing: PropTypes.bool,
        children: PropTypes.node
    }
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && "opacity-300"} btn-${variant}` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
