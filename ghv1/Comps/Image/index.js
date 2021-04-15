function Image({
    src="https://media.comicbook.com/2019/08/gundam-1181404-1280x0.jpeg",
    width="200px",
    height="200px"
}) {
    return <img 
        src={src}
        width={width}
        height={height}
    
    />
}

export default Image;