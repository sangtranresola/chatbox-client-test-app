import './App.css'
// import { DateTime } from 'luxon';
// import Highlighter from "react-highlight-words";
import root from "react-shadow";

const contentRaw = `test link::: <a href=\"https://www.google.com\" rel=\"noopener noreferrer nofollow\">demolink</a>`

declare global {
  interface Window {
    __DECA_CLIENT__: any; // Replace 'any' with the appropriate type
  }
}

function App() {

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

  const sendMessageCW1 = () => {
    window.__DECA_CLIENT__01jewaj9mvg55djngcf8c3b3w6.chat.sendMessage('Hello from: 8c3b3w6');
  };

  const sendMessageCW2 = () => {
    window.__DECA_CLIENT__01jfem9f357ef4gpy5p6yk3eng.chat.sendMessage('Say Hi from: 6yk3eng');
  };



  return (
    <>
      {/* <div onClick={onToggleChatWindowDEVCAT}>
        ToggleChatbox1
      </div>
      <div onClick={onToggleChatWindow2}>
        ToggleChatbox2
      </div> */}
      <div className='flex col gap-4 mb-4'>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={triggerQA1}>
        OPEN QA ...f8c3b3w6 
      </button>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={sendMessageCW1}>
        SendMessage-f8c3b3w6 
      </button>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={sendMessageCW2}>
        SendMessage-p6yk3eng
      </button>
      </div>
      <ul className="list">
        <li className="list-item">
            <p className="link">お問い合わせメールは<a href="mailto:example@example.jp">こちら</a>をクリック</p>
        </li>
        <li className="list-item">
            <p className="link">お問い合わせフォームは<a href="https://sienplatz.form.kintoneapp.com/public/8c6b48ea691e3f2a8067543fb70ed82bcc92d2e46d234d301d5fee4f75fed838" target="_blank">こちら</a>をクリック</p>
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
