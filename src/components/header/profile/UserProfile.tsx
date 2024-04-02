import Image from 'next/image';

import styles from './userProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <Image src="/header-message.svg" alt="message" fill className={styles.image} />
            </div>
            <div className={styles.username}>Username</div>

            <div className={styles.dropdown}>
                <Image src="/header-avatar.png" alt="头像" fill />
            </div>
        </div>
    );
};

export default UserProfile;
