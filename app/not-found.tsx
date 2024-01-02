import { redirect } from 'next/navigation';

export default async function NotFound() {
  redirect(process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_ROOT_DIR! : '/')
}