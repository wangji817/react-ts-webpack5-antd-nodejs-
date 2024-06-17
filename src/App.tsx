import React from 'react'
import './App.scss';
import Title from '@/plugins/Title';
import Footer from '@/plugins/Footer';
import Lister from '@/plugins/Lister';

export default function App() {
  return (
    <>
      <Title title="react typescript webpack header" />
      <Lister />
      <Footer title="react typescript webpack footer" />
    </>
  )
}