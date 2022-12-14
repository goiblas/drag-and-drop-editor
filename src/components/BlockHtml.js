import { useState, useRef, useEffect } from "react";
import Loading from "./Loading";

const Block = ({html, type, isLoading}) => {
    const [height, setHeight] = useState(140);
    const divRef = useRef(null);

    useEffect(() => {
        if(!divRef.current) return;
        const div = divRef.current;
        const height = div.scrollHeight;
        setHeight(height);
    }, [isLoading])

    if(isLoading) {
        return (
        <div className="template-loading">
            <Loading />
        </div>
        )
    }

    return (
        <div className="module-container" style={{ height }}>
            <div ref={divRef} className={`module-formater module-${type}`} dangerouslySetInnerHTML={{__html: html}} />
        </div>
    )
}


export default Block;