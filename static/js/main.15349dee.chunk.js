(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/logo.896b6e24.png"},20:function(e,t,n){e.exports=n(43)},26:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(15),l=n.n(s),i=(n(26),n(16)),o=n(3),u=n(8),c=n(10),m=n(9),g=n(11),d=n(4),h=n(17),f=n.n(h),v=function e(t,n,a){var r=this;Object(o.a)(this,e),this.getId=function(){return r.id},this.setConflicts=function(){r.conflicts=!0},this.getConflicts=function(){return r.conflicts},this.getAnswer=function(e){return 1===r.answers[e]},this.getText=function(){return r.text},this.id=t,this.text=n,this.conflicts=!1,this.answers=a},p=function e(t,n,a){var r=this;Object(o.a)(this,e),this.getId=function(){return r.id},this.setAsked=function(){r.asked=!0},this.getAsked=function(){return r.asked},this.getText=function(){return r.text},this.getDescription=function(){return r.shortdesc},this.id=t,this.text=n,this.asked=!1,this.shortdesc=a},k=function e(t,n,a,r){var s=this;Object(o.a)(this,e),this.getId=function(){return s.id},this.getIssueId=function(){return s.issue_id},this.getDescription=function(){return s.shortdesc},this.getText=function(){return s.text},this.id=t,this.issue_id=n,this.shortdesc=a,this.text=r},b=function e(){var t=this;Object(o.a)(this,e),this.getQuestionText=function(){return t.currentQuestion.getText()},this.getQuestionDescription=function(){return t.currentQuestion.getDescription()},this.hasMoreQuestions=function(){return t.moreQuestions},this.hasIssueSuggestion=function(){return t.issueSuggestion},this.nextQuestion=function(){var e=0,n=-1,a=!1;for(var r in t.questions)if(!t.questions[r].getAsked()){var s=0;for(var l in t.issues){var i=t.issues[l];!i.getConflicts()&&i.getAnswer(r)&&s++}var o=s/t.issues.length,u=-o*Math.log(o+1e-11)+(1-o)*Math.log(1-o+1e-11);u>e&&0!==s&&(e=u,n=r,a=!0)}if(a)t.currentQuestion=t.questions[n],t.questions[n].setAsked();else for(var c in t.moreQuestions=!1,t.issues)t.issues[c].getConflicts()||(t.issueSuggestion=!0)},this.getIssueSuggestion=function(){var e={};for(var n in t.issues){var a=t.issues[n];a.getConflicts()||(e[n]=a.getText())}return e},this.setSuggestionAnswer=function(e){if(-1!==e)for(var n in t.foundIssue=t.issues[e],t.solutions)if(t.solutions[n].getIssueId()===t.foundIssue.getId()){console.log("Found solution! "+n),t.foundSolution=!0;break}t.issueSuggestion=!1},this.setQuestionAnswer=function(e){var n=[];for(var a in t.issues){var r=t.issues[a];r.getAnswer(t.currentQuestion.getId())!==e?r.setConflicts():n.push(r)}t.issues=n},this.getResult=function(){return null!==t.foundIssue?t.foundIssue.getText():null},this.hasSolution=function(){return t.foundSolution},this.getSolutions=function(){var e={};for(var n in t.solutions)t.solutions[n].getIssueId()===t.foundIssue.getId()&&(e[n]=[t.solutions[n].getDescription(),t.solutions[n].getText()],t.foundSolution=!0);return console.log("solutions: "+e),e},this.setSolutionAnswer=function(e){t.foundSolution=!1},this.questions=[new p(0,"Hittar vi felet inomhus?","Vart p\xe5 Fastigheten: Huset"),new p(1,"\xc4r det fel p\xe5 n\xe5got i l\xe4genheten?","Vart i Huset: L\xe4genheten"),new p(2,"Hittar vi felet i badrummet?","Vart i L\xe4genheten: Badrummet"),new p(3,"Vill du felanm\xe4la n\xe5got i k\xf6ket?","Vart i L\xe4genheten: K\xf6ket"),new p(4,"\xc4r det fel p\xe5 n\xe5got i tv\xe4ttstugan?","Vart i huset: Tv\xe4ttstugan"),new p(5,"Vill du felanm\xe4la en vitvara?","Kategori: En Vitvara"),new p(6,"Vill du felanm\xe4la n\xe5got som g\xe5r p\xe5 str\xf6m?","Kategori: Str\xf6mf\xf6rs\xf6rjt"),new p(7,"\xc4r det n\xe5got som inte fungerar?","Kategori: Trasigt"),new p(8,"Har felet med temperaturen i l\xe4genheten att g\xf6ra?","Kategori: Temperatur"),new p(9,"Strular TV, Internet eller telefonin?","Kategori: TV, Telefoni & Bredband"),new p(10,"Beh\xf6ver objektet vatten f\xf6r att fungera?","Kategori: Kommer i kontakt med vatten")],this.issues=[new v(0,"Badkar",[1,1,1,0,0,0,0,0,0,0,1]),new v(1,"Spisen",[1,1,0,1,0,1,1,1,0,0,0]),new v(2,"Tv\xe4ttmaskin",[1,1,1,1,0,1,1,1,0,0,1]),new v(3,"Nerskr\xe4pning",[0,0,0,0,0,0,0,0,0,0,0]),new v(4,"Delad tv\xe4ttmaskin",[1,0,0,0,1,1,1,1,0,0,1]),new v(5,"Delad torktumlare",[1,0,0,0,1,1,1,1,0,0,0]),new v(6,"Spisfl\xe4kt",[1,1,0,1,0,1,1,1,0,0,0]),new v(7,"F\xf6r varmt i l\xe4genheten",[1,1,0,0,0,0,0,0,1,0,0]),new v(8,"F\xf6r kallt i l\xe4genheten",[1,1,0,0,0,0,0,0,1,0,0]),new v(9,"TV, Bredband & Telefoni",[1,1,0,0,0,0,1,1,0,1,0]),new v(10,"Toalett",[1,1,1,0,0,0,0,1,0,0,1]),new v(11,"Kylen",[1,1,0,1,0,1,1,1,0,0,0]),new v(12,"Frysen",[1,1,0,1,0,1,1,1,0,0,0]),new v(13,"Utomhusbelysning",[0,0,0,0,0,1,1,0,0,0,0]),new v(14,"Belysning inomhus",[1,0,0,1,0,0,1,1,0,0,0])],this.solutions=[new k(0,6,"","Det vanligaste felet som sker med fl\xe4kten \xe4r att filtret beh\xf6ver reng\xf6ras eller bytas.                <br/><br/>                Fl\xe4ktfiltret \xe4r en s\xe5 kallad f\xf6rbrukningsvara, vilket \xe4r en vara som du som hyresg\xe4st ansvarar f\xf6r att underh\xe5lla, byta och k\xf6pa.                 Andra f\xf6rbrukningsvaror \xe4r till exempelvis gl\xf6dlampor.                  Med v\xe4nligaste h\xe4lsningar, Valter"),new k(1,6,"Best\xe4ll ett fl\xe4ktfilter som passar just din fl\xe4kt","L\xe4nken tar dig till ett filter som passar din                 fl\xe4kt <a href='https://www.kjell.com/se/sortiment/hem-kontor-fritid/kokstillbehor/flaktfilter/aktivt-kolfilter-for-koksflakt-250-g-m--p60409'>kjell co</a>"),new k(2,6,"H\xe4r hittar du en video som visar hur man byter & reng\xf6r fl\xe4ktfiltret","<a href='https://www.youtube.com/watch?v=Xd1_RzjBPpc'>youtube video</a>"),new k(3,9,"","Ibland s\xe5 \xe4r det knepigt med tekniken och jag som \xe4r din digitala fastighetsf\xf6rvaltare ger g\xe4rna n\xe5gra tips p\xe5 hur man kan l\xf6sa strulet,                 men det \xe4r f\xf6rvaltaren eller fastighets\xe4garen som avhj\xe4lper felet d\xe5 de inte f\xe5r l\xe4gga sig i hur hyresg\xe4ster vill koppla upp sig. I huset s\xe5 levererar COM-HEM TV och bredband via COM-HEM uttagen. Grundutbudet levereras till alla hush\xe5ll,men internet best\xe4ller vardera hyresg\xe4st sj\xe4lv fr\xe5n COM-HEM."),new k(4,9,"\xc4r det n\xe5got som inte fungerar med TV;n eller internetet?","Antingen kan kontakta COM-HEMs kundtj\xe4nst p\xe5 92 222 eller fels\xf6ka sj\xe4lv via deras guide som du hittar via denna l\xe4nk https://www.comhem.se/bredband "),new k(5,9,"Best\xe4ll Bredband, TV eller telefoni fr\xe5n COM-HEM","https://www.comhem.se/bredband"),new k(6,7,"Vad g\xe4ller generellt?","Folkh\xe4lsomyndigheten rekommenderar att temperaturen i en l\xe4genhet b\xf6r vara mellan 20 och 23 grader.             Temperaturen ska aldrig vara l\xe4gre \xe4n 18 grader, och inte varmare \xe4n 26 grader p\xe5 sommaren \u2013 med vissa undantag."),new k(6,7,"Vad g\xe4ller vid v\xe4rmeb\xf6lja?","Vid extrema v\xe4derf\xf6rh\xe5llanden g\xe4ller inte Folkh\xe4lsomyndighetens allm\xe4nna r\xe5d. Under en v\xe4rmeb\xf6lja kan du som hyresg\xe4st beh\xf6va acceptera temperaturer upp till 28 grader."),new k(6,7,"Tips f\xf6r att kyla ner l\xe4genheten","Tv\xe5 saker som hj\xe4lper under v\xe4rmeb\xf6lja \xe4r dra ner persienner och gardiner, v\xe4dra p\xe5 n\xe4tterna och dricka ordentligt med vatten.             Beh\xf6vs det ytterligare svalkning s\xe5 kan \xe4ven en fl\xe4ckt svalka - H\xe4r hittar fl\xe4kten som vi som programmerar valter anv\xe4nder under varma sommardagar https://www.clasohlson.com/se/Golvfl%C3%A4kt-42-cm-/36-7816 "),new k(7,8,"Vad g\xe4ller generellt?","Folkh\xe4lsomyndigheten rekommenderar att temperaturen i en l\xe4genhet b\xf6r vara mellan 20 och 23 grader.             Temperaturen ska aldrig vara l\xe4gre \xe4n 18 grader, och inte varmare \xe4n 26 grader p\xe5 sommaren \u2013 med vissa undantag.")],this.moreQuestions=!0,this.issueSuggestion=!1,this.foundIssue=null,this.foundSolution=!1,this.currentQuestion=this.questions[0],this.questions[0].setAsked()},w=(n(38),n(18)),E=n.n(w),S=n(19),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).resetReport=function(){n.setState({report:new b}),n.setState({qcount:0}),n.setState({textarea_value:""}),n.setState({textname_value:""}),n.setState({textemail_value:""}),n.setState({phone_value:""}),n.setState({apart_value:""}),n.setState({address_value:""}),n.setState({positive_answers:[]})},n.handleClick=function(e){n.setState({currentChoice:e})},n.getTextbox=function(){return r.a.createElement("div",{className:"FaultReportText"},r.a.createElement("div",{className:"FaultReportHeader"},"Beskriv problemet:"),r.a.createElement("textarea",{rows:"20",cols:"50"}),r.a.createElement("br",null),r.a.createElement("button",{className:"FaultReportButton"},"Skicka"))},n.getNextQuestion=function(){var e=n.state.report.getQuestion();null!=e?n.setState({currentQuestion:e}):n.setState({moreQuestions:!1})},n.answerReport=function(e){e&&n.state.positive_answers.push(n.state.report.getQuestionDescription()),console.log(n.state.positive_answers),n.state.report.setQuestionAnswer(e),n.state.report.nextQuestion(),n.setState({qcount:n.state.qcount+1})},n.answerSuggestion=function(e){n.state.report.setSuggestionAnswer(e),n.setState({qcount:n.state.qcount+1})},n.answerSolution=function(e){-1==e?(n.state.report.setSolutionAnswer(e),n.setState({qcount:n.state.qcount+1})):n.resetReport()},n.getResult=function(){return null!=n.state.report.getResult()?r.a.createElement("span",null,"Identifierat fel: ",n.state.report.getResult()):r.a.createElement("span",null,"Hej, Valter h\xe4r! ",r.a.createElement("br",null)," Tyv\xe4rr s\xe5 hittade jag ingen l\xf6sning p\xe5 din felanm\xe4lan. ",r.a.createElement("br",null),"Beskriv felet nedan s\xe5 kommer din riktiga fastighetsf\xf6rvaltare hj\xe4lpa dig inom kort. ")},n.handleChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.sendReport=function(e){e.preventDefault();var t={from_name:"Nejbor",to_name:n.state.textname_value,report_id:Math.floor(1e3*Math.random())+100,message_html:n.state.textarea_value,phone_number:n.state.phone_value,fault_adress:n.state.address_value,apartment_number:n.state.apart_value,to_email:n.state.textemail_value,problem:"",answers:""};for(var a in null!==n.state.report.getResult()&&(t.problem=n.state.report.getResult()),t.answers+="<ul>",n.state.positive_answers)t.answers+="<li>"+n.state.positive_answers[a]+"</li>";t.answers+="</ul>",S.send("gmail","template_7tYScFrN",t,"user_z3koOKn5N8lxWwWIlvVob").then(function(e){console.log("Success!",e.status,e.text)},function(e){console.log(e)})},n.getQuestions=function(){if(n.state.report.hasMoreQuestions())return r.a.createElement("div",{className:"FaultReportQuestions"},r.a.createElement("div",{className:"FaultReportQuestionsQuestion"},n.state.report.getQuestionText()),r.a.createElement("div",{className:"FaultReportQuestionsChoices"},r.a.createElement("div",{className:"FaultReportQuestionsItem NegChoice",onClick:function(){return n.answerReport(!1)}},r.a.createElement("div",{className:"FaultReportQuestionsItemText"},"Nej")),r.a.createElement("div",{className:"FaultReportQuestionsItem",onClick:function(){return n.answerReport(!0)}},r.a.createElement("div",{className:"FaultReportQuestionsItemText"},"Ja"))));if(n.state.report.hasIssueSuggestion()){var e=n.state.report.getIssueSuggestion(),t=Object.keys(e).map(function(t,n){var a=this;return r.a.createElement("div",{className:"FaultReportSuggestionItem",key:t,onClick:function(){return a.answerSuggestion(t)}},e[t])},Object(d.a)(Object(d.a)(n)));return r.a.createElement("div",{className:"FaultReportSuggestion"},"Har du problem med n\xe5got av f\xf6ljande?",r.a.createElement("div",{className:"FaultReportSuggestionChoices"},t,r.a.createElement("div",{className:"FaultReportSuggestionItem NegChoice",onClick:function(){return n.answerSuggestion(-1)}},"Nej")))}if(n.state.report.hasSolution()){var a=n.state.report.getSolutions();console.log("sols: "+a+" len: "+Object.keys(a).length);var s=Object.keys(a).map(function(e,t){return console.log(e+" : "+t),r.a.createElement("div",{className:"FaultReportSolutionItem",key:e,onClick:function(){},tabIndex:"1"},r.a.createElement("div",{className:"FaultReportSolutionItemHeader"},a[e][0]),r.a.createElement("div",{className:"FaultReportSolutionItemText"},f()(a[e][1])),function(){if(0==e&Object.keys(a).length>1)return r.a.createElement("div",null," H\xe4r hittar du n\xe5gra svar och l\xf6sningar problem:")}())},Object(d.a)(Object(d.a)(n)));return r.a.createElement("div",{className:"FaultReportSolutions"},"Hej Valter h\xe4r!",r.a.createElement("br",null),r.a.createElement("div",{className:"FaultReportSolutionChoices"},s,r.a.createElement("br",null),"Lyckades jag avhj\xe4lpa felet?",r.a.createElement("div",{className:"FaultReportSolutionItem PosChoice",onClick:function(){return n.answerSolution(1)}},"Ja"),r.a.createElement("div",{className:"FaultReportSolutionItem NegChoice",onClick:function(){return n.answerSolution(-1)}},"Nej")))}return r.a.createElement("div",{className:"FaultReportResult"},r.a.createElement("div",{className:"FaultReportResultQuestion"},n.getResult()),r.a.createElement("div",{className:"FaultReportResultInput"},r.a.createElement("br",null),"Namn:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"textname_value",onChange:function(e){return n.handleChange(e)}}),r.a.createElement("br",null),"Email:",r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"textemail_value",onChange:function(e){return n.handleChange(e)}}),r.a.createElement("br",null),"Adress:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"address_value",onChange:function(e){return n.handleChange(e)}}),r.a.createElement("br",null),"Telefon Nr:",r.a.createElement("br",null),r.a.createElement("input",{type:"tel",name:"phone_value",onChange:function(e){return n.handleChange(e)}}),r.a.createElement("br",null),"L\xe4genhetsnr:",r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"apart_value",onChange:function(e){return n.handleChange(e)}}),r.a.createElement("br",null),"L\xe4gg till bild:",r.a.createElement("br",null),r.a.createElement("input",{type:"file",accept:"image/*",capture:!0}),r.a.createElement("br",null),r.a.createElement("br",null),"Beskriv problemet:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{rows:"10",cols:"40",name:"textarea_value",onChange:function(e){return n.handleChange(e)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:function(e){return n.sendReport(e)}},"Skicka Felanm\xe4lan")))},n.state={report:new b,qcount:0,textarea_value:"",textname_value:"",textemail_value:"",phone_value:"",apart_value:"",address_value:"",positive_answers:[]},n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"FaultReport"},r.a.createElement("img",{src:E.a,alt:""}),r.a.createElement("h1",{className:"FaultReportTitle"},"Felanm\xe4lan"),this.getQuestions())}}]),t}(a.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Screen"},r.a.createElement(j,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(45);l.a.render(r.a.createElement(C.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.15349dee.chunk.js.map