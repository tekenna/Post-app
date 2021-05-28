import styles from "./Post.module.scss"
import {FaHeart, FaShareAlt} from "react-icons/fa"

function Post({content, date}) {
    return (
        <div className={styles.post}>
            <p>{content}</p>
            <div className={styles.low_body}>
                <div className={styles.post_icons}>
                    <FaHeart color="purple" /><span>34</span>
                    <FaShareAlt color="purple" /><span>share</span>
                </div>
                <p className={styles.date}>{date}</p>
            </div>
        </div>
    )
}

export default Post
