import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

class Test extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

   handleChangerFirstName = (event) =>{
    this.setState({
        firstName: event.target.value
    })
   }
   handleChangeLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
   }
   handleSubmit = (event) => {
    event.preventDefault()
    console.log('check data input', this.state)
   }
    render() {
        console.log('call render', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name </label>
                    <input type="text" value={this.state.firstName} 
                        onChange={(event) => this.handleChangerFirstName(event)}
                    ></input> <br/>
                    <label htmlFor="lname">Last name </label>
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br/>
                    <input type="submit" onClick={(event) => this.handleSubmit(event)}/>
                </form>
            </>
        )
    }

}
export default Test;