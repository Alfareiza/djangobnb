interface MenuLinkProps {
    label: string;
    className?: string;
    onClick?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({
    label,
    className,
    onClick
}) => {
    return (
        <p
            onClick={onClick}
            className={`p-3 hover:bg-gray-100 transition ${className}`}>
            {label}
        </p>
    )
}

export default MenuLink;
