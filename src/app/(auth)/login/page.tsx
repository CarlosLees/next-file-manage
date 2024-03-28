'use client';

import Image from 'next/image';

import { useFormState } from 'react-dom';

import Link from 'next/link';

import { login } from '@/lib/action';

import styles from './login.module.css';

const LoginPage = () => {
    const [state, loginFormAction] = useFormState(login, undefined);

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <Image
                    className={styles.img}
                    src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
                    alt=""
                    fill
                />
            </div>
            <div className={styles.rightContainer}>
                <h1 className={styles.title}>Welcome to File Manage</h1>
                <p className={styles.desc}>Please sign in to your account</p>
                <form className={styles.form} action={loginFormAction}>
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <button>Login</button>
                </form>
                {state?.error}
                <p className="link">
                    <Link href="/">
                        Not have an account? <b>Register</b>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
