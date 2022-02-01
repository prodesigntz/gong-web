import tw, { styled } from 'twin.macro';

const mainVariant = {
  large: tw`hidden md:flex mx-auto pt-24 justify-between`,
  mobile: tw`flex-col space-y-16 md:hidden mt-10`,
};

export const MainComponent = styled.div(() => [
  ({ variant = 'mobile' }) => mainVariant[variant],
]);

const heroVariant = {
  large: tw`hidden md:block w-full `,
  mobile: tw`md:hidden w-full `,
};

export const Hero = styled.div(() => [
  tw`flex-col space-y-8`,
  ({ variant = 'mobile' }) => heroVariant[variant],
]);
