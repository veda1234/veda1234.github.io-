(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),r=n(26),s=n.n(r),c=(n(61),n(7)),o=n(11),l=n(12),d=n(13),h=n(41),j=n(56),b=n(19),m=n(35),p=n(10),u=(n(62),n(24)),f=n(30),g=n(1);var x=function(){return Object(g.jsx)("footer",{className:"mt-5",children:Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsx)(u.a,{className:"border-top justify-content-between p-3",children:Object(g.jsx)(f.a,{className:"p-0 d-flex justify-content-center",md:12,sm:12,children:"This site was made using React.js by Vedaanti Baliga"})})})})},O=n(21),w=n.p+"static/media/Vedaanti-Portfolio-Pic.55acb391.jpeg",y=n.p+"static/media/CAST-Website.291f2a60.png",k=n(46);var v=function(e){var t=Object(k.useSpring)({opacity:1,from:{opacity:0}});return Object(g.jsxs)(k.animated.div,{style:t,className:"v-card-info",children:[Object(g.jsx)("p",{className:"v-card-title",children:e.title}),Object(g.jsx)("p",{className:"v-card-sub-title",children:e.subTitle}),Object(g.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var I=function(e){return Object(g.jsxs)("div",{className:"d-inline-block v-card",onClick:function(t){return e.click(e.item)},children:[Object(g.jsx)("img",{className:"v-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(g.jsx)(v,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},T=n.p+"static/media/Resume_Vedaanti_Baliga.f44c2d9b.pdf",S=n.p+"static/media/AllLetters.ccf8134f.pdf",C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).handleCardClick=function(e,t){var n=Object(O.a)(i.state.items);n[e].selected=!n[e].selected,n.forEach((function(t){t.id!==e&&(t.selected=!1)})),i.setState({items:n})},i.makeItems=function(e){return e.map((function(e){return Object(g.jsx)(I,{item:e,click:function(t){return i.handleCardClick(e.id,t)}},e.id)}))},i.state={items:[{id:0,title:"About me",subTitle:"My journey to become a Computer Engineer",imgSrc:w,link:"/about",selected:!1},{id:1,title:"My Projects & Work experiences",subTitle:"Collection of the work that I have done till date and my resume",imgSrc:y,link:"/workex",selected:!1},{id:2,title:"Resume",subTitle:"My updated resume",imgSrc:y,link:T,selected:!1},{id:3,title:"My Achievements",subTitle:"Letters of recommendation and certificates that I have achieved upon project completion",imgSrc:y,link:S,selected:!1},{id:4,title:"Conferences and Publications",subTitle:"Projects submitted and accepted in conferences and publications",imgSrc:y,link:"/pubcon",selected:!1},{id:5,title:"Education",subTitle:"My school, undergraduate and masters",imgSrc:y,link:"https://google.com",selected:!1}]},i}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsx)(u.a,{md:4,className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),n}(a.a.Component),A=n(54);var P=function(e){return Object(g.jsx)(A.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsx)(u.a,{className:"justify-content-center py-5",children:Object(g.jsxs)(f.a,{md:8,sm:12,children:[e.title&&Object(g.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(g.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(g.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})};var B=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(P,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(g.jsx)(C,{})]})};var N=function(e){return Object(g.jsx)("p",{children:"This is the Contact page"})};var D=function(e){return Object(g.jsx)(b.a,{fluid:!0,children:Object(g.jsx)(u.a,{className:"justify-content-center",children:Object(g.jsx)(f.a,{md:8,children:e.children})})})};var M=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(P,{title:e.title}),Object(g.jsx)(D,{children:Object(g.jsx)("p",{children:"This is me"})})]})};var _=function(e){return window.scrollTo(0,0),Object(g.jsxs)("div",{children:[Object(g.jsx)(P,{title:e.title}),Object(g.jsx)("br",{}),Object(g.jsx)(P,{subTitle:"CAST - Contamination Assessment and Site management Tool"}),Object(g.jsxs)(D,{children:[Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What is CAST ?"})}),Object(g.jsxs)("p",{children:["CAST is a browser-based application made for the assessment of contaminated sites, it is open source and has an easy-to-use interface (which is not offered by any other software to date). To know more about this software in detail you can see the online guide(in development for the publication in revision) ",Object(g.jsx)("a",{href:"https://prabhasyadav.github.io/CASTbook/intro.html",target:"_blank",rel:"noopener noreferrer",children:"here."})]}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What was my role in developing this software?"})}),Object(g.jsxs)("p",{children:["I was the Technical lead for this project. I conceptualized and decided on all technical aspects of the project. I did the full-stack development for this project using the python-based microframework ",Object(g.jsx)("a",{href:"https://flask.palletsprojects.com/en/1.1.x/",target:"_blank",rel:"noopener noreferrer",children:"Flask"}),". I also deployed it on a server at IITD called ",Object(g.jsx)("a",{href:"https://baadal.iitd.ac.in/baadal",target:"_blank",rel:"noopener noreferrer",children:"Baadal"}),". The ",Object(g.jsx)("a",{href:"http://www.cast.iitd.ac.in",target:"_blank",rel:"noopener noreferrer",children:"Online deployment(currently in development for publication, desktop version) "}),"and ",Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:"Offline version "}),"(Github repo, with installation instructions) is now available."]}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What all did I learn while developing this project?"})}),Object(g.jsx)("p",{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"HTML5, CSS, Bootstrap"}),Object(g.jsx)("li",{children:"JavaScript"}),Object(g.jsx)("li",{children:"Structuring and cleaning data"}),Object(g.jsx)("li",{children:"Data Visualisation: Matplotlib, Plotly, Seaborn"}),Object(g.jsx)("li",{children:"MySQL and SQLAlchemy"}),Object(g.jsx)("li",{children:"Flask"}),Object(g.jsx)("li",{children:"Deploying on online servers"}),Object(g.jsx)("li",{children:"Nginx and Gunicorn"}),Object(g.jsx)("li",{children:"Deciding on the best suitable frameworks and libraries for a certain project"}),Object(g.jsx)("li",{children:"Developing a project from scratch"}),Object(g.jsx)("li",{children:"Conceptualizing  and understanding ideas to convert them into software (in this case groundwater contamination)"}),Object(g.jsx)("li",{children:"Creating professional presentations to showcase a project"}),Object(g.jsx)("li",{children:"Writing for a conference and a publication"}),Object(g.jsx)("li",{children:"Patience"})]})}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"My journey with CAST"})}),Object(g.jsxs)("p",{children:["During the final semester of my bachelor's, I was offered an internship at the ",Object(g.jsx)("b",{children:"Indian Institute of Technology"}),", Delhi where professors had collaborated with ",Object(g.jsx)("b",{children:"Technische Universit\xe4t Dresden"}),", Germany to develop a thesis on groundwater contamination in India and Europe. I then made this project a part of my bachelor thesis where I scored full marks. Following the success of the software, I was offered a position at IIT Delhi as a ",Object(g.jsx)("b",{children:"Senior Project Assistant(Technical)"})," for the completion of the same project."]}),Object(g.jsxs)("p",{children:["I learned full-stack for professional development and tried to develop a project that could encompass all the concepts that were given. I gave various presentations to professors at IITD as well as over video calls, internationally to professors at Technische Universit\xe4t Dresden and later at the ",Object(g.jsx)("b",{children:"University of Texas, Austin"}),"(they are now in collaboration with this project as well) and improved the software taking each view into consideration. This helped me in improving my communication skills as well. A lot of edits and improvements later, we started to publicize the project. Over time, I learned how to prepare posters, abstracts, and manuscripts for CAST."]}),Object(g.jsxs)("p",{children:["After a year, CAST got accepted in a ",Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:"conference and is now currently in revision for publication"}),". I even received ",Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:" certificates and letters of recommendation for this project."})]})]}),Object(g.jsx)(P,{subTitle:"Startup Experiences"}),Object(g.jsx)("a",{href:"https://www.pikkal.com/about",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)(P,{subTitle:"Pikkal & Co."})}),Object(g.jsxs)(D,{children:[Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What was my role at Pikkal & Co.?"})}),Object(g.jsxs)("p",{children:["I worked as an intern (remotely) at the company and as a ",Object(g.jsx)("b",{children:"lead"})," for the ",Object(g.jsx)("b",{children:"AI chatbot"})," team. Our aim was to create a chatbot(MVP) that could communicate with Pikkal's clients whenever they wished to. I had team lead meetings every week, where I had to showcase the current product and the future timeline for it. From learning about chatbots to integration in slack to storing data temporarily with Redis and a lot many steps, we reached phase 1. Our MVP was ready and was being used in testing. "]}),Object(g.jsxs)("p",{children:["After phase one with the chatbot, I was shifted to another project i.e. production for ",Object(g.jsx)("b",{children:"voice dynamics"}),", a platform that was supposed to give the company's clients a page for analytics and visualisations for their podcasts. I then helped the team to build meaningful visualisations from the scripts of various podcasts. In order to do this, we first had to extract the topics (topic generation) from the given scripts by using NLP and then finally take the statistics and results to make suitable visualisations."]}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What did I learn at Pikkal?"})}),Object(g.jsx)("p",{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Building chatbots"}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://api.slack.com/",target:"_blank",rel:"noopener noreferrer",children:"Integrating chatbots to Slack(Slack Python SDK, Events API)"})}),Object(g.jsx)("li",{children:"Docker"}),Object(g.jsx)("li",{children:"Gitlab"}),Object(g.jsx)("li",{children:"Virtual Box"}),Object(g.jsx)("li",{children:"Windows Subsystem for Linux"}),Object(g.jsx)("li",{children:"Redis"}),Object(g.jsx)("li",{children:"Vagrant"}),Object(g.jsx)("li",{children:"Charts.js"}),Object(g.jsx)("li",{children:"Basics of NLP"}),Object(g.jsx)("li",{children:"Leadership skills"}),Object(g.jsx)("li",{children:"Production level work"})]})}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"My journey at Pikkal & Co."})}),Object(g.jsx)("p",{children:"Based in Singapore, the company consisted of people from all over the world. As a result, there was a language barrier as well, so everyone had to be extremely patient and explain their doubts or ideas in a concise manner. In the beginning, it was a bit hectic for me as it was my first time in a startup so whenever the timelines used to come, I used to be shocked. How can any product be made in such a short time? It is then when I learned the concept of MVP (Minimum Viable Product) which helped me in understanding the timelines. While the company was extremely strict about the timelines, the place promoted an incredible learning environment and resulted in me learning a lot of things in a short time."}),Object(g.jsxs)("p",{children:["I also learned how to effectively utilize criticism as well, to listen more carefully, and not constantly defend myself. In conclusion, I learned a lot in the process as well as contributed to two products that are today being used by the company currently. I also got a  ",Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:"letter of recommendation from the CEO."})]})]}),Object(g.jsx)("a",{href:"https://www.linkedin.com/company/quant-binary/about/",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)(P,{subTitle:"QuantBinary"})}),Object(g.jsxs)(D,{children:[Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What was my role at QuantBinary?"})}),Object(g.jsxs)("p",{children:["I was hired in QuantBinary as an intern initially and was later ",Object(g.jsx)("b",{children:"promoted to Machine Learning Engineer"}),". I was appointed as the ",Object(g.jsx)("b",{children:"lead "}),"for the very first team in the nascent startup. My responsibilities were to manage a system for organization and collaboration of tasks (I created the management system in Airtable) regularly, hold regular stand-up calls, manage/help/guide the team, and assign everyone tasks. I was mainly responsible for developing statistical and mathematical quantitative algorithmic trading investment strategies, deploying, backtesting and testing them, then finally making their reports. I also did content generation for the company\u2019s Instagram page. This involved designing technical graphs, content writing, and research on various stocks."]}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What did I learn at QuantBinary?"})}),Object(g.jsx)("p",{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Basics of stock market"}),Object(g.jsx)("li",{children:"Fundamental and technical indicators"}),Object(g.jsx)("li",{children:"Statistical and mathematical fundamentals in finance"}),Object(g.jsx)("li",{children:"Developing algorithmic trading strategies in Python"}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://alpaca.markets/",target:"_blank",rel:"noopener noreferrer",children:"Alpaca API"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://www.backtrader.com/",target:"_blank",rel:"noopener noreferrer",children:"Backtesting (using Backtrader)"})}),Object(g.jsx)("li",{children:"Documentation"}),Object(g.jsx)("li",{children:"Content generation on social platforms"}),Object(g.jsx)("li",{children:"Deploying on PythonAnywhere"}),Object(g.jsx)("li",{children:"Creating a managment system (in this case Airtable)"}),Object(g.jsx)("li",{children:"Managing a team in a nascent startup"})]})}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"My journey at QuantBinary"})}),Object(g.jsx)("p",{children:"Based in Silicon Valley, QuantBinary is a stealth-mode startup. My initial tasks were just to get myself familiar with the stock market. Learning about the stock market made me realize that it is a whole new world that I had just started to explore. As time went by I started to advance along the way by going from long-time investments to long-short trading to volume-weighted average price indicators to finally making MVPs on Alpaca and backtesting them as well. Backtesting is a concept that was new for me in the stock market and at the same time, it is not being used much at the moment. "}),Object(g.jsxs)("p",{children:["While the technical aspects were going well, the management portion of the job was relatively tougher for me. Solving disagreements, clearing confusion, and motivating the teammates proved to be challenging. In conclusion, I learned how to manage a team, the basics of the stock market and algorithmic trading, content generation, and quantitative trading stategies. I also got a  ",Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:"letter of recommendation from the Founder."})]})]}),Object(g.jsx)(P,{subTitle:"My first technical internship"}),Object(g.jsx)("a",{href:"https://www.linkedin.com/company/quant-binary/about/",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)(P,{subTitle:"Samsung SDS"})}),Object(g.jsxs)(D,{children:[Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What did I do in Samsung SDS?"})}),Object(g.jsx)("p",{children:"I was hired as a student trainee at Samsung during my third year in college(BTech in Information Technology). I worked with the .NET team and started with testing their new live production site made for their service centers. I further started learning .NET by developing a calculator (windows form) as a first step, an Employee Management system (windows form), and finally as a finishing step, a Website for Employee Database Management."}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"What did I learn at Samsung SDS?"})}),Object(g.jsx)("p",{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Working on a professional level"}),Object(g.jsx)("li",{children:"ASP.NET "}),Object(g.jsx)("li",{children:"Creating simple interfaces"}),Object(g.jsx)("li",{children:"Basics of HTML, CSS and JavaScript"}),Object(g.jsx)("li",{children:"SQL"}),Object(g.jsx)("li",{children:"Testing a website in production"})]})}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"My journey at Samsung SDS"})}),Object(g.jsx)("p",{children:"On my first day at Samsung SDS, I was a bit nervous as it was my first internship and I wanted to perform well. As soon as I was assigned to the team, I was handed a big file of documentation which I was to go through. The documentation was extremely detailed, with timelines, diagrams, and the SDLC for the project. It was a good experience to read it as it brought the concepts that I studied in college to life. The live project that was going on at that time was a website for the Samsung service centers. They were basically trying to generate tickets online for each customer that wanted service. While the objective was simple, there were a lot of other components, like showing the closest available Samsung centers with this facility (they created an interface for this), generating and canceling tickets as customers wanted, updating the database, and assigning available timings. I was responsible for testing the website and reporting any bugs that came along. My second task was to start learning .NET and then consequently make applications using it. I was initially stuck with the framework as I had never done industrial-level production, but with a lot of help and guidance from the team lead, I picked up my pace and made windows forms and web applications using .NET. "}),Object(g.jsxs)("p",{children:["This being my first internship was a very big stepping stone in my career as it gave me an opportunity to work amongst skilled software engineers and learn a framework with their help. I received a  ",Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:"certificate "}),"from the company and a  ",Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:"letter of referral"})," from the team lead after the completion of my internship, I also submitted a  ",Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:"report"})," for the work on .NET"]})]})]})};var L=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(P,{title:e.title}),Object(g.jsx)(D,{children:Object(g.jsxs)("ol",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://github.com/CAST-IIT/CAST",target:"_blank",rel:"noopener noreferrer",children:"Yadav, P. K., Birla, S., Baliga, V., Liedl, R. Chahar, B. R., and Werth, C., Contamination Assessment and Site-management Tool (CAST) - A browser-based tool for site assessment, Groundwater (in revision)"})}),Object(g.jsxs)("li",{children:["Birla, S., Baliga, V., Yadav, P. K., Soni, V., Liedl, R., and Chahar, B. R., A browser-based user interface for the estimation of steady state plume lengths. ",Object(g.jsx)("a",{href:"https://www.bayceer.uni-bayreuth.de/FH-DGGV-2020/en/prog/bayconf/beitrag_detail.php?id_obj=18101",target:"_blank",rel:"noopener noreferrer",children:"FHDGG- 2020 Conference."})]})]})})]})},W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={title:"Vedaanti Baliga",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact me",path:"/contact"}],cardLinks:[{title:"Work Ex",path:"/workex"},{title:"Publications and Conferences",path:"/pubcon"}],home:{title:"Hi, I am Vedaanti Baliga",subTitle:"Full stack developer & Data scientist",text:"Still exploring the world of computers"},about:{title:"About me"},contact:{title:"Contact me here"},workex:{title:"Projects and work experiences"},pubcon:{title:"Publications and Conferences"}},i}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)(m.a,{children:Object(g.jsxs)(b.a,{className:"p-0",fluid:!0,children:[Object(g.jsxs)(h.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(g.jsx)(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(g.jsx)(h.a.Collapse,{id:"navbar-toggle",children:Object(g.jsxs)(j.a,{className:"ml-auto",children:[Object(g.jsx)(m.b,{className:"nav-link",to:"/",children:"Home"}),Object(g.jsx)(m.b,{className:"nav-link",to:"/about",children:"About"}),Object(g.jsx)(m.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(g.jsx)(p.a,{path:"/",exact:!0,render:function(){return Object(g.jsx)(B,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(g.jsx)(p.a,{path:"/about",render:function(){return Object(g.jsx)(M,{title:e.state.about.title})}}),Object(g.jsx)(p.a,{path:"/contact",render:function(){return Object(g.jsx)(N,{title:e.state.contact.title})}}),Object(g.jsx)(p.a,{path:"/workex",render:function(){return Object(g.jsx)(_,{title:e.state.workex.title})}}),Object(g.jsx)(p.a,{path:"/pubcon",render:function(){return Object(g.jsx)(L,{title:e.state.pubcon.title})}}),Object(g.jsx)(x,{})]})})}}]),n}(a.a.Component),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),r(e),s(e)}))};n(73);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root")),V()}},[[74,1,2]]]);
//# sourceMappingURL=main.20febe97.chunk.js.map