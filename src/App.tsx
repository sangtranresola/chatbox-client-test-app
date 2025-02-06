import './App.css'
// import { DateTime } from 'luxon';
// import Highlighter from "react-highlight-words";
import root from "react-shadow";

// const wordsSample = ["tom", "lip", "the", "is", "aka", "loepc", "qoeir", "ac"];
// const textSample = `This is a sample paragraph containing the word we want to find.  tebefvw wdg sdwtv`
const contentRaw = `test link::: <a href=\"https://www.google.com\" rel=\"noopener noreferrer nofollow\">demolink</a>`

declare global {
  interface Window {
    __DECA_CLIENT__: any; // Replace 'any' with the appropriate type
  }
}

// type HighLightTextProps = {
//   words: string[];
//   text: string;
//   className?: string;
// };
// const HighLightText = ({ words, text, className }: HighLightTextProps) => {
//   return (
//     <Highlighter
//       highlightClassName={className}
//       searchWords={words}
//       autoEscape={true}
//       textToHighlight={text}
//     />
//   )
// };

function App() {
  // const basicFindWord =  (word, elementId) => {
  //   const element = document.getElementById(elementId);
  //   if (!element) return;

  //   const regex = new RegExp(`\\b${word}\\b`, 'gi');
  //   element.innerHTML = element.textContent.replace(regex, match => `<span class="bg-red-500">${match}</span>`);
  // };

  // const doHighlightWord = (word, elementId) =>{
  //   const element = document.getElementById(elementId);
  //   if (!element) return;

  //   const regex = new RegExp(`\\b(${word})\\b`, 'gi');
  //   const content = element.innerHTML;
  //   const matches = [...content.matchAll(regex)];

  //   element.innerHTML = content.replace(regex, '<span class="highlight">$1</span>');

  //   const highlights = document.querySelectorAll('.highlight');
  //   const coordinates = [];

  //   highlights.forEach(highlight => {
  //       const rect = highlight.getBoundingClientRect();
  //       coordinates.push({
  //           top: rect.top + window.scrollY,
  //           left: rect.left + window.scrollX,
  //           right: rect.right + window.scrollX,
  //           bottom: rect.bottom + window.scrollY
  //       });
  //   });

  //   console.log(coordinates);
  // }


  const onToggleChatWindowDEVCAT = () => {
    // const thisChatId = '01hwmc2d7fyenbb0cbxdf66f2x'
    // const thisChat = window[`__DECA_CLIENT__${thisChatId}`]
    // console.log('toggle chatwindow1', thisChat);
    // if (thisChat) {
    //   thisChat.chat.toggleChatWindow(thisChatId);
    // }
  //  window.__DECA_CLIENT__01hz4dpn25es3kmvahskfzze9e.chat.toggleChatWindow('01hz4dpn25es3kmvahskfzze9e')
  // window.__DECA_CLIENT__01hwmc2d7fyenbb0cbxdf66f2x.chat.toggleChatWindow()
  window.__DECA_CLIENT__01j2avstxrph1zkwgnp7whcr18.chat.toggleChatWindow();
  };

  // onclick="window.__DECA_CLIENT__01hwmc2d7fyenbb0cbxdf66f2x.chat.toggleChatWindow('01hwmc2d7fyenbb0cbxdf66f2x')"

  const onToggleChatWindow2 = () => {    
    // const thisChatId = '01hz4dpn25es3kmvahskfzze9e'
    // const thisChat = window[`__DECA_CLIENT__${thisChatId}`]
    // console.log('toggle chatwindow2', thisChat);
    // if (thisChat) {
    //   console.log('run chatwindow2', thisChat);
    //   thisChat.chat.toggleChatWindow(thisChatId);
    // }
    // window.__DECA_CLIENT__01j69k1ddvyx35xyc9zj1j19s8.chat.toggleChatWindow('01j69k1ddvyx35xyc9zj1j19s8');
    window.__DECA_CLIENT__01hz4dpn25es3kmvahskfzze9e.chat.toggleChatWindow('01hz4dpn25es3kmvahskfzze9e', '01hz4dpn25es3kmvahskfzze9e333');
    console.log('toggle chatwindow2');
  };

  const triggerQA1= () => {
    window.__DECA_CLIENT__01jewaj9mvg55djngcf8c3b3w6.chat.toggleChatWindow();
  };

  return (
    <>
      {/* <div onClick={onToggleChatWindowDEVCAT}>
        ToggleChatbox1
      </div>
      <div onClick={onToggleChatWindow2}>
        ToggleChatbox2
      </div> */}
      <div onClick={triggerQA1}>
        Trigger QA 
      </div>
      <h1 className="text-3xl font-bold underline border-red italic hover:not-italic">
        Hello World
      </h1>
      <ul className="list">
        <li className="list-item">
            <p className="index2">
              <img src="../images/tel2.png" /><a href="tel:0120-000-000">0120-000-000</a></p>
        </li>
        <li className="list-item">
            <p className="link">お問い合わせメールは<a href="mailto:example@example.jp">こちら</a>をクリック</p>
        </li>
        <li className="list-item">
            <p className="link">お問い合わせフォームは<a href="https://sienplatz.form.kintoneapp.com/public/8c6b48ea691e3f2a8067543fb70ed82bcc92d2e46d234d301d5fee4f75fed838" target="_blank">こちら</a>をクリック</p>
        </li>
        <li className="list-item">
            <p className="remote-img"><img src="../images/remote002.png" /></p>
        </li>
      </ul>
      <root.div>
        <div dangerouslySetInnerHTML={{ __html: contentRaw }}></div>
      </root.div>
      <img src="https://picsum.photos/200/300" alt="random" />
    </>
  )
}

export default App
