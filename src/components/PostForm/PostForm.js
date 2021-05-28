import styles from "./PostForm.module.scss"

function Form() {
    return (
        <>
        <form className={styles.form}>
            <textarea></textarea>
            <button>add new post</button>
        </form>
        </>
    )
}

export default Form
