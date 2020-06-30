import React, {useState}  from 'react';
import CoursesContext, {Course, Goal} from './coursesContext'

const CoursesContextProvider: React.FC = props => {
    const [courses,setCourses ]= useState<Course[]>([
        {
            id: 'c1',
            title: ' React the complete guide',
            enrolled: new Date(),
            goals: [],
            included:true
        }
    ]);
    const addCourse = (title:string,date:Date) => {
        const newCourse: Course = {
            id: Math.random().toString(),
            title,
            enrolled: date,
            goals: [],
            included:true
        }

        setCourses(curCourses => {
            return curCourses.concat(newCourse)
        })
    };
    const addGoal = (courseId:string, text:string) => {
        const newGoal: Goal = {id:Math.random().toString(),text:text}
        setCourses(courses => {
            const updatedCourses = [...courses];
            const updateCourseIndex = updatedCourses.findIndex(
                (course) =>  {
                    return course.id === courseId;
                }
            )
            const updatedCourseGoals = updatedCourses[updateCourseIndex].goals.concat(newGoal)
            const updatedCourse = {...updatedCourses[updateCourseIndex]}
            //updatedCourses[updateCourseIndex].goals = updatedCourseGoals;
            updatedCourse.goals = updatedCourseGoals;
            updatedCourses[updateCourseIndex] = updatedCourse;
            return updatedCourses;
        });
    };
    const deleteGoal = (courseId:string,goalId:string) => {
        setCourses(curCourses => {
            const updatedCourses = [...curCourses];
            const updateCourseIndex = updatedCourses.findIndex(
                (course) =>  {
                    return course.id === courseId;
                }
            )
            const updatedCourseGoals = updatedCourses[updateCourseIndex].goals.filter(goal => {
                return goal.id !== goalId
            })
            const updatedCourse = {...updatedCourses[updateCourseIndex]}
            //updatedCourses[updateCourseIndex].goals = updatedCourseGoals;
            updatedCourse.goals = updatedCourseGoals;
            updatedCourses[updateCourseIndex] = updatedCourse;
            return updatedCourses;
        })
    };
    const updateGoal = (courseId:string,goalId:string,newText:string) => {
        setCourses(curCourses => {
            const updatedCourses = [...curCourses];
            const updateCourseIndex = updatedCourses.findIndex(
                (course) =>  {
                    return course.id === courseId;
                }
            )
            const updatedCourseGoals = updatedCourses[updateCourseIndex].goals.slice();
            const updatedCourseGoalsIndex = updatedCourseGoals.findIndex(goal => goal.id === goalId);
            const updatedGoal = {
                ...updatedCourseGoals[updateCourseIndex],
                text:newText
            }
            updatedCourseGoals[updatedCourseGoalsIndex] = updatedGoal;
            const updatedCourse = {...updatedCourses[updateCourseIndex]}
            updatedCourse.goals = updatedCourseGoals;
            updatedCourses[updateCourseIndex] = updatedCourse;
            return updatedCourses;
        })
    };

    const changeCourseFilter = (courseId:string,isIncluded:boolean) => {
        setCourses(courses => {
            const updatedCourses = [...courses];
            const updateCourseIndex = updatedCourses.findIndex(
                (course) =>  {
                    return course.id === courseId;
                }
            )

            const updatedCourse = {
                ...updatedCourses[updateCourseIndex],
                included : isIncluded
            }
            updatedCourses[updateCourseIndex] = updatedCourse;
            return updatedCourses;
        });
    }

    return (
        <CoursesContext.Provider
            value={{
                courses: courses,
                addGoal:addGoal,
                deleteGoal:deleteGoal,
                updateGoal:updateGoal,
                addCourse:addCourse,
                changeCourseFilter:changeCourseFilter
            }}>
            {props.children}
        </CoursesContext.Provider>
    );
}

export default CoursesContextProvider;