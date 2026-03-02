import { useState, useEffect } from 'react'

// functional component
const TextUtils = () => {
    // ??,|| : null replacement operator : if left side value is null then right side value will use.
    // useEffect : used to handle side effect
    // -> when you want to anything in initialization(rendering of component-first) of component.
    useEffect(() => {
        setText(localStorage.getItem("text") ?? "")
        setCount(localStorage.getItem("count") ?? 0)
        setCountWords(localStorage.getItem("words") ?? 0)
        setSecond(localStorage.getItem("second") ?? 0)
    }, []); // when component render

    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [countWords, setCountWords] = useState(0);
    const [second, setSecond] = useState(0);
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
                    <textarea value={text} onChange={(e) => {
                        setText(e.target.value)
                        localStorage.setItem("text", text);
                    }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 200 }}></textarea>
                    <label htmlFor="floatingTextarea2">Enter your text here....</label>
                </div>
            </div>
            <div className="px-3">
                <button onClick={() => {
                    setText(text.toUpperCase())
                    localStorage.setItem("text", text.toUpperCase());
                }} className="m-1 btn btn-primary">To Uppercase</button>

                <button onClick={() => {
                    setText(text.toLowerCase())
                    localStorage.setItem("text", text.toLowerCase());
                }} className="m-1 btn btn-warning">To Lowercase</button>

                <button onClick={() => {
                    setCount(text.length);
                    localStorage.setItem("count", count.toString())
                }} className="m-1 btn btn-info">Count Letters</button>

                <button onClick={() => {
                    setCountWords(text.split(" ").length);
                    localStorage.setItem("words", countWords.toString());
                }} className="m-1 btn btn-success">Count Words</button>

                <button onClick={() => {
                    setSecond((text.split(" ").length * 60) / 180)
                    localStorage.setItem("second", second.toString())
                }} className="m-1 btn btn-secondary">Check Reading Time</button>

                <button onClick={() => {
                    setText("");
                    setCount(0)
                    setCountWords(0)
                    setSecond(0)
                    localStorage.clear();
                }} className="m-1 btn btn-danger">Clear Text</button>
            </div>
            <hr />
            <div>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia quis eum itaque sapiente aliquid eius adipisci quaerat earum, asperiores incidunt facere sit enim eos. Voluptatem, nulla eius. Excepturi, provident? */}
                <p> {text}</p>
                <p>Text Count : {count}</p>
                <p>Word Count : {countWords}</p>
                <p>Reading Time : {second} s</p>

            </div>
        </div>
    </>
}

export default TextUtils;
