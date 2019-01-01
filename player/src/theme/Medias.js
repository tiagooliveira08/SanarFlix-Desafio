import { css } from "styled-components";

const sizes = {
  phone: 480,
  tablet: 768,
  desktop: 992,
  giant: 1280
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: (...args) => {
      return css`
        @media (min-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

console.log(media);
export default media;
