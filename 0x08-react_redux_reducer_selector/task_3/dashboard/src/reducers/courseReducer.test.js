import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

describe('courseReducer', () => {
    it('should return initial state', () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 }
        ];
        const action = { type: FETCH_COURSE_SUCCESS, data: courses };
        const expectedState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ];
        expect(courseReducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ];
        const action = { type: SELECT_COURSE, index: 2 };
        const expectedState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: true },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ];
        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: true },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ];
        const action = { type: UNSELECT_COURSE, index: 2 };
        const expectedState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ];
        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });
});