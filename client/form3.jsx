class Form3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render(){
        return(

        <form id="f3">
            <label for="card#">credit card #:</label><br/>
            <input type="number" id="card#" name="card#"/><br/>
        
            <label for="exp">Expiry date:</label><br/>
            <input type="date" id="exp" name="exp"/><br/>
        
            <label for="ccv">Card Verification Value:</label><br/>
            <input type="number" id="ccv" name="ccv"/><br/>
        
            <label for="Bzip">Billing zip code:</label><br/>
            <input type="number" id="Bzip" name="Bzip"/><br/>
        </form>  

        )
    }
}


export default Form3;