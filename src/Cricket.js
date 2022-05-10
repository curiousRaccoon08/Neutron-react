import React, {Component} from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import CricketChild from './CricketChild';

class Cricket extends Component {
    constructor() {
        super();
        this.state = {
            count :0
        }
    }
    increment = () => {
        console.log('inside increment function...');

        console.log(this.state.count);
        this.setState({
            count : this.state.count + 1
        })
        console.log(this.state.count);

        console.log('increment function over..');
    }
    render() {
        let name = 'abcdef'
        return(
            <>
                 <div>
                     I am at NS.
                 </div>
                 <div>
                     abcd
                 </div>
                 <br></br>
                 <div>
                     Count - {this.state.count}
                     <br></br>
                     <button onClick= {this.increment}>Increase</button>
                 </div>
                 <br></br>
                 <CricketChild count_temp={this.state.count} name_temp = {name} location_temp = "GGN" />
            </>
        )
    }
}

export default Cricket;