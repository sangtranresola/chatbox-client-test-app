import { useEffect, useRef } from 'react';
import { init } from '../utils/platform';
import { createProxy } from 'react-shadow';
import Main from './Main';
interface Props {
  // children: React.ReactNode;
}
const hostId = "host";
const ShadowRootExample = () => {
  useEffect(() => {
    const shadowRoot = document.getElementById('shadow-host');
    if (!shadowRoot) {
      console.log('Shadow root is not available');
      return;
    }
    console.log('Shadow root is available');
    const render = () => {
      if (!shadowRoot) {
        console.log('Shadow root is not available');
        return;
      }
      // if we already have the element with id 'app-element-id', then do not need to create it again
      if (shadowRoot.getElementById('app-element-id')) {
        return;
      }
      const element = document.createElement('div');
      element.id = 'app-element-id';

      shadowRoot.appendChild(element);
      init(element, <Main />);
    };

    const cleanTree = () => {
      console.log('cleaning tree', shadowRoot);
      const currentElement = shadowRoot.getElementById('app-element-id');
      if (currentElement) {
        shadowRoot.removeChild(currentElement);
      }

      const currentStyleElement = shadowRoot.getElementById('app-styles-element-id');
      if (currentStyleElement) {
        shadowRoot.removeChild(currentStyleElement);
      }
    };

    render();

    return () => {
      cleanTree();
    };
  }, []);

  return <div>
    
  </div>;
};

export default ShadowRootExample;
