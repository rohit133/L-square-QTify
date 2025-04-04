import Divider from "../components/Divider/Divider"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import CardSection from "../components/Sections/CardSection"

export default function HomePage(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <CardSection type={'top'}/>
            <Divider/>
            <CardSection type={'new'}/>

        </>
    )
}