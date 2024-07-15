
import React from "react";
import './demo.scss'


class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('handleOnclickDelete ', job)
        this.props.deleteAJob(job)

    }
    render() {

        // let name = this.props.name;
        // let age = this.props.age;


        //js chỉ hiểu khi ta đặt tiên biến trùng với tên key
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showjobs = true' : 'showjobs = false';

        return (
            <>
                {showJobs === false ?
                    <div >
                        <button className="bnt-show"
                            onClick={() => this.handleShowHide()}>Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job_lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div >
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }

}
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job_lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 400) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;