class Form2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render(){
        return(
            <form id="f2">
            <label for="add1">Address Line 1:</label><br/>
            <input type="text" id="add1" name="add1"/><br/>

            <label for="add2">Address Line 2:</label><br/>
            <input type="text" id="add2" name="add2"/><br/>
            
            <label for="city">City:</label><br/>
            <input type="text" id="city" name="city"/><br/>

            <label for="state">State:</label><br/>
            <input type="text" id="state" name="state"/><br/>

            <label for="zcode">zip code:</label><br/>
            <input type="number" id="zcode" name="zcode" placeholder="zip code"/><br/>

            <label for="phone">Phone number:</label><br/>
            <input type="number" id="phone" name="phone"/><br/>
            </form>
                
        )
    }
}


export default Form2;