import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to infoNation </h1>
      <ul>
        {props.countries.map(country => <p>{country.name}</p>)}
      </ul>
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://restcountries.eu/rest/v2/region/europe')
  const data = await res.json()

  return {
    countries: data
  }

}

export default Index;

