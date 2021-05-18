import React ,{Component} from 'react';
import './App.css';
import FormCourse from './Components/Form';
import ListCourse from './Components/List';


class App extends Component{

  state = {
    courses :[
      {name:'HTML'},
      {name:'CSS'},
      {name:'JavaScript'}
    ],
    current: ''
  }

  updateCourse = (e)=>{
    this.setState({
      current : e.target.value
    })
  }

  addCourse = (e)=>{
    e.preventDefault();
    if( e.target.courses.value.trim() === '' )
    {
      return null
    }
    else
    {
      let course = this.state.courses;
      let current = this.state.current;
      course.push({name : current});
      this.setState({
        courses : course,
        //current: ''
      });
      
    }
  }

  DeleteCourse= (e)=>{
    let courses = this.state.courses;
    courses.splice(e,1);
    this.setState({
      courses
    })
  }

  editCourse = (index,value)=>{
    
    if(value.trim() !== '')
    {
      let {courses} = this.state;
      let course = courses[index];
      course['name'] = value;
      this.setState({
      courses
    });
    }
    
  }

  render(){
    let {courses} = this.state;
    let length = courses.length;
    //console.log(length)
    let courseList  = length ?
      courses.map( (course , index)=>{
        return <ListCourse key={index} details={course} 
                           DeleteCourse={this.DeleteCourse} index={index} 
                           editCourse={this.editCourse}/>
      } )
      : (
        <p>there is no courses to show</p>
      )
    return(
      <div className="App">
        <h1>Add course</h1>
        <FormCourse addCourse={this.addCourse} updateCourse={this.updateCourse} />
        <ul>{courseList}</ul>

      </div>
    )
  }
}

export default App;
