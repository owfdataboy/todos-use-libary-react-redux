export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log(prevState);
        const curState = reducer(prevState, action, args);
        console.log(curState);
        console.groupEnd();
        return curState;
    };
}
