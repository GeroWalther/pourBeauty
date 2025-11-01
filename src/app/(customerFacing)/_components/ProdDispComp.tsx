import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

type pType = {
  name: string;
  productImg: string;
  link: string;
};

const ProdDispComp = ({ name, productImg, link }: pType) => {
  return (
    <div
      className='flex items-center justify-center flex-auto h-80 hover:brightness-100 w-full transition-transform duration-300 transform hover:scale-110 md:rounded-md'
      style={{
        backgroundImage: `url(${productImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className='text-center flex flex-col items-center px-10'>
        <h2 className='text-xl font-bold text-dark mb-5 text-gray-800'>
          {name}
        </h2>
        <div className='flex justify-center items-center gap-5'>
          <Link href={link} className={buttonVariants()}>
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProdDispComp;
