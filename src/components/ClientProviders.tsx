"use client"; // Додаємо директиву для клієнтського компонента

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { ThemeProvider } from '@/components/ThemeProvider';

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Provider>
    );
}
