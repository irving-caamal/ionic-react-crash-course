import React from "react";

export interface Goal {
    id: string,
    text:string
}
export interface Course {
    id:string;
    title:string;
    enrolled: Date;
    goals: Goal[];
}

interface Context {
    courses:  Course[],
    addCourse: (courseTitle:string,courseDate:Date) => void
    addGoal: (courseId:string , goalText:string) => void
    updateGoal: (courseId:string, goalId:string,newText:string) => void
    deleteGoal: (courseId:string, goalId:string) => void
}

let initialCoursesState = {
    courses: [],
    addCourse: () => {},
    addGoal: () => {},
    updateGoal: () => {},
    deleteGoal: () => {}
};

const coursesContext = React.createContext<Context>(initialCoursesState);

export default coursesContext;

