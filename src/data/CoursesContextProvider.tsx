import React, {useState}  from 'react';
import CoursesContext, {Course} from './coursesContext'

const CoursesContextProvider: React.FC = props => {
    const [courses,setCourses ]= useState<Course[]>([]);
    const addCourse = () => {};
    const addGoal = () => {};
    const deleteGoal = () => {};
    const updateGoal = () => {};

    return (
        <CoursesContext.Provider
            value={{
                courses: courses,
                addGoal:addGoal,
                deleteGoal:deleteGoal,
                updateGoal:updateGoal,
                addCourse:addCourse
            }}>
            {props.children}
        </CoursesContext.Provider>
    );
}

export default CoursesContextProvider;