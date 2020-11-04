class Form1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render(){
        return(
            <form id="f1">
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>

                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="email" name="email"/><br/>

                <label htmlFor="lname">Password:</label><br/>
                <input type="password" id="password" name="password"/><br/>

                <input type="button" value="Next"/>
            </form>
            
        )
    }
}

export default Form1;