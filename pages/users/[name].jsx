import {css} from "styled-jsx/css";

const style = css`
  h2 {
    margin-left: 20px;
  }

  .user-bio {
    margin-top: 12px;
    font-style: italic;
  }
`

const name = ({user}) => {
    return <>
        {
            user ? (
                    <div>
                        <h2>{user.name}</h2>
                        <p className={"user-bio"}>{user.bio}</p>
                    </div>
                )
                :
                (
                    <div>Hello World</div>
                )
        }
        <style jsx>{style}</style>
    </>
}

export const getServerSideProps = async (props) => {
    const {name} = props.query
    try {
        const res = await fetch(`https://api.github.com/users/${name}`)
        if (res.status === 200) {
            const user = await res.json()
            return {
                props: {user}
            }
        }

        return {
            props: {}
        }
    } catch (e) {
        console.error(e)
        return {
            props: {}
        }
    }
}

export default name