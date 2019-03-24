import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Countries from '../components/Countries';
const countries = [
  {
    name: 'Country1',
    flag: '../static/m1.jpg',
    capital: 'lorim',
    region: 'lorim',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim',
  },
  {
    name: 'Country2',
    flag: '../static/m2.jpg',
    capital: 'lorim',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim ipsum'
  },
  {
    name: 'Country3',
    flag: '../static/m3.jpg',
    capital: 'ipsum',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'ipsum lorim'
  },
  {
    name: 'Country4',
    flag: '../static/m4.jpg',
    capital: 'lorim',
    region: 'lorim',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim'
  },
  {
    name: 'Country5',
    flag: '../static/m5.jpg',
    capital: 'lorim',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim ipsum'
  },
  {
    name: 'Country6',
    flag: '../static/m6.jpg',
    capital: 'ipsum',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'ipsum lorim'
  },
  {
    name: 'Country7',
    flag: '../static/m7.jpg',
    capital: 'lorim',
    region: 'lorim',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim'
  },
  {
    name: 'Country8',
    flag: '../static/m8.jpg',
    capital: 'lorim',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim ipsum'
  },
  {
    name: 'Country3',
    flag: '../static/m3.jpg',
    capital: 'ipsum',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'ipsum lorim'
  },
  {
    name: 'Country1',
    flag: '../static/m1.jpg',
    capital: 'lorim',
    region: 'lorim',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim'
  },
  {
    name: 'Country2',
    flag: '../static/m2.jpg',
    capital: 'lorim',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim ipsum'
  },
  {
    name: 'Country3',
    flag: '../static/m3.jpg',
    capital: 'ipsum',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'ipsum lorim'
  },
  {
    name: 'Country4',
    flag: '../static/m4.jpg',
    capital: 'lorim',
    region: 'lorim',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim'
  },
  {
    name: 'Country5',
    flag: '../static/m5.jpg',
    capital: 'lorim',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim ipsum'
  },
  {
    name: 'Country6',
    flag: '../static/m6.jpg',
    capital: 'ipsum',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'ipsum lorim'
  },
  {
    name: 'Country7',
    flag: '../static/m7.jpg',
    capital: 'lorim',
    region: 'lorim',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim'
  },
  {
    name: 'Country8',
    flag: '../static/m8.jpg',
    capital: 'lorim',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'lorim ipsum'
  },
  {
    name: 'Country3',
    flag: '../static/m3.jpg',
    capital: 'ipsum',
    region: 'Africa',
    languages: 'English',
    callingCodes: '234',
    population: 230000,
    currencies: 'ipsum lorim'
  },

]
const Index = (props) => (
  <Layout>
    <div className="title">
      <h1>Welcome to infoNation </h1>
      <p>Find information about countries of the world</p>
    </div>
    <div className="cover">
      {
        props.countries.map(country =>
          <Countries
            key={Math.random()}
            name={country.name}
            region={country.region}
            subregion={country.subregion}
            flag={country.flag}
            callingCodes={country.callingCodes[0]}
            capital={country.capital}
            population={country.population}
            currenciesName={country.currencies[0].name}
            currenciesCode={country.currencies[0].code}
            currenciesSymbol={country.currencies[0].symbol}
            language={country.languages[0].name}
            population={country.population}
          />
        )
      }
    </div>
    <style jsx>{`
    .title {
      text-align: center;
      background: #e1e1e1;
      padding: 50px;
    }
      .cover {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      `}</style>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://restcountries.eu/rest/v2/region/africa')
  const data = await res.json()

  return {
    countries: data
  }

}

export default Index;

