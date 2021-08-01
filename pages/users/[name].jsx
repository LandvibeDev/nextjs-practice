const name = ({user}) => {
    const username = user && user.name;
    return <div>{username}</div>
}

export const getServerSideProps = async (props) =>{
    const {name} = props.query
    try {
        const res = await fetch(`https://api.github.com/users/${name}`)
        if(res.status === 200) {
            const user = await res.json()
            return {
                props: {user}
            }
        }

        return {
            props:{}
        }
    } catch (e) {
        console.error(e)
        return {
            props: {}
        }
    }
}

export default name