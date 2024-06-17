import React from 'react';
import './index.scss';
const { useEffect, useState } = React;

interface FooterProps {
    title: String
}

export default function Footer(props: FooterProps) {
    const { title = "" } = props;
    return <div className='Footer'>{title}</div>
}