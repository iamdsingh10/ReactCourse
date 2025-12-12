function Button({children,...rest}){
    return <>
    
    <button {...rest}>{children}</button>
    </>
}

function FaceBookButton ({children, ...rest}){
    return <>
    <h3> Composition- I had used button component here</h3>
    <Button {...rest}>F-{children}</Button>
    </>
}

function GoogleButton({children,...rest}){
    return<>
    <Button  {...rest}>G-{children}</Button>
    </>
}
export {
    Button,
    FaceBookButton, GoogleButton
}