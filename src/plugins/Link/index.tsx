import React from 'react';
import './index.scss';
const { useEffect, useState } = React;

interface LinkProps {
    url: string,
    children: React.ReactElement | string | null,
    clasName?: string | null,
}

export default function Link(props: LinkProps) {
    const { url = "", children, clasName = "", } = props;
    return <a className={`Link ${clasName}`} href={url} >{children}</a>
}