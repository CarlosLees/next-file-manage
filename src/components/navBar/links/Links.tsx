import { ProjectSession } from '@/lib/auth.config';

import styles from './links.module.css';
import NavLink from './navLink/NavLink';

const Links = ({ session }: { session: ProjectSession | null }) => {
    const links = [
        {
            title: 'home',
            path: '/',
            image: '/item.png',
        },
        {
            title: 'add',
            path: '/add',
            image: '/add.png',
        },
        {
            title: 'save',
            path: '/save',
            image: '/save.png',
        },
        {
            title: 'userAdd',
            path: '/userAdd',
            image: '/userAdd.png',
        },
        {
            title: 'deleted',
            path: '/deleted',
            image: '/deleted.png',
        },
    ];

    return (
        <div className={styles.links}>
            {links.map((link) => {
                return <NavLink item={link} key={link.title} />;
            })}
        </div>
    );
};

export default Links;
