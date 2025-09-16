import React from 'react';

export default function LazyVideo({
  src,
  sources,
  poster,
  className = '',
  style,
  videoStyle,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = 'metadata',
  onCanPlay,
  videoRef,
  children,
}) {
  const rootRef = React.useRef(null);
  const innerVideoRef = React.useRef(null);
  const refToUse = videoRef || innerVideoRef;
  const [isVisible, setIsVisible] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [isBuffering, setIsBuffering] = React.useState(false);

  React.useEffect(() => {
  const el = rootRef.current;
    if (!el) return;

    // If IntersectionObserver not supported, fallback to eager
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleCanPlay = (e) => {
    setIsReady(true);
    setIsBuffering(false);
    if (typeof onCanPlay === 'function') onCanPlay(e);
  };

  React.useEffect(() => {
    const el = refToUse.current;
    if (!isVisible || !el) return;
    const onWaiting = () => setIsBuffering(true);
    const onStalled = () => setIsBuffering(true);
    const onSuspend = () => setIsBuffering(true);
    const onEmptied = () => setIsBuffering(true);
    const onPlaying = () => { setIsBuffering(false); setIsReady(true); };
    const onCanPlayAny = () => { setIsBuffering(false); setIsReady(true); };
    const onLoadedMeta = () => { setIsReady(true); };
    // Some browsers flash a black frame at loop; pre-emptively wrap near end
    const onTimeUpdate = () => {
      try {
        if (el.duration && el.currentTime > el.duration - 0.08) {
          el.currentTime = 0.05;
        }
      } catch {}
    };
    const onEnded = () => {
      try {
        el.currentTime = 0.05;
        el.play();
        setIsBuffering(false);
      } catch {}
    };
    el.addEventListener('waiting', onWaiting);
    el.addEventListener('stalled', onStalled);
    el.addEventListener('suspend', onSuspend);
    el.addEventListener('emptied', onEmptied);
    el.addEventListener('playing', onPlaying);
    el.addEventListener('canplay', onCanPlayAny);
    el.addEventListener('canplaythrough', onCanPlayAny);
    el.addEventListener('loadedmetadata', onLoadedMeta);
    el.addEventListener('loadeddata', onCanPlayAny);
    el.addEventListener('timeupdate', onTimeUpdate);
    el.addEventListener('ended', onEnded);
    return () => {
      el.removeEventListener('waiting', onWaiting);
      el.removeEventListener('stalled', onStalled);
      el.removeEventListener('suspend', onSuspend);
      el.removeEventListener('emptied', onEmptied);
      el.removeEventListener('playing', onPlaying);
      el.removeEventListener('canplay', onCanPlayAny);
      el.removeEventListener('canplaythrough', onCanPlayAny);
      el.removeEventListener('loadedmetadata', onLoadedMeta);
      el.removeEventListener('loadeddata', onCanPlayAny);
      el.removeEventListener('timeupdate', onTimeUpdate);
      el.removeEventListener('ended', onEnded);
    };
  }, [isVisible, refToUse]);

  const fadeStyle = {
    transition: 'opacity 600ms ease',
    opacity: isReady && !isBuffering ? 1 : 0,
  };

  return (
    <div ref={rootRef} className={className} style={{ position: 'relative', ...style }}>
      {/* Poster fallback behind while video buffers */}
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.9)',
            transition: 'opacity 600ms ease',
            opacity: isReady && !isBuffering ? 0 : 1,
          }}
        />
      )}
      {isVisible && (
        <video
          ref={refToUse}
          className="absolute inset-0 w-full h-full object-cover"
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          onCanPlay={handleCanPlay}
          aria-hidden="true"
          style={{ ...(videoStyle || {}), ...fadeStyle }}
        >
          {Array.isArray(sources) && sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
          {children}
        </video>
      )}
    </div>
  );
}
