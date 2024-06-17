import React from 'react';
import './index.scss';
const { useEffect, useState } = React;

interface TitleProps {
    title: String
}

export default function Title(props: TitleProps) {
    const { title = "" } = props;
    return <div className='Title'>{title}</div>
}