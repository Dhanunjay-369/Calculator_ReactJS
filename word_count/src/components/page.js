import './page.css';
import {Component} from 'react';
export class WordCount extends Component{
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    handleChange=(event)=>{
        const sentence=event.target.value;
        if(sentence==="")
        {
            this.setState({
                count:0
            })
        }
        else{
            this.setState({
                count:sentence.split(" ").length,
            })
        }
    }
    render()
    {
        return(
            <center>
                <div>
                    <h1>Responsive Paragraph Word Counter</h1>
                    <textarea rows="6" cols="50" placeholder='Enter the Text here' onChange={this.handleChange}></textarea>
                    <p>Word Count:{this.state.count}</p>
                </div>
            </center>
        );
    }
    
}