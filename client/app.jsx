import Form1 from './form1.js';
import Form2 from './form2.js';
import Form3 from './form3.js';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nextform: 0,
        };
    }
    // handleClick = (e)=> {

    // }

    render(){
        return(  
            <div>
                <h3>Multistep Checkout</h3>
                {/* <input type="button" value="Checkout" onClick={this.handleClick}/> */}
            </div>    
            
            
        )
    }
}

export default App;










