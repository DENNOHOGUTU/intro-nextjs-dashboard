import { Inter } from 'next/font/google';
import { Lusitana as LusitanaFont } from 'next/font/google'; // Renaming the import
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = LusitanaFont({
    weight: ['400', '700'],
    subsets: ['latin'],
});
