import fetch from 'isomorphic-unfetch'

export default function Home({user}) {
    const username = user && user.name;
    return (
        <div>
            {username}
        </div>
    )
}

export const getServerSideProps = async () =>{
    try {
        const res = await fetch('https://api.github.com/users/raccoonback')
        if(res.status === 200) {
            const user = await res.json()
            return {
                props: {user}
            }
        }
    } catch (e) {
        console.error(e)
        return {
            props: {}
        }
    }
}
