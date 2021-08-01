import Link from "next/link"

const Child = () => {
    return <p>Move to "/tomato"</p>
}

const Tomato = () => {
    return <div>
        <Link href={"/"}>
            <a>
                <Child/>
            </a>
        </Link>
    </div>
}

export default Tomato