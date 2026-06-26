import React from 'react';

/**
 * Wiz brand lockup. `mark` = gradient glyph only; `full` = glyph + "Wiz"
 * wordmark + divider + product suffix (default "iDM").
 */
export function Logo({ variant = 'full', suffix = 'iDM', height = 20, style, ...rest }) {
  const scale = height / 18;
  const markW = 32 * scale;
  if (variant === 'mark') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', ...style }} {...rest}>
        <Mark w={markW} h={height} />
      </span>
    );
  }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 * scale, lineHeight: 1, ...style }} {...rest}>
      <Mark w={markW} h={height} />
      <Wordmark h={height} />
      {suffix && (
        <>
          <span style={{ width: 1, height: height * 1.05, background: 'var(--grey-50)' }} />
          <span style={{
            fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: height,
            letterSpacing: '-0.04em', color: 'var(--grey-90)',
          }}>{suffix}</span>
        </>
      )}
    </span>
  );
}

function Mark({ w, h }) {
  return (
    <svg width={w} height={h} viewBox="0 0 32 18" fill="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="wizMarkGrad" x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#406AFB" />
          <stop offset="0.2576" stopColor="#078EFB" />
          <stop offset="0.7149" stopColor="#939AFF" />
          <stop offset="0.9981" stopColor="#D698FC" />
        </linearGradient>
      </defs>
      <path fillRule="evenodd" fill="url(#wizMarkGrad)" d="M 24.424 5.15 C 23.851 4.896 23.239 4.769 22.589 4.769 C 23.239 4.769 23.851 4.646 24.424 4.399 C 24.996 4.145 25.494 3.803 25.918 3.374 C 26.341 2.945 26.675 2.44 26.918 1.86 C 27.169 1.28 27.294 0.66 27.294 0 C 27.294 0.66 27.416 1.28 27.659 1.86 C 27.91 2.44 28.247 2.945 28.671 3.374 C 29.094 3.803 29.592 4.145 30.165 4.399 C 30.737 4.646 31.349 4.769 32 4.769 C 31.349 4.769 30.737 4.896 30.165 5.15 C 29.592 5.397 29.094 5.735 28.671 6.164 C 28.247 6.593 27.91 7.098 27.659 7.678 C 27.416 8.258 27.294 8.878 27.294 9.538 C 27.294 8.878 27.169 8.258 26.918 7.678 C 26.675 7.098 26.341 6.593 25.918 6.164 C 25.494 5.735 24.996 5.397 24.424 5.15 Z M 6.312 16.042 L 0.518 5.872 C -0.548 4 0.084 1.606 1.932 0.525 C 3.779 -0.556 6.142 0.086 7.208 1.958 L 13.002 12.128 C 13.514 13.027 13.653 14.095 13.388 15.098 C 13.123 16.101 12.476 16.956 11.588 17.475 C 9.741 18.556 7.379 17.914 6.312 16.042 Z M 18.135 16.042 L 12.341 5.872 C 11.274 4 11.907 1.606 13.755 0.525 C 15.602 -0.556 17.965 0.086 19.031 1.958 L 24.825 12.128 C 25.337 13.027 25.476 14.095 25.211 15.098 C 24.946 16.101 24.298 16.956 23.411 17.475 C 21.564 18.556 19.201 17.914 18.135 16.042 Z" />
    </svg>
  );
}

function Wordmark({ h }) {
  const w = 38 * (h / 18);
  return (
    <svg width={w} height={h} viewBox="0 0 38 18" fill="none" style={{ display: 'block' }}>
      <path fillRule="nonzero" fill="var(--grey-90)" d="M 14.109 18 L 10.09 7.692 L 6.145 17.974 L 5.727 17.974 L 0 0 L 3.392 0 L 6.379 10.424 L 9.955 0 L 10.373 0 L 13.999 10.385 L 16.813 0 L 20.181 0 L 14.503 18 L 14.109 18 Z M 22.244 3.427 L 22.244 0 L 25.685 0 L 25.685 3.427 L 22.244 3.427 Z M 22.367 18 L 22.404 5.128 L 25.599 5.128 L 25.562 18 L 22.367 18 Z M 27.725 17.961 L 33.268 8.003 L 28.758 8.003 L 28.758 5.128 L 38 5.128 L 32.469 15.306 L 37.508 15.306 L 37.508 17.961 L 27.725 17.961 Z" />
    </svg>
  );
}

export default Logo;
