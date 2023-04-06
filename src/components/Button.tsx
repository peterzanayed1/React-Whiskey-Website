
interface ButtonProps{
    children: React.ReactNode
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

export default function Button (  props: ButtonProps ) {
    return (
        <button onClick = {props.onClick} className={props.className}>
            {props.children}
        </button>
    )
}