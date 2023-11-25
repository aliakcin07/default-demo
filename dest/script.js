"use strict";
const updateAssignments = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'user123',
    title: 'Final',
    grade: 100
};
console.log(updateAssignments(assign1, { grade: 95 }));
const assignGraded = updateAssignments(assign1, { grade: 95 });
const recordAssignment = (assign) => {
    return assign;
};
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record
const hexColorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
};
const studentGrade = {
    Alice: 'B',
    Bob: 'A'
};
const gradeData = {
    Alice: { assign1: 90, assign2: 85 },
    Bob: { assign1: 100, assign2: 95 }
};
const preview = {
    studentId: 'user123',
    title: "Final"
};
//# sourceMappingURL=script.js.map