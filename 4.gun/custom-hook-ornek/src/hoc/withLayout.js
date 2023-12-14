const withLayout = (Component) => {

    const Wrapper=(props) => {
        const tikla=() => {
            alert('Merhaba');
        }

        const tikla2=() => {
            alert('Merhaba 2');
        }
        return(
            <div className="bg-red">
                <div className="sola_Hizala">Sola Hizala </div>
                <div className="saga_Hizala">
                    <Component tikla={tikla} tikla2={tikla2}{...props} />
                </div>
            </div>
        )
    }
    return Wrapper
}
export default withLayout