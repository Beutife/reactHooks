import  {useState, useEffect} from "react";

export const ChildComponent = () => {
    const [state , setState] = useState("");

    useEffect(() => {
        fetch('/api/data')
        .then(response => response.json())
        .then(data => setState(data))
    }),
    []

    return<>
    <h1>
        Htom childrem
    </h1>
    </>
}