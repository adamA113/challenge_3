class Form1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render(){
        return(
            <form id="f1">
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>

                <label for="email">Email:</label><br/>
                <input type="email" id="email" name="email"/><br/>

                <label for="lname">Password:</label><br/>
                <input type="password" id="password" name="password"/><br/>
            </form>
            
        )
    }
}

export default Form1;