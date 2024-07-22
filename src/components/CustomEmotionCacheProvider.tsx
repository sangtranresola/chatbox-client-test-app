import { FunctionComponent, useEffect, useState } from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";

interface Props {
  cache: EmotionCache;
  children: React.ReactNode;
}

const CustomEmotionCacheProvider: FunctionComponent<Props> = ({
  cache,
  children
}) => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => setIsFirstRender(false), []);

  return (
    <CacheProvider value={cache}>{!isFirstRender && children}</CacheProvider>
  );
};

export default CustomEmotionCacheProvider;
