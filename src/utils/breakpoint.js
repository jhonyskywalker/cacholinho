import { css } from 'styled-components';

const breakpoint = (breakpoint, content) => {
  const breakpoints = {
    'for-phone-only': css`
      @media (max-width: 599px) {
        ${content}
      }
    `,
    'for-tablet-portrait-up': css`
      @media (min-width: 600px) {
        ${content}
      }
    `,
    'for-tablet-landscape-up ': css`
      @media (min-width: 900px) {
        ${content}
      }
    `,
    'for-desktop-up': css`
      @media (min-width: 1200px) {
        ${content}
      }
    `,
    'for-big-desktop-up': css`
      @media (min-width: 1800px) {
        ${content}
      }
    `,
  };

  return breakpoints[breakpoint];
};

export default breakpoint;
