import Sidebar from "../ui/Sidebar";
import HeadPage from "../ui/HeadPage";
import TableFiles from "../ui/TableFiles";


export default function Files() {
    return (
        <>
            <div className="contentPage shadow">
                <Sidebar />
                <section className="services page">
                    <HeadPage namePage="Archivos" descriptionPage="En esta seccion encontraras todos los archivos relacionados con tu pagina web." />
                    <div className="">
                        <TableFiles />
                    </div>
                </section>
            </div>
        </>
    );
}
