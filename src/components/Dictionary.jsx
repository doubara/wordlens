import {useRef} from 'react';
import style from './dictionary.module.css';
import {VolumeUpOutlined} from '@mui/icons-material/';


const Dictionary = ({dictData, audio}) =>{
    const audioRef  = useRef();
    var audio = new Audio(audio);
    const playAudio = (event)=>{
        // audioRef.current.canPlay = (event)=>{
        //     audio.play();
        // }
        audio.play();
        
    }
    return (
        <div className={style.dictionary}
        >
            <h2 className={style.word}>{dictData?.word}</h2>
            <span className={style.prononce}>{dictData?.phonetics}</span>
            
            <div>
                <button className={style.playAudio} onClick={playAudio}>
                    <VolumeUpOutlined />
                </button>
                <audio ref={audioRef} className={style.audio} src={audio}></audio>
            </div>

            <ul className={style.defList}>
                {dictData.wordMeaning.map((word, index)=>{
                    return <li key={index*Math.random()*200} className={style.def}>
                        <p>({word.partOfSpeech}){word.meaning}</p>
                        <span>{word.example}</span>
                </li>
                })}
            </ul>
        </div>
    )
};

export default Dictionary;