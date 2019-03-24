import Link from 'next/link';

const Navbar = () => (
  <nav>
    <h2><Link href="/"><a>InfoNation</a></Link></h2>
    <ul className='otherInfos'>
      <li><Link href="/about"><a>About us</a></Link></li>
      <li><Link href="/services"><a>Services</a></Link></li>
    </ul>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #222e50;
        padding-top: 20px;
        padding-bottom: 20px;
        flex-wrap: wrap;
        
      }
      h2 {
        width: 20%;
        color: white;
        padding-left: 6px;
      }
      ul{
        width: 70%;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap
      }
      li {
        list-style: none;
        padding-right: 15px;
      }
      a {
        color: white;
        text-decoration: none
      }

      a:hover {
        color: red;
      }
    `}</style>


  </nav>
);

export default Navbar;







