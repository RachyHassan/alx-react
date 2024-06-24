import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";

export function selectCourse(index) {
    return {
    type: SELECT_COURSE,
    index,
    };
}

export const boundSelectCourse = (index) => (dispatch) => {
    dispatch(selectCourse(index));
};

export function unSelectCourse(index) {
    return{
        type: UNSELECT_COURSE,
        index,
    };
}

export const boundunSelectCourse = (index) => (dispatch) => {
    dispatch(unSelectCourse(index));
};

export const fetchCourseSuccess = (data) => ({
    type: FETCH_COURSE_SUCCESS,
    data,
});