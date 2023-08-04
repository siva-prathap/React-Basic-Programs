import React  from 'react'
import './count.css'
class Count extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    inc=()=>{
        if(this.state.count<15){
            this.setState((prev)=>({
                count:prev.count+1

            }))
        }
    }
    dec=()=>{
        if(this.state.count>0){
            this.setState((prev)=>({
                count:prev.count-1

            }))
        }
    }
    render(){
        return(
            <div>
                <h1>count{this.state.count}</h1>
                <button className='i' onClick={this.inc}>Increment</button>
                <button className="d"  onClick={this.dec}>Decrement</button>
            </div>
        )
    }
}
export default Count
