'use client';
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const { data: session, status } = useSession();

    if(status === 'loading'){
        return <p>Loading...</p>
    }

    if(!session){
        router.push('/');
        return null;
    }

    return (
        <div className="flex items-center justify-center flex-col">
            <Image src={session.user.image} alt="userImage" width={50} height={50} priority={true} />
            <p>Display name: {session.user.name}</p>
            <p>Email :{session.user.email}</p>
            <p>Role :{session.user.role}</p>
            <button onClick={() => signOut('google').then(() => router.push('/'))} className="btn">Logout</button>
        </div>
    );
}
