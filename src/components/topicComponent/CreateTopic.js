import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types"
import { createTopic } from "../../actions/topicAction"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import { toast } from 'react-toastify';
import {fetchTopics} from '../../actions/topicAction'
class CreateTopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course: "",
            id: 0,
            topicTitle: "",
            description: "",
            topicDuration: "",
            date: "",
            filename: ""
        }
    }
    componentDidMount(){
        this.props.fetchTopics();
        var idlist=this.props.topics.map(item =>{
            return (item.id)
            })
            let maxId= Math.max(...idlist)
            this.setState({ id: maxId+1 })
            console.log(this.props)
            
            
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
       
     
        
    }


    onFileChange = (e) => {
        console.log("nnnnnnnnnnn", e.target.files[0].name)
        this.setState({ file: e.target.files[0] })
        this.setState({ filename: e.target.files[0].name })
       
        const data = new FormData();
        data.append('file', e.target.files[0]);
        
        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                
                
            })
            .catch((e) => {
                toast.error('Upload Error')
                
            })
        
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTopic = {
            course: this.state.course,
            id: this.state.id,
            topicTitle: this.state.topicTitle,
            description: this.state.description,
            topicDuration: this.state.topicDuration,
            date: this.state.date,
            filename: this.state.filename
        }
       
        this.props.createTopic(newTopic, this.props.history)
    }

    render() {
        
        let arr = this.props.courses.map((item) => item.courseTitle)
        let unique = [...new Set(arr)];
        const {name} = this.props.match.params
        console.log(name)
        return (
            <>
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
                                                    <option value={name}>{name}</option>
                                                    {
                                                        unique.map((item) => {
                                                            return <option>{item}</option>
                                                        })
                                                    }

                                                </select>
                                            </div>
                                        </div>


                                        <div className="row align-items-center py-3" style={{display:'none'}}>
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0" >Id</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Id"
                                                    name="id"
                                                    value={this.state.id}
                                                    onChange={this.onChangeId}
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
                                                    value={this.state.topicTitle}
                                                    onChange={this.onChange}
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
                                                    name="description"
                                                    value={this.state.description}
                                                    onChange={this.onChange} required
                                                ></input>
                                            </div>
                                        </div>


                                        <div style={{display:'none'}} className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Video Duration</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input
                                                    type="number" min="1" max="60"
                                                    className="form-control form-control-lg"
                                                    placeholder="Video Duration in min"
                                                    name="topicDuration"
                                                    value={this.state.topicDuration}
                                                    onChange={this.onChange}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0" >Date</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input type="date"
                                                    className="form-control form-control-lg"
                                                    placeholder="Topic Name"
                                                    name="date"
                                                    value={this.state.date}
                                                    onChange={this.onChange}
                                                    required />
                                            </div>
                                        </div>


                                        <div className="row align-items-center py-3">
                                            <div className="col-md-3 ps-5">
                                                <h6 className="mb-0">Upload Resources</h6>
                                            </div>
                                            <div className="col-md-9 pe-5">
                                                <input
                                                    className="form-control form-control-lg"
                                                    id="formFileLg"
                                                    type="file"
                                                    name="filename"
                                                    // value={this.state.filename}
                                                    onChange={this.onFileChange}
                                                />
                                                <div className="small text-muted mt-2">Upload material related to topic</div>
                                            </div>
                                        </div>

                                        <div className="px-5 py-4 gap-5">
                                            <input type="submit" value="Submit" className="btn btn-primary btn-lg" />
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

            </>
        )
    }
}
CreateTopic.propTypes = {
    createTopic: PropTypes.func.isRequired,
    fetchTopics: PropTypes.func.isRequired
}
const mapStatetoProps = state => ({
    topics: state.topicReducer.topics,
    courses: state.courses.courses
})
export default connect(mapStatetoProps, { createTopic, fetchTopics })(CreateTopic)
