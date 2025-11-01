import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

type pType = {
  name: string;
  productImg: string;
  link: string;
};

const ProdDispComp = ({ name, productImg, link }: pType) => {
  return (
    <div className='group flex w-full flex-col overflow-hidden rounded-md transition-transform duration-300 transform hover:scale-110'>
      <div
        className='flex h-64 w-full items-center justify-center bg-cover bg-center bg-no-repeat brightness-95 transition duration-300 group-hover:brightness-100'
        style={{
          backgroundImage: `url(${productImg})`,
        }}
      />
      <div className='flex flex-col items-center gap-4 bg-white px-10 py-6 text-center'>
        <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
        <Link href={link} className={buttonVariants()}>
          Shop
        </Link>
      </div>
    </div>
  );
};

export default ProdDispComp;
