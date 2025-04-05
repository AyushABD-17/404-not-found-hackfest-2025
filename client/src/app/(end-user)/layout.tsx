import { Sidebar } from "@/components/shared/SideBar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="flex bg-gradient-to-bl h-screen from-gray-900/50 to-gray-900/30">
        <Sidebar />
        <div className="flex-1 lg:ml-64 max-sm:py-14">
            {children}
        </div>
    </div>
}