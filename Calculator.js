import React, { Component } from 'react'

export class Calculator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         inp:""
      }
    }
    changeinp(chr){
        this.setState({
            inp:this.state.inp+chr
        })
    }
    equal(){
        this.setState({
            inp:eval(this.state.inp)
        })
    }
    clear(){
      this.setState({
      inp:''
    })
    }

  render() {
    return (
      <div>
        <input type='text' value={this.state.inp}/>
        <br></br>
        <button onClick={()=>this.changeinp('1')} >1</button>
        <button onClick={()=>this.changeinp('2')} >2</button>
        <button onClick={()=>this.changeinp('3')} >3</button>
        <button onClick={()=>this.changeinp('+')} >+</button>
        <br></br>
        <button onClick={()=>this.changeinp('4')} >4</button>
        <button onClick={()=>this.changeinp('5')} >5</button>
        <button onClick={()=>this.changeinp('6')} >6</button>
        <button onClick={()=>this.changeinp('-')} >-</button>
        <br></br>
        <button onClick={()=>this.changeinp('7')} >7</button>
        <button onClick={()=>this.changeinp('8')} >8</button>
        <button onClick={()=>this.changeinp('9')} >9</button>
        <button onClick={()=>this.equal()} >=</button>
        <br></br>
        <button onClick={()=>this.changeinp('*')} >*</button>
        <button onClick={()=>this.changeinp('/')} >/</button>
        <button onClick={()=>this.changeinp('%')} >%</button>
        <button onClick={()=>this.clear()} >C</button>

        

      </div>
    )
  }
}

export default Calculator


