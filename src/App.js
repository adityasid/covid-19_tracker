import React, {Component} from 'react'; 
import { Cards, CountryPicker, Chart } from './components';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GoogleAnalytics from "./components/GoogleAnalytics/GoogleAnalytics";

import covid19 from './images/covid19.png';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {
state = {
  data: {},
  country: '',
}


  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({data: fetchedData, country: country})
  }

  render(){
    const { data, country } = this.state;
    return(
      <div className={styles.container}>
        <GoogleAnalytics />
        <Navbar />
        <img className={styles.covid19} src={covid19} alt='COVID-19'/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        <Footer />
      </div>
    );
  }
}

export default App;