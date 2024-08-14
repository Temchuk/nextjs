"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Виконайте перевірку логіна і пароля
        if (username === 'admin' && password === 'password') {
            router.push('/'); // Перенаправляємо на головну сторінку після успішного входу
        } else {
            alert('Invalid login credentials');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleLogin} className={styles.form}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
