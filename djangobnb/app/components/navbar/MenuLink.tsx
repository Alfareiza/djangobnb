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
        <div
            onClick={onClick}
            className={`py-2 mb-2 hover:bg-gray-100 transition ${className}`}>
            <p className="pl-3">
                {label}
            </p>
        </div>
    )
}

export default MenuLink;
