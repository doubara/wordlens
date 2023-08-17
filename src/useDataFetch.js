import { useContext, useEffect } from "react";
import { wordContext } from "./components/WordContext";

const useDataFetch = (word) =>{
    const {wordState, dispatch} = useContext(wordContext);
    const {isLoading, wordData, error, audio} = wordState;
    useEffect(()=>{
        isLoading && fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
            headers: {
                accept: 'application/json',
                'User-agent': 'wordlens',
            }
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data);
            const wordMeaning = [];
            data.forEach(dataObject=>{
                
                dataObject.meanings.forEach(meaningsObject=>{
                    let partOfSpeech = meaningsObject.partOfSpeech
                    let example = meaningsObject.example;
                    meaningsObject.definitions.forEach(definition=>{
                        let meaning = definition.definition;
                        wordMeaning.push({meaning, partOfSpeech, example})
                    })
                })
            })
                const mineData = {
                    'word': data[0].word,
                    // 'definitions': definitionsArray,
                    // 'partsOfSpeech': partsOfSpeechArray,
                    'phonetics': `${data[0].phonetic}`,
                    'audio': `${data[0].phonetics[0].audio}`,
                    // 'example': examplesArray,
                    wordMeaning,
    
                }
                return mineData;
            }).then(data=>{
                dispatch({type: 'notLoading', value: data})
                dispatch({type: 'word', value: data});
                // console.log(data.word);
               }).catch(error=>{
                // return error.message;
                console.log(error.message);
                dispatch({type: 'error', value: error.message});
            })


    }, [word, dispatch])

    return [isLoading, wordData, error, audio]

}

export default useDataFetch;