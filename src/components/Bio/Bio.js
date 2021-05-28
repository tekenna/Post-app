import styles from "./Bio.module.scss"

function Bio({dp, name, description, job}) {
    return (
        <div className="bio_container">
            <div className={styles.bio}>
                <div className={styles.bio_img}>
                    <img src={dp} alt={`profile of ${name}`} />
                </div>
                <div className={styles.boi_profile}>
                        <h1 className={styles.profile_name}>@{name}</h1>
                        <p className={styles.profile_cont}>{description}</p>
                        <p className={styles.profile_job}><i>{job}</i></p>
                </div>
            </div>
        </div>
    )
}

export default Bio
