import React from "react";
import {connect} from 'react-redux'
import Proptypes from 'prop-types'
import {fetchTopic, updateTopic} from "../../actions/topicAction"
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import { toast } from 'react-toastify';
class UpdateTopic extends React.Component{
    constructor(props){
        super(props)
        //this.fileInput= React.createRef()
        this.state={
            id:"",
            course:"",
            topicTitle:"", 
            description:"", 
            filename:"", 
            topicDuration:"", 
            date:""
        }
        
    }

    onFileChange = (e) => {
       
        this.setState({ file: e.target.files[0] })
        this.setState({ filename: e.target.files[0].name })
        
        const data = new FormData();
        data.append('file', e.target.files[0]);
        
        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                //onSuccess(response.data)
                
            })
            .catch((e) => {
                toast.error('Upload Error')
                
            })
        // console.log("creat topic action", topic)
    }
    //data will poppulate table
    componentWillReceiveProps(NextProps){
        
        const {id, course, topicTitle, description, filename, topicDuration, date}=NextProps.topic
        this.setState({
            id, course, topicTitle, description, topicDuration, date, filename
        })
        
        // this.fileInput=filename
    }
    componentDidMount(){
        const {id} = this.props.match.params
        this.props.fetchTopic(id)
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }   
    // handlefileChange = (e) => {
    //     this.setState({filename:e.target.value})
    // }
    handleSubmit = (e) => {
        e.preventDefault();
        const updatedTopic={
            id:this.state.id,
            course:this.state.course,
            topicTitle:this.state.topicTitle, 
            description:this.state.description, 
            filename:this.state.filename, 
            topicDuration:this.state.topicDuration, 
            date:this.state.date
        }
     
        this.props.updateTopic(updatedTopic, this.props.history)
    }
    
    render(){

        let arr = this.props.courses.map((item) => item.courseTitle)
        let unique = [...new Set(arr)];
        return(
            <div>
                <Navbar />
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">

                            <h1 className="text-white mb-4"></h1>

                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>

                                        <div className="row align-items-center pt-4 pb-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Course Name</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                            <select required
                                                    className="col-md-4 pe-5"
                                                    name="course"
                                                    value={this.state.course}
                                                    onChange={this.onChange}
                                                >
                                                    <option value="">Select Course</option>
                                                    {
                                                        unique.map((item) => {
                                                            return <option>{item}</option>
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>

                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0" >Id</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="text" 
                                                className="form-control form-control-lg" 
                                                placeholder="id" 
                                                name="id"
                                                value={this.state.id} //onChange={this.handleChange}
                                                required />
                                            </div>
                                        </div>

                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0" >Topic Name</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="text" 
                                                className="form-control form-control-lg" 
                                                placeholder="Topic Name" 
                                                name="topicTitle"
                                                value={this.state.topicTitle} onChange={this.handleChange}
                                                required />
                                            </div>
                                        </div>



                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Topic Description</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input 
                                                className="form-control form-control-lg" 
                                                rows="3" 
                                                placeholder="Topic Description"
                                                name="description" value={this.state.description} onChange={this.handleChange}
                                                ></input>
                                            </div>
                                        </div>

                                       
{/* 
                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Video Duration</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input 
                                                className="form-control form-control-lg" 
                                                placeholder="Video Duration"
                                                name="topicDuration" value={this.state.topicDuration} onChange={this.handleChange}
                                                ></input>
                                            </div>
                                        </div> */}

                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0" >Date</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="date" 
                                                className="form-control form-control-lg" 
                                                placeholder="Topic Date" 
                                                name="date" value={this.state.date} onChange={this.handleChange}
                                                required />
                                            </div>
                                        </div>


                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Upload Resources</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input className="form-control form-control-lg" id="formFileLg" type="file"
                                                  name="filename" onChange={this.onFileChange}/>
                                                <div className="small text-muted mt-2">Uploaded File {this.state.filename}</div>
                                            </div>
                                        </div>



                                        <div className="px-5 py-4">
                                            <input type="submit" value="submit" className="btn btn-primary btn-lg" />
                                            <Link to={`/topiclist`}>
                                            <button type="button" className="btn btn-primary btn-lg ms-4" >Cancle</button>
                                             </Link>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

UpdateTopic.propTypes={
    topic: Proptypes.object.isRequired,
    fetchTopic: Proptypes.func.isRequired,
    updateTopic: Proptypes.func.isRequired
}

const mapStateToProps = state => {
    console.log("updateTopic",state.topicReducer.topic)
    return {
        topic: state.topicReducer.topic,
        topics: state.topicReducer.topics,
        courses: state.courses.courses
    }
}
  

export default connect(mapStateToProps,{fetchTopic, updateTopic})(UpdateTopic);