import React from "react";

interface Goal {
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
    addGoal: () => void
    updateGoal: () => void
    deleteGoal: () => void
}

let initialCoursesState = {
    courses: [],
    addCourse: () => {
        //
    },
    addGoal: () => {
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

