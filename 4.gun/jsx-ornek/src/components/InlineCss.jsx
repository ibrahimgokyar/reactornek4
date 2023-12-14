const MyStyle = {
    "color":'red',
    "fontSize":"50px",
    "fontWeight":"700"
}

const MyComponent = () => {
    return(
        <>
        <h2 style={MyStyle}>İbrahim Gökyar</h2>
        <h4>İstanbul</h4>
        <h6 className="text">Developer</h6>
        </>
    )
}

export default function InlineCss() {
    return(
        <div>
            <MyComponent />
        </div>
    )
}