export interface InfoLinkProps {
    type: string;
    link: string;
    desc: string;
    isShow: boolean;
}

export interface IntroProps {
    title: string;
    introText: string;
    infoLink: InfoLinkProps[];
    mainTechStack: string[];
    techStack: string[];
}

export interface WorkDetailProps {
    head: string;
    content: string[];
}

export interface ExperienceProps {
    company: string;
    position: string;
    period: {
        start: string;
        finish: string;
    };
    link: string;
    skill: string[];
    workDetail: WorkDetailProps[];
    effect: string;
}

export const intro = {
    title: "디자인을 좋아하는 개발자, 김소희입니다.",
    introText:
        "웹 프론트엔드 개발자입니다. 기획과 디자인 의도대로 구현하는 것이 재미있습니다. 기획단에서 생각하지 못한 디테일을 체크해서, 같이 의견을 맞대어 더 나은 아웃풋을 만들 때 더욱 보람을 느낍니다. 서로 존중하며 나아가는 팀과 함께 하고 싶습니다.",
    infoLink: [
        {
            type: "email",
            link: "mailto:greensohee88@naver.com",
            desc: "이메일 : greensohee88@naver.com",
            isShow: true,
        },
        {
            type: "github",
            link: "https://github.com/onlyliving/Side-Projects",
            desc: "Side Project",
            isShow: false,
        },
        {
            type: "github",
            link: "https://github.com/onlyliving",
            desc: "깃허브 : https://github.com/onlyliving",
            isShow: true,
        },
        {
            type: "resume",
            link: "https://onlyliving.github.io/resumeWithReact/",
            desc: "이력서",
            isShow: false,
        },
        {
            type: "insta",
            link: "https://www.instagram.com/soheegreen",
            desc: "인스타그램",
            isShow: false,
        },
        {
            type: "tistory",
            link: "http://green-webdesigner.tistory.com/",
            desc: "티스토리",
            isShow: false,
        },
    ],
    mainTechStack: ["HTML5", "CSS3/SCSS", "TypeScript", "React"],
    techStack: [
        "JavaScript",
        "Webpack",
        "flask",
        "Git",
        "Zeplin",
        "NextJS(learning)",
        "React Native(learning)",
    ],
};

export const experiences = [
    {
        company: "(주)서르, (주)사맛디",
        position: "개발팀 - 프론트엔드 개발자",
        period: {
            start: "2021-01",
            finish: "2022-07",
        },
        link: "",
        skill: [
            "HTML5",
            "SCSS",
            "JavaScript",
            "TypeScript",
            "ReactJS",
            "Webpack",
            "Docker",
            "Zeplin",
            "Gitlab",
            "Visual Studio Code",
        ],
        workDetail: [
            {
                head: "인테리어 플랫폼 웹페이지 개발",
                content: [
                    "회원가입, 로그인, 게시물 작성, 상세페이지, 서비스 목록, 검색 등 40여 페이지(SPA) 개발.",
                ],
            },
            {
                head: "인테리어 플랫폼 데모 웹페이지 개발",
                content: [
                    "AI 엔진 관련 페이지를 제외한 나머지 페이지는 더미 데이터로 구성하여 10여 페이지(SPA) 개발.",
                    "PPT로 만든 기획/디자인을 토대로 개발 진행.",
                ],
            },
            {
                head: "쇼핑몰 상세페이지 에디터 툴(사맛디 에디터) 웹 프론트 개발",
                content: [
                    "이미지만 업로드하면, 쇼핑몰 상세페이지를 자동으로 만들어주는(AI 엔진 기술로 이미지를 인식하여 이미지 레이아웃, 상세 컷, 디자인까지) 서비스를 보여주는 웹페이지 개발.",
                    "웹 페이지에서는 캔버스(Canvas) 안에서 모든 객체가 컨트롤 되므로, Canvas API를 쉽게 사용할 수 있는 FabricJS 오픈소스를 도입하여 개발.",
                    // "사맛디 AI 엔진을 통해 이미지를 분석하여 자동으로 레이아웃 배치 및 크롭을 함.",
                    "웹 최적화를 위하여 이미지 경량화 작업을 하였고, 유저 커스터마이징 할 수 있는 기능을 추가하는 중에 개발이 중단됨.",
                ],
            },
            {
                head: "사맛디 패션 AI 데모 웹 프론트 개발",
                content: [
                    "사맛디 패션 AI 엔진 기술을 소개하는 데모 페이지. 사람이 들어간 이미지를 업로드하면, 사맛디 AI 엔진이 옷을 분석하여 상/하의의 소재, 무드 등 결괏값에 따라 웹 페이지에 캔버스(Canvas)로 구현.",
                ],
            },
            // {
            //     head: "데이터 검수 데모 웹 프론트 개발",
            //     content: ["이미지를 업로드해서 필요한 정보를 입력하고 검수 관리할 수 있는 페이지를 만들었습니다."],
            // },
        ],
        effect: "사맛디 AI 엔진을 기반으로 인테리어 플랫폼부터 재활용 분류 시스템에 필요한 웹페이지, 쇼핑몰 상세페이지 에디터 등 다양한 서비스 개발 경험을 하였습니다. 이 과정 중에 도커(Docker)와 CI/CD를 접하였고, 인테리어 플랫폼에서 TypeScript도 적용하면서 경험을 넓혔습니다.",
    },
    {
        company: "(주)인라이플",
        position: "AI 상용 연구팀 - 프론트엔드 개발자",
        period: {
            start: "2020-08",
            finish: "2020-12",
        },
        link: "",
        skill: ["HTML5", "CSS3", "JavaScript", "GitHub", "Python", "Flask", "PyCharm", "Visual Studio Code"],
        workDetail: [
            {
                head: "AI 모델 데모페이지 웹 프론트 개발 (데이터 시각화)",
                content: [
                    "기획안을 받으면 디자인부터 프론트 개발, 필요한 데이터 구조를 생각해서 플라스크(flask)로 더미 API까지 작업 (그 이후에 팀원이 더미 API를 실제 엔진과 연결하여 완료하는 방식의 흐름으로 진행)",
                ],
            },
        ],
        effect: "연구 개발한 AI 엔진에 대하여 학습 결과를 잘 보여줄 수 있는 데모 페이지가 필요해서 투입이 되었습니다. 가상환경, PyCharm, Flask 등 Python 개발 환경을 경험하였습니다.",
    },
    {
        company: "(주)휴마트컴퍼니",
        position: "개발팀 - 프론트엔드 개발자",
        period: {
            start: "2018-06",
            finish: "2019-12",
        },
        link: "https://trost.co.kr/",
        skill: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Webpack",
            "Zeplin",
            "GitLab",
            "Trello",
            "SourceTree",
            "Postman",
            "InteliJ",
            "Visual Studio Code",
        ],
        workDetail: [
            {
                head: "트로스트(TROST) 플랫폼 웹 프론트 개발",
                content: [
                    "모바일에만 이뤄졌던 서비스를 PC Web에서도 가능하게끔 서비스 페이지 개발.",
                    "기존 코드의 경우, 코드 확장성을 위하여(최신 프레임워크를 사용하려면 JS 기반이어야 하므로) PHP, jQuery로 개발된 코드를 HTML, JavaScript 코드로 변경.",
                    "깃랩(GitLab)으로 이슈 관리 (기획, 마케팅 등과 협의 시에는 트렐로(Trello)로 관리)",
                ],
                // content: [
                //     "입사 후 개발 시작 단계 : PC 웹사이트에 서비스를 도입하는 초기 단계 (모바일앱 서비스만 존재)",
                //     "기획에 따라 웹페이지 기능 개선 및 구축 (HTML 마크업 및 퍼블리싱, RESTful API 연결 등 기능 구현)",
                // ],
            },
            {
                head: "앱 내의 웹페이지 프론트 개발",
                content: [
                    "모바일 앱에서 기획적으로 업데이트가 잦은 서비스 페이지는 앱 내의 웹페이지로 개발. (유저 편의성을 위하여 앱 업데이트를 빈번하게 발생시키지 않도록 함)",
                ],
                // content: ["모바일 앱에서 기획적으로 자주 업데이트가 되는 페이지는 웹 포지션으로 개발.", "유저가 앱 업데이트를 해야 하는 번거로움을 줄임."],
                // content: ["개발팀 협의로 앱 내에 웹페이지 개발이 필요한 부분은 웹 포지션으로 개발 (개발 변경이 잦은 서비스 페이지 등)"],
            },
        ],
        effect: "데이터를 다루는 것을 알게 되었습니다. (서버 개발자와 API 요청과 응답에 대한 규칙 정하기, 언제 어떤 데이터를 불러와야 하는지 등) 웹앱에서 앱과의 통신하는 협업 과정도 기억에 크게 남습니다.",
    },
];

export const TIME_LINE_START_DATE = "2016-01";

export const otherExperiences = [
    {
        company: "(주)룸앤스페이스",
        position: "개발팀 - 웹퍼블리셔",
        period: {
            start: "2016-09",
            finish: "2018-05",
        },
        link: "https://roomnspace.co.kr/",
        skill: ["HTML5", "CSS3", "jQuery", "JavaScript", "Adobe photoshop", "Adobe Illustrator"],
        workDetail: [
            {
                head: "룸앤스페이스 서비스 (PC, Mobile Web)",
                // head: "웹사이트와 모바일웹 구축을 위한 디자인 및 퍼블리싱 작업",
                content: [
                    "서버 세팅만 되어있는 상태에서 디자인부터 웹 퍼블리싱(반응형)까지 작업을 함.",
                    "웹 작업 비율(%) = 웹 디자인 작업 70 + 퍼블리싱 30",
                ],
            },
        ],
        effect: "웹디자인(UI, UX)에 대한 감각을 키웠습니다. 서버 개발자와 협업하면서 작업관리 시스템의 필요성을 느꼈습니다. 개발에 대한 호기심과 갈증이 생겨서 스터디 모임에 들어가는 등 적극적으로 프론트엔드 영역을 알기 위하여 찾아보게 되었습니다.",
    },
    {
        company: "조경설계 이화원",
        position: "설계팀 - 디자이너",
        period: {
            start: "2011-03",
            finish: "2015-10",
        },
        link: "http://ehwawon.kr/",
        skill: ["AutoCAD", "SketchUp", "Adobe photoshop", "Adobe Illustrator"],
        workDetail: [
            {
                head: "계획설계/기본설계/실시설계",
                content: [],
            },
        ],
        effect: "세상을 보는 시야가 넓어졌습니다. 길을 걷다가도 바닥 포장재와 패턴, 배수 형태, 어떤 조경수를 심었는지, 옥외 계단 구조물 등 설계가 머릿속에 대략 그려집니다. 공간과 구조물, 시설물의 디테일을 보면 그 공간에 얼마나 노력이 들어갔는지 알 수 있습니다.",
    },
];

export interface SideProjectProps {
    head: string;
    period: string;
    shortText?: string;
    linkList: {
        title: string;
        link: string;
    }[];
    desc: string;
}

export const sideProjects = [
    {
        head: "개인 사이드 프로젝트",
        period: "2020.03",
        shortText: "오픈 API를 이용한 배경 이미지 검색 구현",
        linkList: [
            {
                title: "사이드 프로젝트 오픈소스(github)",
                link: "https://github.com/onlyliving/Side-Projects",
            },
        ],
        desc: "오픈 API를 이용한 단기 프로젝트로 의미 있는 서비스가 무엇이 있을까 고민하였습니다. 그러다가 제가 웹디자이너로 일할 때 배경 이미지를 고르는 대에 시간을 많이 소비했던 기억이 떠올랐습니다. 웹 디자이너와 마케팅 업무에 도움이 될 것으로 예상합니다.",
    },
    {
        head: "프론트엔드 개발 노트",
        period: "2019.01 ~",
        linkList: [
            {
                title: "개발 노트(notion)",
                link: "https://www.notion.so/1f9b426c024d4490a00ac4956732519c",
            },
        ],
        desc: "그동안 개발 작업을 하면서 필요한 내용을 정리해 둔 개발 노트입니다. 경험한 것을 기록하고, 알아야 하는 모든 것을 기록하려고 합니다.",
    },
    {
        head: "스터디 프로젝트\n(도서관리 시스템 만들기)",
        period: "2018.06",
        linkList: [
            {
                title: "도서관리 시스템 웹 디자인(zeplin)",
                link: "https://zpl.io/scene/a3oRmkY",
            },
        ],
        desc: "스터디 프로젝트 (도서 관리 시스템 만들기) : 개발 스터디에서 같이 프로젝트를 시작해서 어떠한 성과를 만들어보고 싶었습니다. 어떤 니즈가 있을까 얘기하다가 도서 관리 시스템을 만들어보자는 의견이 나와서 시작하게 되었습니다. 제가 디자인을 할 줄 알아서 디자인을 담당했고 모두의 의견을 받아서 진행을 하였습니다. 프론트 개발은 다른 개발자와 같이 하기로 했습니다. 비록 개발 진행 중에 멈춰버렸지만, 의미 있는 작업이었습니다.",
    },
    {
        head: "코드펜(codepen)에 오픈소스 제공",
        period: "2018.01 ~",
        linkList: [
            {
                title: "(CSS 가상 선택자) 버튼 모양 만들기",
                link: "https://codepen.io/greensohee/pen/qpVVOb",
            },
            {
                title: "(CSS 가상 선택자) 글머리 모양 만들기",
                link: "https://codepen.io/greensohee/pen/aEYvXo",
            },
            {
                title: "이미지 레이지 로딩 구현",
                link: "https://codepen.io/greensohee/pen/LYGBrPo",
            },
        ],
        desc: "스터디 모임을 했을 때, 간단한 도형이나 화살표를 이미지를 쓰지 않고 가상 선택자로 구현하는 것을 보고 관심 있어 하는 사람들이 있어서, 자주 쓰는 UI 관련 코드를 오픈소스로 제공하였습니다. 최근에는 이미지 레이지 로딩 관련하여 공부한 자료를 올렸습니다.",
    },
];

export interface qnaProps {
    question: string;
    answer: string;
    link?: {
        href: string;
        title: string;
    }[];
}

export const qna = [
    {
        question: "업무상 강점은 무엇인가요?",
        answer: `저의 특장점은 디자인에 대한 이해력입니다.<br/>UI/UX 디자인을 작업했던 경험이 있기 때문에, UI/UX에 대한 감각이 있습니다. 그래서 기획/디자인팀과 업무 커뮤니케이션이 원만합니다.`,
    },
    {
        question: "웹 개발에서 버그 이슈가 생겼을 경우 어떻게 대처하나요?",
        answer: `개발팀에서 일하면서 같이 공유하고 진행했던 대처 방안 흐름입니다.<br/><br/>1. 버그를 감지했을 때, 무조건 개발팀에 버그에 대한 문제 현상을 공유합니다.<br/>2. 사용자가 불편함을 느낄 수 있는 크리티컬한 문제일 경우, CS 팀에도 내용을 공지해서 빠른 대응을 할 수 있도록 합니다.<br/>3. 크리티컬한 이슈면 일단 서비스가 정상적으로 진행될 수 있도록 조처를 합니다.<br/>4. 버그의 근본적인 원인을 찾아서, 바로 문제를 해결할 수 있는지 오래 걸리는지 체크합니다.<br/>5. 바로 수정이 가능한 부분은 최대한 빠르게 검토하여 테스트한 후에 배포하고 내용을 알립니다.<br/>6. 오래 걸리는 이슈는 CS 팀에도 양해를 구하고 개발팀 내부에서 합심하여 문제를 해결하여 대처합니다.<br/>7. 버그 이슈가 해결되면 깃랩 이슈 보드에 기록하고, 개발팀 내에서 회고하는 시간을 갖습니다. (문제가 왜 발생했고, 어떻게 대응했으며 앞으로 이 이슈가 발생하지 않으려면 어떻게 조치하는 것이 좋을지에 대해서 솔직하게 얘기합니다.)<br/>8. 이후에 센트리(sentry)를 도입하여, 고객이 문의하기 전에 개발팀에서 먼저 감지하고 빠르게 대응할 수 있도록 조치하였습니다.`,
    },
    // {
    //     question : '어떤 회사를 원하나요?',
    //     answer: `제가 원하는 회사는 회사와 개인이 같이 성장할 수 있는 곳입니다.<br/>세상을 더 이롭게 하는 서비스인지, 그 회사는 무엇을 중요하게 여기는지 중요합니다.<br/>그리고 회사에서 일이 아닌 사람 때문에 에너지를 소모하고 싶지 않습니다. 건강한 문화를 가진 회사는 조직 간에 싸울 일이 없었습니다. 제 경험상 그렇습니다. 그저 본인의 일만 잘하면 될 뿐입니다. 대신에 성과에 대한 평가는 엄격할 수밖에 없습니다. 물론, 어떤 실수를 한다고 해서 바로 내치진 않을 것입니다. 분명하게 문제를 드러내고 어떻게 해결할지 같이 의견을 나눠서 해결하면 됩니다.<br/>애사심을 생기게 만드는 회사와 같이하고 싶습니다.`
    // },
    {
        question: "일에 대한 가치는 어떤가요?",
        answer: `일은 사회에서 '나'의 가치를 실현할 수 있는 좋은 도구라고 생각합니다.<br/>저는 일을 아주 오래오래 나이가 들어서도 계속하고 싶습니다. 사회의 구성원으로서 저의 몫을 해낼 때 삶의 원동력이 됩니다. 그래서 잘 할 수 있는, 재미있는, 좋은 서비스를 가진, 발전 가능성이 있는 일을 하고 싶습니다.<br/>생산적인 일을 할 때, 느끼는 보람과 성취감이 더 단단하고 가치 있는 사람으로 여기게 합니다. 일을 통해서 제 자신이 성장하는 것을 추구합니다.`,
    },
    // {
    //     question : '원하는 회사 위치는 어디인가요?',
    //     answer: `1. 판교 2. 서울(강남)`
    // },
    {
        question: "최종학력은 어떻게 되나요?",
        answer: `전공 : 청주대학교 환경조경학과<br/>학위 : 공학사<br/>취득연도(졸업연도) : 2011.2.18`,
    },
    {
        question: "조경설계에서 IT업종(웹 개발)으로 넘어오게 된 계기가 무엇인가요?",
        answer: `조경설계도 보람되고 가치 있는 직업이었습니다. 한 회사에서 사원에서 과장까지 진급도 하였습니다. 하지만 계속 이 일을 할 수 있겠냐는 스스로 질문을 던졌을 때 자신이 없었습니다. 설계는 특히 팀 작업으로 진행되기 때문에 다같이 야근하는 일이 너무 잦았고, 워라벨은 기대할 수 없었습니다.<br/><br/>더 늦기 전에 스스로 컨트롤할 수 있는 재미있는 직업을 다시 찾고자 하였고, 디자인을 계속 다뤄왔으니 디자인과 관련된 일을 알아보고 싶었습니다.<br/>평소에도 눈길을 끄는 웹사이트를 발견하면 '즐겨찾기'에 추가하는 나를 발견하고, 그러면 웹사이트를 만들어보면 어떨까 하는 호기심에 시작하게 되었습니다.`,
    },
    {
        question: "퍼블리셔에서 프론트엔드 개발자가 된 계기는 무엇인가요?",
        answer: `웹 퍼블리셔로 웹을 다루기 시작하다가 디자인 작업보다 프론트단 개발하는 것에 더 관심이 생겼습니다. 그 당시에 웹 디자인, HTML 마크업, CSS까지는 완전히 저의 담당이었고, JS 동적인 부분은 데이터 연결 전까지 할 수 있는 작업을 모두 해서 넘기는 식이었습니다. 그러다가 자바스크립트 영역을 더 많이, 잘 다루고 싶어졌고, 개발 관련하여 여러 스터디(프론트 백엔드 스터디 등)를 다니다가 좋은 인연을 만나서 스타트업 개발팀에서 프론트엔드 개발자로 일을 하게 되었습니다`,
    },
    // {
    //     question : '희망연봉이 있나요?',
    //     answer: `희망연봉은 3600만원 입니다.<br/>연봉협상 가능합니다.`
    // },
    {
        question: "일 외의 좋아하는 것과 취미활동은 무엇인가요?",
        answer: `자연과 운동을 좋아합니다.<br/>좋아하는 것을 나열하면 초록, 자연, 공원, 클라이밍 등이 있습니다.<br/>운동은 예전에 수영과 자전거 타기를 했었는데, 3년 전부터는 계속 클라이밍만 했습니다.<br/>클라이밍은 나이가 들어서도 꾸준히 할 수 있는 운동이라서 매력적인 운동이라 생각되어 접하게 되었습니다.`,
        link: [
            {
                href: "https://www.instagram.com/soheegreen",
                title: "instagram",
            },
        ],
    },
];
