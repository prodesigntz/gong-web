import tw, { styled } from 'twin.macro';

export const MainWavesLarge = styled.div(() => [
  tw`hidden md:block`,
  `  z-index: -10;
     &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    background-image: url('/images/waves-footer.svg');
    background-repeat: no-repeat;
  }`,
]);

export const MainWavesSmall = styled.div(() => [
  tw`w-full md:hidden`,
  `  z-index: -10;
     &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    background-image: url('/images/waves-footer-sm.svg');
    background-repeat: no-repeat;
  }`,
]);
