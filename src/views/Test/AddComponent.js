import React from "react";

class AddComponent extends React.Component{
    state = {
        title: '',
        salary: '',
        
    }

    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('missing required params')
            return;
        }
        console.log('check data input', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render () {
        return (
            <div>
                <form>
                    <label htmlFor="fname">job title </label>
                    <input type="text" value={this.state.title}
                        onChange={(event) => this.handleChangetitle(event)}
                    ></input> <br />
                    <label htmlFor="lname">salary </label>
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleChangesalary(event)}
                    /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} />
                    
                </form>
            </div>

        )
    }
}

export default AddComponent;