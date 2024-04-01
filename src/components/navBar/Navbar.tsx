import Image from 'next/image';

import { auth } from '@/lib/auth';
import { ProjectSession } from '@/lib/auth.config';

import Links from '@/components/navBar/links/Links';

import styles from './navber.module.css';

const Navbar = async () => {
    const session = (await auth()) as ProjectSession;

    return (
        <>
            {session && (
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Image
                            className={styles.logoImage}
                            src="https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_1280.png"
                            alt="avatar"
                            fill
                        />
                    </div>
                    <div className={styles.items}>
                        <Links session={session} />
                    </div>
                    <div className={styles.exit}>
                        <Image className={styles.exitImage} src="/exit.png" alt="exit" fill />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
