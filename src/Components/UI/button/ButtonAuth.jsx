import classes from './ButtonAuth.module.css';
const ButtonAuth = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    )
}
export default ButtonAuth;