import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/anh1.png'
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";



class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         console.log('check timeout')


    //         this.props.history.push('/todo')
    //     }, 3000);
    // }

    handleDeleteUser = (user) =>{
        console.log('check user delete:', user)
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render () {
        console.log('check pros', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
             <div>
                hello world
            </div>

            <div>
                <img style={{width: '300px'}} src={logo}/>
            </div>
            <div>
                {
                    listUsers && listUsers.length > 0 && 
                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} 
                               &nbsp; <span onClick={() => this.handleDeleteUser(item)}>X</span>
                               
                                
                            </div>
                        )
                    })
                }

                <button onClick={() => this.handleCreateUser()}>Add new</button>
            </div>
            </>
           
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'Delete_User', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'Create_user' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));