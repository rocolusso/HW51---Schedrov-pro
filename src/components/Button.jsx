import classes from "classnames";

const Button = ({state, position, text}) => {

    const btnClassname = classes('btn btn-secondary', position, {'active': state === 'active'})

    return (
<>
        <button type="button" className={btnClassname}>
            {text}
        </button>
</>
)
    ;
};
export default Button;
