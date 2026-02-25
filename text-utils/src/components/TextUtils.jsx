import { useState } from 'react'

// functional component
const TextUtils = () => {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [countWords, setCountWords] = useState(0);
    // text - text is a state where data will be stored
    // setText - a method by which we can only change value of the state
    return <>
        <div className="container">
            <div className="text-center p-3">
                <h2>Text-Utils Example</h2>
            </div>
            <div className="m-3">
                <div className="form-floating">
                    {
                        // onChange - get value entered in input filed on every change(input,type)
                    }
                    <textarea onChange={(e) => setText(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 200 }}></textarea>
                    <label htmlFor="floatingTextarea2">Enter your text here....</label>
                </div>
            </div>
            <div className="px-3">
                <button onClick={() => setText(text.toUpperCase())} className="m-1 btn btn-primary">To Uppercase</button>
                <button onClick={() => setText(text.toLowerCase())} className="m-1 btn btn-warning">To Lowercase</button>
                <button onClick={() => setCount(text.length)} className="m-1 btn btn-info">Count Letters</button>
                <button onClick={() => setCountWords(text.split(" ").length)} className="m-1 btn btn-success">Count Words</button>
            </div>
            <hr />
            <div>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia quis eum itaque sapiente aliquid eius adipisci quaerat earum, asperiores incidunt facere sit enim eos. Voluptatem, nulla eius. Excepturi, provident? */}
                <p> {text}</p>
                <p>Text Count : {count}</p>
                <p>Word Count : {countWords}</p>
            </div>
        </div>
    </>
}

export default TextUtils;

// display text.
// to uppercase

// text.split(" ").length = 
// [Home,Page, and, Conatct].length -> 4