import Footer from "../ui/Footer";
import Announcemenet from "../ui/announcemenet";
import Navbar from "../ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col ">
            <div className="w-full ">
                <Announcemenet />
                <Navbar />


            </div>

            <div className="flex h-screen flex-col">
                {children}

                <div className="w-full ">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
