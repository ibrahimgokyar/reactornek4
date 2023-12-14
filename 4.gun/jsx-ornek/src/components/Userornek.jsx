function formatName(formatUser) {
    return formatUser.firstName + ' ' + formatUser.lastname 

}
const formatUser = {
    firstName : 'hakan',
    lastname :'yılmaz'
}

const User= {
    "name" :"ibrahim",
    "surname":"gökyar",
    "mail":"ibr@ibr.com",
    "city":"istanbul"
}
const UserComponent = () => {
    return(
        <>
        <h2>{User.name}, {User.surname}</h2>
        <p>Mail Adresi : {User.mail}</p>
        <p>Şehir : {User.city}</p>
        <p>Merhaba , {formatName(formatUser)}</p>
        </>
    )
}
export default function UserOrnek() {
    return(
        <div className="App">
            <UserComponent />
        </div>
    )
}