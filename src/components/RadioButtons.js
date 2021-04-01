import React, {Component} from 'react';
import UI from './UI';
import UIAPP from './UIAPP';


class RadioButtons extends Component {
  constructor() {
      super();
      this.state = {
        name: ""
      };
      this.onChangeValue = this.onChangeValue.bind(this);
    }
  
    onChangeValue(event) {
        this.setState({name : event.target.value})
    }
    render() {
      return (
        <div onChange={this.onChangeValue} className='radios'>
          <input type="radio" value="App" name="mode" /> app mode<br/>
          <input type="radio" value="Admin" name="mode" /> admin mode

          {this.state.name === 'Admin' && 
      //    <p> heelo</p>
          <UI />
        }
        {this.state.name === 'App' && 
        //    <p> heelo</p>
            <UIAPP />
          }
        </div>
      
      );
    }
  }

export default RadioButtons