'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Sidebar from "../User/UserSidebar";
import AdminSidebar from "../Admin/AdminSidebar";

export default function Role() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        switch (session?.user?.role) {
            case 'admin':
                router.push('/admin')
                break
        }
    }, [session, router]);

    switch (session?.user?.role) {
        case 'admin':
            return <AdminSidebar />
        case 'user':
            return <Sidebar />
        default:
            return <Sidebar />
    }
}
