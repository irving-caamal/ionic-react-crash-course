import React, {useState}  from 'react';
import CoursesContext, {Course} from './coursesContext'

const CoursesContextProvider: React.FC = props => {
    const [courses,setCourses ]= useState<Course[]>([]);
    const addCourse = (title:string,date:Date) => {
        const newCourse: Course = {
            id: new Date().toString(),
            title,
            enrolled: date,
            goals: []
        }

        setCourses(curCourses => {
            return curCourses.concat(newCourse)
        })
    };
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