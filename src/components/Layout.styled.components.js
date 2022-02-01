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
    height: 15vh;
    background-image: url('/images/waves.svg');
    background-repeat: no-repeat;
    background-size:contain;
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
    height: 15vh;
    background-image: url('/images/small-waves.svg');
    background-repeat: no-repeat;
    background-size:contain;
  }`,
]);
