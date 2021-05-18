// class based component ; it need to call state

import React , { Component , Fragment } from "react";

class ListCourse extends Component{
    state = {
        isEdit : false
    }
    renderCourses =()=>{
        return(
            <li className='List' >
                <span>{this.props.details.name}</span>
                <button onClick={()=> {this.toggleState()} }>Update Course</button>
                <button onClick={ () =>{ this.props.DeleteCourse(this.props.index) } }>
                    Delete Course
                </button>
            </li>
        )
    }

    toggleState = ()=>{
      let {isEdit} = this.state;
      this.setState({
          isEdit: !isEdit,
      })
    }

    renderUpdateCourses = ()=>{
        
        return(
            <form className='formToAddCourse' onSubmit={this.updateCourse}>
                <input type='text' defaultValue={this.props.details.name} ref={ (v)=> { this.input = v } } />
                <button>Update Course</button>
            </form>
        )
    }

    updateCourse = (e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index,this.input.value);
        this.toggleState()
    }
    render(){
        let {isEdit} = this.state;
        return(
            <Fragment>
                { isEdit ? this.renderUpdateCourses() : this.renderCourses() }
            </Fragment>
        )
    }
}

export default ListCourse;