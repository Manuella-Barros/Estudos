import * as Style from './ButtonStyle.styles'

interface ButtonProps {
    children: React.ReactNode,
    onClick?: ()=> void,
}

function Button({children, ...props}: ButtonProps) {
    return (
        <div>
            <Style.Button  {...props} type="submit">{children}</Style.Button>
        </div>
    );
}

export default Button;