// stateless component ; it doesn't need to call state

import React from 'react';

const FormCourse = (props)=>{
    return(
        <form className='formToAddCourse' onSubmit={props.addCourse}>
            <input type='text' onChange={props.updateCourse} id='courses'/>
            <button type='submit'>Add Course</button>
        </form>
    )

}

export default FormCourse;