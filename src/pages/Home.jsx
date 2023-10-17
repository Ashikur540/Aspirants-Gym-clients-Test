
import Banner from "../components/Home/Banner/Banner";
import Blogs from "../components/Home/Blogs/Blogs";
import Class from "../components/Home/Class/Class";
import ClassTimeTable from "../components/Home/ClassTimeTable/ClassTimeTable";
import Counting from "../components/Home/Counting/Counting";
import HomeAboutUs from "../components/Home/HomeAboutUs/HomeAboutUs";
import PricingPlan from "../components/Home/PricingPlan/PricingPlan";
import Reviews from "../components/Home/Reviews/Reviews";
import Team from "../components/Home/Team/Team";
import Testimonial from "../components/Home/Testimonial/Testimonial";


const Home = () => {
    return (
        <>
            <Banner />
            <HomeAboutUs />
            <Class />
            <Team />
            <ClassTimeTable />
            <PricingPlan />
            <Counting />
            <Testimonial />
            <Reviews />
            <Blogs />
        </>
    );
};

export default Home;