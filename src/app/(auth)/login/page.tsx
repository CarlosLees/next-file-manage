'use client';

import { useFormState } from 'react-dom';

import { login, logout } from '@/lib/action';

import styles from './login.module.css';

const LoginPage = () => {
    const [state, formAction] = useFormState(login, undefined);
    const [, logoutAction] = useFormState(logout, undefined);

    return (
        <div className={styles.container}>
            <form action={formAction}>
                <input type="text" name="username" />
                <button>Add</button>
                {state?.error}
            </form>
            <form action={logoutAction}>
                <button>logout</button>
                {state?.error}
            </form>
        </div>
    );
};

export default LoginPage;
