import React from "react";
import styled from "styled-components/macro";
import GlobalStyle from "../globalStyles";
import Navbar from "./Navbar";
import {SliderData} from "../data/SliderData";
import Hero from "./Hero";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  order: ${({reverse}) => (reverse ? '2' : '1')}
  
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  
  p {
    margin-bottom: 2rem;
  }
`;



const Impressum = () => {
    return (
        <>
        <GlobalStyle/>
        <Navbar/>
            <Hero slides={SliderData}/>
            <Section>
                <Container>
                    <Column>
                        <h2>Kontaktadresse</h2>
                        <p>Aschvin's IT<br/>
                            Ausstellungsstrasse 70<br/>
                            8005 Zürich<br/>
                            Schweiz<br/>
                            aschvin.umachandran@edu.tbz.ch</p>

                        <h2>Vertretungsberechtigte Personen</h2>
                        <p>Aschvin Umachandran, President</p>

                        <h2>Haftungsausschluss</h2>
                        <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>

                        <h2>Haftung für Links</h2>
                        <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.</p>

                        <h2>Urheberrechte</h2>
                        <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Aschvin's IT oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</p>

                        <h2>Quelle</h2>
                        <p>Dieses Impressum wurde am 29.06.2021 mit dem Impressum Generator der Webdesign Agentur <a href='https://webkoenig.ch/' target='_blank' rel="noreferrer">Webkönig</a> erstellt. Die Agentur Webkönig übernimmt keine Haftung.</p>
                    </Column>
                </Container>
            </Section>
        </>
    )
}

export default Impressum;