import React from 'react';

interface Props {
    children: React.ReactNode
}

export const AppLayout = ({children}: Props) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};
