import Navbar from './Navbar';
import Head from 'next/head';
const Layout = (props) => (
  <div>
    <Head>
      <title>InfoNation</title>
      <link rel="stylesheet" href="bootstrap.com/....." />
    </Head>
    <Navbar />
    {props.children}
    <style jsx global>{`
      *{
        margin:0;
        padding: 0;
        font-family: Helvetica;
    }
    `}</style>
  </div>
);

export default Layout;