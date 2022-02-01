import LargeNav from './LargeNav';
import MobileNav from './MobileNav';
import tw from 'twin.macro';

export default function Navbar() {
  return (
    <nav css={tw`mx-auto`}>
      <LargeNav />
      <MobileNav />
    </nav>
  );
}
