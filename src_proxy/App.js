import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentData = () => {
    axios.get('api1/students').then(
      (response) => {console.log('response.data :>> ', response.data);},
      (error) => {console.log('error :>> ', error);}
    )
  }
  getCarData = () => {
    axios.get('api2/cars').then(
      (response) => {console.log('response.data :>> ', response.data);},
      (error) => {console.log('error :>> ', error);}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>students</button>
        <button onClick={this.getCarData}>cars</button>
      </div>
    )
  }
}
