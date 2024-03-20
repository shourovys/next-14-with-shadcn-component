import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <div className='bg-slate-200 py-3 w-full'>
      <div className='container flex items-center justify-between'>
        <h2 className='font-bold text-xl'>Logo</h2>
        <Button asChild>
          <Link href='/login'>Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
