import { useRouter } from "next/router";
import { Fragment } from "react";
import Navbar from "../../components/Navbar"
const Category = () => {
    const router = useRouter()
    const { name } = router.query
    return (
        <Fragment>
            <Navbar/>
            <h1>Name: {name}</h1>
        </Fragment>
    )
}

export default Category