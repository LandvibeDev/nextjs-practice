const staticPage = ({time}) => {
    return <div>{time}</div>
}

export const getStaticProps = () => {
    return {
        props: {
            time: new Date().toISOString()
        },
        revalidate: 3
    }
}

export default staticPage