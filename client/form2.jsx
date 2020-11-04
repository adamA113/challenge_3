class Form2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render(){
        return(
            <form id="f2">
            <label htmlFor="add1">Address Line 1:</label><br/>
            <input type="text" id="add1" name="add1"/><br/>

            <label htmlFor="add2">Address Line 2:</label><br/>
            <input type="text" id="add2" name="add2"/><br/>
            
            <label htmlFor="city">City:</label><br/>
            <input type="text" id="city" name="city"/><br/>

            <label htmlFor="state">State:</label><br/>
            <input type="text" id="state" name="state"/><br/>

            <label htmlFor="zcode">zip code:</label><br/>
            <input type="number" id="zcode" name="zcode" placeholder="zip code"/><br/>

            <label htmlFor="phone">Phone number:</label><br/>
            <input type="number" id="phone" name="phone"/><br/>

            <input type="button" value="Next"/>
            </form>
                
        )
    }
}


export default Form2;