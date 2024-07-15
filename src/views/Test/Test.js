import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


class Test extends React.Component {
    state = {
        
        arrJobs: [
            { id: 'abc1', title: 'dev', salary: '500' },
            { id: 'abc2', title: 'test', salary: '400' },
            { id: 'abc3', title: 'ui', salary: '300' }
        ]
    }

    addNewJob = (job) => {
        // console.log('check job from child', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }
    render() {
        console.log('call render', this.state)
        return (
            <>
                <AddComponent 
                    addNewJob = {this.addNewJob}
                />
                
                <ChildComponent
                    
                    arrJobs={this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />


            </>
        )
    }

}
export default Test;