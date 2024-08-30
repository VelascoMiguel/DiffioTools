import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AvatarProfile from "./Avatar";

export default function HeadPage({ namePage, descriptionPage }: any) {
  return (
    <>
      <section className="headPage">
        <div className="breadCrumbAndAvatar">
          <h2>{namePage}</h2>
          {/* <AvatarProfile /> */}
        </div>
        <p>{descriptionPage}</p>
      </section>
    </>
  );
}
