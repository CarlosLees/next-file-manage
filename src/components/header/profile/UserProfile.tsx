import Image from 'next/image';

import styles from './userProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.container}>
            <Image src="/header-message.svg" alt="message" width={20} height={20} />
            <div className={styles.username}>Username</div>

            <div className={styles.dropdown}>
                <Image src="/header-avatar.png" alt="头像" width={25} height={25} />
            </div>
        </div>
    );
};

export default UserProfile;
