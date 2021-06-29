import React, {useState} from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import {SliderData} from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import {InfoData, InfoDataTwo} from "./data/InfoData";
import {Animator, batch, FadeIn, ScrollContainer, ScrollPage, StickyIn, ZoomIn} from "react-scroll-motion";
import Impressum from "./components/Impressum";
import {ImpressumData} from "./data/ImpressumData";

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <>
        <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero slides={SliderData}/>
        <ScrollContainer>
            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <InfoSection {...InfoData}/>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={ZoomInScrollOut}>
                    <InfoSection {...InfoDataTwo}/>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={ZoomInScrollOut}>
                    <Impressum {...ImpressumData}/>
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <Animator animation={ZoomInScrollOut}>
                    <h2>End of Page, thanks for visiting :)</h2>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    </>
  );
}

export default App;
