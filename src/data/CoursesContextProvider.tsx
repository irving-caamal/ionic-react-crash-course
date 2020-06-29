import React, {useState}  from 'react';
import CoursesContext, {Course} from './coursesContext'

const CoursesContextProvider: React.FC = props => {
    const [courses,setCourses ]= useState<Course[]>([
        {
            id: 'c1',
            title: ' React the complete guide',
            enrolled: new Date(),
            goals: []
        }
    ]);
    const addCourse = (title:string,date:Date) => {
        const newCourse: Course = {
            id: Math.random().toString(),
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