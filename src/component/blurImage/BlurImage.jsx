import React, { useState, useCallback } from "react";
import { useBlurhash } from "./useHash";
import { useInView } from "react-intersection-observer";


export function BlurImg(allProps) {
  const { loading = "lazy", blurhash, style, ...props } = allProps;

  const [imgLoaded, setImgLoaded] = useState(false);
  const [ref, inView] = useInView({ rootMargin: "110%" });
  const blurUrl = useBlurhash(!imgLoaded && inView ? blurhash : null);

  const handleOnLoad = useCallback(() => {
    setImgLoaded(true);
  }, []);

  const newStyle = blurUrl
    ? {
        ...style,
        backgroundImage: `url("${blurUrl}")`,
        backgroundSize:
          props.width && props.height
            ? `${props.width}px ${props.height}px`
            : "100% 100%"
      }
    : style;

  return (
    <img
      alt="Blur hash"
      ref={ref}
      {...props}
      loading={loading}
      onLoad={handleOnLoad}
      style={newStyle}
    />
  );
}
