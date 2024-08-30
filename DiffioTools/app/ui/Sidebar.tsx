import Logo from "./Logo";
import { Separator } from "@/components/ui/separator";
import PagesSidebar from "./PagesSidebar";
import LogOut from "./LogOut";
import AvatarProfile from "./Avatar";

export default function Sidebar() {
  return (
    <>
      <section className="sidebarMenu">
        <div className="contentSidebarMenu">
          <div className="firstDivisionSidebar">
            <Logo />
            <Separator />
            <PagesSidebar />
          </div>
          <div className="secondDivisionSidebar">
            <AvatarProfile />
            <LogOut />
          </div>
        </div>
      </section>
    </>
  );
}
