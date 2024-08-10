import { memo } from "react";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";
const HomePage = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );

};
export default memo(HomePage);