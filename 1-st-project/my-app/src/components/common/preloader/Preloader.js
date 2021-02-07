import style from "./Preloader.module.css";

const Preloader = (props) => {
    return (
    <div className={style.preloader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    )
}

export default Preloader;