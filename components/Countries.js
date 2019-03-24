import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
const Countries = (props) => (
  <div className="card">
    <p className="title padding"> {props.name} | {props.capital}</p>
    <div className="image">
      <img src={props.flag} alt="" className="image" />
    </div>
    <div className="padding">
      <p className="padding4"><span>Population:</span> {props.population}</p>
      <p className="padding4"><span>region:</span> {props.region}</p>
      <p className="padding4"><span>subregion:</span> {props.subregion}</p>
      <p className="padding4"><span>languages:</span> {props.language}</p>
      <p className="padding4"><span>currencies:</span> {props.currenciesName} |  {props.currenciesCode} |  {props.currenciesSymbol} </p>
      <p className="padding4"><span>Calling Codes:</span> {props.callingCodes}</p>
    </div>
    <style jsx>{`
      .card {
        flex-basis: 18em;
        margin: 18px;
        border: 1px solid #e1e1e1;
        border-radius: 5px
      }
      .image {
        width: 100%
      }
      .title {
        background: #e1e1e1;
      }
      .padding {
        padding: 10px;
      }
      .padding4 {
        padding-top: 4px;
        padding-bottom: 4px
      }
      span {
        font-weight: 550;
        margin-right: 5px
      }
      @media  screen and (min-width: 320px)
      and (max-width: 586px)
       {
        .card {
          flex-basis: 100%;
        }
      }
    `}</style>
  </div>

);

export default Countries;