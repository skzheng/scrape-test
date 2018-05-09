import React from 'react';
import './Scraper.css';
import axios from 'axios';
import templates from '../../templates';

class Scraper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: '',
      site: '',
      data: ''
    }
    this.getSchedule = this.getSchedule.bind(this);
    this.handleButtons = this.handleButtons.bind(this);
  
  }
  
  getSchedule(){
    let params = {
      params : templates[this.state.site]
    }
  
    axios.get('/scraper', params)
    .then((response) => {
      console.log(response.data.data);
      let res = params.params.parser(response.data.data);
      this.setState({ data : res });
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  handleURL(e){
    this.setState({ url: e.target.value });
  }
  
  handleSelector(e){
    this.setState({ selector : e.target.value });
  }
  
  handleButtons(e){
    // console.log(e.target.innerHTML);
    this.setState({ active : e.target.innerHTML });
    this.setState({ site : e.target.id })
  }
  
  render(){
    return (
      <div className="scraper">
        {/* <input onChange={this.handleURL} placeholder="URL"/>
        <input onChange={this.handleSelector} placeholder="selector"/> */} 
        <div className="row">
          <button id="peri" className="url-button" onClick={this.handleButtons}>PERIDANCE</button>
          <button id="bdc" className="url-button" onClick={this.handleButtons}>BDC</button>
          <button id="expg" className="url-button" onClick={this.handleButtons}>EXPG</button>
        </div>
        <button onClick={this.getSchedule} id="scrape-button">SCRAPE {this.state.active}</button>
        <div id="return">{this.state.data}</div>
      </div>
    )
  }
}

export default Scraper;