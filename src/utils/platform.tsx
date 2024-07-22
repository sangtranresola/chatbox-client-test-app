import ReactDOM from 'react-dom/client'
import createCache from "@emotion/cache";
import CustomEmotionCacheProvider from "../components/CustomEmotionCacheProvider";
import { MantineProvider, createEmotionCache } from '@mantine/core';
import { themeConfigurations } from '../constants/themeConfiguration';
// import css from "@mantine/core";


export const init = (domElement: HTMLDivElement, children: 
React.ReactNode
) => {
  const shadowrootCache = createCache({
    key: "shadowroot-cache",
    container: domElement,
    prepend: true
  });

  const shadowRootCacheForMantine = createEmotionCache({
    key: "mantine",
    container: domElement,
    // prepend: true
    insertionPoint: domElement
  });

//   ReactDOM.createRoot(domElement).render(
//     <CustomEmotionCacheProvider cache={shadowrootCache}>
//       {children}
//     </CustomEmotionCacheProvider>
// );

console.log('run init', new Date());

// setInterval(() => {
//   console.log('run interval to copy global style to shadow root', new Date());
//   // copy all the tag style with attribute data-emotion="css-global" to shadow root style
//   const globalStyle = document.querySelectorAll('style[data-emotion="css-global"]');
//   const totalNumberOfStyleInDocument = document.querySelectorAll('style[data-emotion="css-global"]').length;
//   if (globalStyle) {
//     globalStyle.forEach((style) => {
//       // if it already exists, do not need to create it again, check the value
//       const totalNumberOfStyleInDomElement = domElement.querySelectorAll('style[data-emotion="css-global"]').length;
//       if (totalNumberOfStyleInDocument === totalNumberOfStyleInDomElement) {
//         console.log('do not need to create it again, we already have the style in the shadow root');
//         return;
//       }
//       const newStyle = document.createElement('style');
//       newStyle.innerHTML = style.innerHTML;
//       newStyle.setAttribute('data-emotion', 'css-global');      
//       domElement.insertBefore(newStyle, domElement.firstElementChild);
//     });
//   }
// }, 1000);

ReactDOM.createRoot(domElement).render(
  <CustomEmotionCacheProvider cache={shadowrootCache}>
    <MantineProvider theme={themeConfigurations} emotionCache={shadowRootCacheForMantine} withCSSVariables withNormalizeCSS>
      <style dangerouslySetInnerHTML={{ __html: `
        .deca-test {
          color: red;
        }
      ` }} />
      {children}
    </MantineProvider>
    </CustomEmotionCacheProvider>
);


//   ReactDOM.create(
//     <CustomEmotionCacheProvider cache={shadowrootCache}>
//       {children}
//     </CustomEmotionCacheProvider>,
//     domElement
//   );
};

