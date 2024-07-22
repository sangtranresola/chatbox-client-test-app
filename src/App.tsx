import { useEffect } from 'react';
import './App.css'
// import { useRef } from 'react';
// import { createStyles } from '@mantine/core';
// import root from 'react-shadow';
import ShadowRootExample from './components/ShadowRootExample';
import { init } from './utils/platform';
import Main from './components/Main';
// import Main from './components/Main';
// import root from 'react-shadow/styled-components';
// const Container = styled.div<ChatBoxUIAppProps>(props => ({
//   ...props.home.styling,
//   ...getBackgroundCss(props.home.background),
//   borderRadius: isMobileOnly ? '' : rem(props.chatbox.borderRadius),
//   width: isMobileOnly ? '100%' : rem(props.chatbox.width),
//   height: isMobileOnly ? '100%' : rem(props.chatbox.height),
// }));

// const useStyles = createStyles(theme => ({
//   customText: {
//     color: 'violet',
//     fontSize: '30px',
//     textDecoration: 'underline',
//   },
//   newText: {
//     marginTop: theme.spacing.md,
//     padding: [theme.spacing.xs, theme.spacing.md],
//   },
//   newButton: {
//     backgroundColor: 'red',
//   }
// }));


function App() {
  // const shadowHostRef = useRef(null);
  // const emotionRef = useRef(null);

   // Create Emotion cache with the shadow container
  //  const emotionCache = createCache({ container: emotionRef.current, prepend: false, key: 'css' });
  //  const mantineEmotionCache = createEmotionCache({ container: shadowHostRef.current, key: 'mantine'});

 

  return (
    <div>
      <ShadowRootExample />
    </div>
   
  )
}

export default App
