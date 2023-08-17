import React from "react";

import { createContext, useReducer } from "react";


const wordContext = createContext({});

const initialState = { 
    search: '', 
    isLoading: false, 
    error: undefined, 
    wordData: {
    word: "hello",
    phonetics: "hɛˈləʊ",
    audio: `"//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"`,
    wordMeaning: [
        {
            meaning: "used as a greeting or to begin a phone conversation.",
            partOfSpeech: "verb",
            example: "hello there, Katie!",

        },
        {
            meaning:  "an utterance of ‘hello’; a greeting.",
            partOfSpeech: 'exclamation',
            example: "she was getting polite nods and hellos from people",
        },
        {
            meaning:  "say or shout ‘hello’.",
            partOfSpeech: 'noun',
            example: "I pressed the phone button and helloed",
        }
    ]
}
}

const reducerFunction = (state, action) =>{
    const newState = state;
    const {type, value} = action;
    if (type ==='search'){
        return {...newState, search: value}
    }
    else if(type === 'word'){
        return {...newState, wordData: value};
    }
    else if(type === 'loading'){
        return {...newState, isLoading: true}
    }
    else if (type === 'notLoading'){
        return {...newState, isLoading: false}
    }
    else if (type === 'error'){
        return {...newState, error: value};
    }
    else return newState;
    return newState;
}

const WordContextProvider = (props)=>{
    // const [wordData, setWordData] = useState({});
    const [wordState, dispatch] = useReducer(reducerFunction, initialState);
    
    return <wordContext.Provider value={{wordState, dispatch}}>
        {props.children}
    </wordContext.Provider>
}
export {wordContext}
export default WordContextProvider;
