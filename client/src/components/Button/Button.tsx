import "./Button.css";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    route?: string;
    mode?: "default" | "outline" | "text";
}

const Button: React.FC<ButtonProps> = ({ children, route, mode = "default", ...props }) => {
    const navigate = useNavigate();
    const cssClasses = `btn ${mode}-btn ${mode}-btn:hover`;

    const handleClick = () => {
        if (route) {
            navigate(route);
        }
    }

    return (
        <button className={cssClasses} onClick={handleClick} {...props}>
            {children}
        </button>
    );
}

export default Button;
