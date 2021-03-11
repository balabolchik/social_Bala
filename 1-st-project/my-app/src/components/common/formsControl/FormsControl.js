import style from "./FormsControl.module.css";


const FormsControl = (props) => {
    const someError = (props.visited && props.error && !props.pristine)||(props.visited && props.error && !props.active);
    return (
    <div className={`${style.formsControl} ${someError?style.error:""}`}>
        <span>{ someError && props.error}</span>
        {props.children}
    </div>
    )
}

export const Textarea = ({ input, meta , ...props}) => {
    return <FormsControl {...meta} ><textarea {...input} {...props} /></FormsControl>
}

export const Input = ({ input, meta , ...props}) => {
    return <FormsControl {...meta} ><input {...input} {...props} /></FormsControl>
}