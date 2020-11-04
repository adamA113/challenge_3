class Form3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render(){
        return(

        <form id="f3">
            <label htmlFor="card#">credit card #:</label><br/>
            <input type="number" id="card#" name="card#"/><br/>
        
            <label htmlFor="exp">Expiry date:</label><br/>
            <input type="date" id="exp" name="exp"/><br/>
        
            <label htmlFor="ccv">Card Verification Value:</label><br/>
            <input type="number" id="ccv" name="ccv"/><br/>
        
            <label htmlFor="Bzip">Billing zip code:</label><br/>
            <input type="number" id="Bzip" name="Bzip"/><br/>

            <input type="button" value="Next"/>
        </form>  

        )
    }
}


export default Form3;