
import { useEffect, useState, useContext, useRef, useMemo } from 'react';
import style from './mainBody.module.css';
import Dictionary from './Dictionary';
import {wordContext} from './WordContext';
import { Skeleton } from '@mui/material';
import useDataFetch from '../useDataFetch';

const MainBody = (props) =>{
    // const [isLoading, setIsLoading] = useState(false)

    // UseContext for search word and returned data
    const {wordState, dispatch} = useContext(wordContext);
    //stores a reference to the input element
    const inputRef = useRef();
    // console.log(wordState.isLoading);


    function searchWord(event){
        event.preventDefault();
        // setSearch(inputRef.current.value);
        dispatch({type: 'search', value: inputRef.current.value});
        dispatch({type: 'loading', value: ''})
    }
    const [isLoading, wordData, error, audio] = useDataFetch(wordState.search)
    // useEffect(()=>{
       
    //    .then(data=>{
    //     dispatch({type: 'notLoading', value: data})
    //     dispatch({type: 'word', value: data});
        // console.log(data.word);
    //    });
    // }, [wordState.search])

    return (
        <div className={style.mainBody} >
            <h1>Search for any word.</h1>

            <form onSubmit={searchWord} className={style.form}>
                <div className={style.formControl}>
                    <input ref={inputRef} type="text" 
                    className={style.searchInput}
                    id="" placeholder='what would you like to search'/>
                    <button type="submit">Search</button>
                </div>
            </form>
            {!isLoading ? (<Dictionary audio={audio} dictData={wordData} />) : (
                <div className={style.loader}>
                    <div>
                    <Skeleton variant="rectangular" width={460} height={20} />
                    </div>
                    <Skeleton variant="rectangular" width={460} height={118} />
                </div>
            )}
        </div>
    )
}

export default MainBody;