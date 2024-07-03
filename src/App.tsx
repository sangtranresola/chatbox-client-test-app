import './App.css'
import { DateTime } from 'luxon';

function App() {
  function getCurrentDate(dateTime: string | Date, format: string) {
    if (!dateTime) return '';
    const dateTest = dateTime instanceof Date ? dateTime.toISOString() : dateTime;
    const dateTimeFormat = format || 'Y年m月d日 H:i:s';
  
    if (dateTime === 'now')
      return DateTime.now().toFormat(dateTimeFormat);
    
    return DateTime.fromISO(dateTest).toFormat(dateTimeFormat);
  }
  const markdown2 = `<h1>Hi</h1> <h3>Pluto</h3>! **Welcome**  to <br/> the <br/> <h2 class="code-line" data-line-start=14 data-line-end=15 ><a id="Features_14"></a>Features</h2><ul>
  <img src="https://picsum.photos/200/300" alt="placeholder" />
  </ul>`
  return (
    <>
      <h1 className="text-3xl font-bold underline border-red italic hover:not-italic">
        Hello world!
      </h1>
      <ul className="list">
					<li className="list-item">
						<div className="item2">
							<p className="index2">
                <img src="../images/tel2.png" /><a href="tel:0120-000-000">0120-000-000</a></p>
							<p className="note">※携帯電話・スマートフォンからもご利用になれます。</p>
						</div>
					</li>
					<li className="list-item">
						<div className="item2">
							<p className="comment">example@example.jp</p>
							<p className="link">お問い合わせメールは<a href="mailto:example@example.jp">こちら</a>をクリック</p>
						</div>
					</li>
					<li className="list-item">
						<div className="item2">
							<p className="link">お問い合わせフォームは<a href="https://sienplatz.form.kintoneapp.com/public/8c6b48ea691e3f2a8067543fb70ed82bcc92d2e46d234d301d5fee4f75fed838" target="_blank">こちら</a>をクリック</p>
						</div>
					</li>
					<li className="list-item">
						<div className="item1 remote">
							<p className="index">リモートサポート</p>
							<p className="remote-img"><img src="../images/remote002.png" /></p>
						</div>
					</li>
				</ul>
      <span
          className="font-base"
          dangerouslySetInnerHTML={{
            __html: markdown2,
          }}
        ></span>
    </>
  )
}

export default App
