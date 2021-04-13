import useGif from '../useGif';

const Tag = () => {
    const {gif, fetchGif} = useGif();

    return(
        
            <div className="container">
            <h1>Random</h1>
            <img width="100%" src={gif} alt="Totally Random"/>
            <button onClick={fetchGif}>Click Me Now!</button>
            </div>
        
    );
}

export default Tag;