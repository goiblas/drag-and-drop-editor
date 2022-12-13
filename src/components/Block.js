import { useState, useRef } from "react";
import Loading from "./Loading";

const Block = ({type, isLoading}) => {
    const [height, setHeight] = useState(140);
    const iframeRef = useRef(null);

    const handleLoad = () => {
        if(!iframeRef.current) return;

        const iframe = iframeRef.current;
        const height = iframe.contentWindow.document.body.scrollHeight;
        setHeight(height);
    }

    if(isLoading) {
        return (
        <div className="template-loading">
            <Loading />
        </div>
        )
    }

    return (
        <iframe
            src={`/html_modules/${type}.html`}
            onLoad={handleLoad}
            title={type}
            width="100%"
            height={`${height}px`}
            ref={iframeRef}
            style={{
                transition: "height 0.5s ease-in-out"
            }}
        />
    )
}


export default Block;