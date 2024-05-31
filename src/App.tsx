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

  return (
    <>
      <h1>Chatbox Client Demo</h1>
    </>
  )
}

export default App
