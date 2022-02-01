import tw, { styled } from 'twin.macro';

const tabVariant = {
  large: tw`hidden md:block`,
  mobile: tw`md:hidden`,
};

export const TabContainer = styled.div(() => [
  `background-color: #2b4d5a;`,
  tw`w-full rounded-lg`,
  ({ variant = 'mobile' }) => tabVariant[variant],
]);

export const TextInput = styled.input(() => [
  `width: 100%;
      border-radius: 0.8rem;
      padding: 1.4rem 1rem;
      border: 0;
      text-align: right;
      
      `,
  tw` rounded-lg border-none`,
]);
