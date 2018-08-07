import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index.js'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      term: '',
    };

    //binding onInputChange so this.setState is in the right context
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  };

  //on a callback function like this, this.setState will have the incorrect context
  onInputChange(event){
    this.setState({
      term: event.target.value,
    });
  };

  //this way the form tag wont submit when pressed enter
  onSubmitForm(event){
    event.preventDefault();

    //this is where we will make weather API call
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: '',
    });
  };

  render(){
    return (
      <form onSubmit={this.onSubmitForm} className="input-group">
        <input
          placeholder="Get the five-day forecast in some cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch );
}

export default connect (null, mapDispatchToProps)(SearchBar)
