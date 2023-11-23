import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";
import { redirect } from 'next/navigation';

interface SignInLayoutProps {
    children: React.ReactNode;
}

export default async function SignInLayout( {children }: SignInLayoutProps ) {
    const session =  await getServerSession(authOptions)

    if(session) {
        redirect('/')
    }

    return(
        <>
            {children}
        </>
    ) 
}