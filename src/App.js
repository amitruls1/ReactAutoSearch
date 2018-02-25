import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
{/* This is your data set in which search text will be searched. */}
var dataSet = ['react', 'js', 'is', 'very', 'good', 'light', 'weight', 'front', 'end', 'javascript', 'framework', 'by', 'facebook'];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText:'',
      result:[],
    },
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }
   // This is the function which will handle whatever you type and then match it with each of your data string.
   // If it is matched then it will push that string into an array and then state will change. 
  handleSearchInput(e){
    console.log(e.target.value);
    let text = e.target.value;
    let result = [];
    this.setState({searchText:text},
      ()=>{
        for (var i = 0; i <dataSet.length; i++) {
          if(this.state.searchText !=''){
            if(dataSet[i].indexOf(this.state.searchText)>-1){
              console.log(dataSet[i].indexOf(this.state.searchText));
              result.push(dataSet[i]);
            }
          }
          else{
            console.log('enter here');
            this.setState({result:[]})
          }
        this.setState({result:result})
        }
      })
  }

  render(){
      return (
        <div className="App">
          <div className="jumbotron">
            <h1 className="display-4">Hey Gang!</h1>
            <p className="lead">This is a simple REACTJS based auto search .</p>
            <hr className="my-4" />
            <div className="row">
              <div className="col" />
              <div className="col">
                {/* This is input box where you type the text for the search. */}
                <input type="text" value={this.state.searchText} onChange={this.handleSearchInput} className="form-control" placeholder="Enter Text For Search (Search result are react js is very good light weight front end javascript framework by facebook.)"/>
                {/* This is the area in which search result will appear.  */}
                <ul className="result-list">
                  {
                    this.state.result.map((item,index)=>{
                      return(
                          <li key={index}> {item} </li>
                        );
                    })
                  }
                </ul>
              </div>
              <div className="col" />
            </div>
          </div>
        </div>
      );
    }
}

export default App;
