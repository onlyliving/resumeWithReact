import React, { Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";

import { intro, experiences, otherExperiences, sideProjects, qna } from "./data";
import TopInfo from "./components/TopInfo";
import Margin from "./Margin";
import theme from "./styles/theme";
import ExperienceSection from "./components/ExperienceSection";
// import SideProject from "./components/SideProject";
// import Qna from "./components/Qna";

const Container = styled.div`
    max-width: 980px;
    margin: auto;
    padding: 60px 24px;
`;

const Footer = styled.footer`
    margin: 24px auto 16px auto;
`;

const SideProject = React.lazy(() => import("./components/SideProject"));
const Qna = React.lazy(() => import("./components/Qna"));

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <main>
                    <TopInfo
                        data={intro}
                    />

                    <Margin height={48} />



                    <ExperienceSection
                        title="Work Experiences"
                        data={experiences}
                    />

                    <Margin height={48} />

                    <ExperienceSection
                        title="Other Experiences"
                        data={otherExperiences}
                    />

                    <Margin height={48} />
                    <Suspense fallback={<div>Loading...</div>}>

                        <SideProject
                            data={sideProjects}
                        />

                        <Margin height={48} />

                        <Qna
                            data={qna}
                        />
                    </Suspense>
                </main>
                <Footer>ⓒ SoheeKim Frontend Resume</Footer>
            </Container>
        </ThemeProvider>
    )
};