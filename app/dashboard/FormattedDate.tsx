'use client'

import { useEffect, useState } from 'react';

export function FormattedDate({ date }: { date: string }) {
    const [formatted, setFormatted] = useState('');

    useEffect(() => {
        setFormatted(
            new Date(date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
            })
        );
    }, [date]);

    return (
    <span className="text-xs text-muted-foreground">{formatted}</span>
);
}
