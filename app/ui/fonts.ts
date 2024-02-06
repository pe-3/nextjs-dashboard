import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
import type { NextFont } from 'next/dist/compiled/@next/font';

export const lusitana: NextFont = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

