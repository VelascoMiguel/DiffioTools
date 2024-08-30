import Sidebar from "../ui/Sidebar";
import HeadPage from "../ui/HeadPage";
import TableServices from "../ui/TableServices";

export default function Services() {
    return (
        <>
            <div className="contentPage shadow">
                <Sidebar />
                <section className="services page">
                    <HeadPage namePage="Servicios" descriptionPage="En esta seccion encontraras toda la informacion relacionada a tus servicios." />
                    <div className="">
                        <TableServices />
                    </div>
                </section>
            </div>
        </>
    );
}
