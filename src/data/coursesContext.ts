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
    updateGoal: () => void
    deleteGoal: () => void
}

let initialCoursesState = {
    courses: [],
    addCourse: () => {
        //
    },
    addGoal: (courseId:string ,text:string) => {
        //
    },
    updateGoal: () => {
        //
    },
    deleteGoal: () => {
        //
    }
};

const coursesContext = React.createContext<Context>(initialCoursesState);

export default coursesContext;

