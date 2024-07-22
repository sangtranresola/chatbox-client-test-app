import './App.css'
import React, { useRef } from 'react';
import { MantineProvider, Button, createEmotionCache, createStyles, Text, Portal, Container } from '@mantine/core';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import root from 'react-shadow';
// import root from 'react-shadow/styled-components';
// import root from 'react-shadow/emotion';
import { css } from '@emotion/css'
import styled from '@emotion/styled';

// const Container = styled.div<ChatBoxUIAppProps>(props => ({
//   ...props.home.styling,
//   ...getBackgroundCss(props.home.background),
//   borderRadius: isMobileOnly ? '' : rem(props.chatbox.borderRadius),
//   width: isMobileOnly ? '100%' : rem(props.chatbox.width),
//   height: isMobileOnly ? '100%' : rem(props.chatbox.height),
// }));

const useStyles = createStyles(theme => ({
  customText: {
    color: 'violet',
    fontSize: '30px',
    textDecoration: 'underline',
  },
  newText: {
    marginTop: theme.spacing.md,
    padding: [theme.spacing.xs, theme.spacing.md],
  },
  newButton: {
    backgroundColor: 'red',
  }
}));


function App() {
  const { classes, cx } = useStyles();

  const shadowHostRef = useRef(null);
  const emotionRef = useRef(null);

   // Create Emotion cache with the shadow container
   const emotionCache = createCache({ container: emotionRef.current, prepend: false, key: 'css' });
   const mantineEmotionCache = createEmotionCache({ container: shadowHostRef.current, key: 'mantine'});

  return (
    <>
    <root.div>
      <CacheProvider value={emotionCache}>
        <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={mantineEmotionCache} theme={{
          components: {
            Portal: {
              defaultProps: {
                Container: shadowHostRef.current
              }
            }
          }
        }}>
            <div ref={shadowHostRef}></div>
            <div ref={emotionRef}></div>
            <Text className={classes.customText}>This is Mnt text</Text>           
            <Button className={classes.newButton}>Mantin btton</Button>
        </MantineProvider>
      </CacheProvider>
    </root.div>
      <h1 className="text-3xl font-bold underline border-red italic hover:not-italic">
        Hello world!
      </h1>
      <ul className="list">
        <li className="list-item">
            <p className="index2">
            <img src="../images/tel2.png" /><a href="tel:0120-000-000">0120-000-0001</a></p>
        </li>
        <li className="list-item">
            <p className="comment">example@example.jp</p>
            <p className="link">mail<a href="mailto:example@example.jp">mail</a>mail</p>
        </li>
        <li className="list-item">
            <p className="link">mail<a href="https://sienplatz.form.kintoneapp.com/public/8c6b48ea691e3f2a8067543fb70ed82bcc92d2e46d234d301d5fee4f75fed838" target="_blank">こちら</a>をクリック</p>
        </li>
        <li className="list-item">
            <p className="remote-img"><img src="../images/remote002.png" /></p>
        </li>
      </ul>
    </>
  )
}

export default App
