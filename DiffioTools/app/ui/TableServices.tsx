import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function TableServices() {
    return (
        <>
            <Table className="tableServices">
                <TableCaption>Una lista de todos tus servicios contratados.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Proveedor</TableHead>
                        <TableHead>Fecha Contratación</TableHead>
                        <TableHead>Vencimiento</TableHead>
                        <TableHead>Importe Abonado</TableHead>
                        <TableHead>Importe a Renovar</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Password</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>diffio.com.ar</TableCell>
                        <TableCell>Donweb</TableCell>
                        <TableCell>08/07/2024</TableCell>
                        <TableCell>08/07/2025</TableCell>
                        <TableCell>$8900</TableCell>
                        <TableCell>$10.200</TableCell>
                        <TableCell>contacto.diffio@gmail.com</TableCell>
                        <TableCell className="text-right">***********</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>diffio.com.ar</TableCell>
                        <TableCell>Donweb</TableCell>
                        <TableCell>08/07/2024</TableCell>
                        <TableCell>08/07/2025</TableCell>
                        <TableCell>$8900</TableCell>
                        <TableCell>$10.200</TableCell>
                        <TableCell>contacto.diffio@gmail.com</TableCell>
                        <TableCell className="text-right">***********</TableCell>
                    </TableRow><TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>diffio.com.ar</TableCell>
                        <TableCell>Donweb</TableCell>
                        <TableCell>08/07/2024</TableCell>
                        <TableCell>08/07/2025</TableCell>
                        <TableCell>$8900</TableCell>
                        <TableCell>$10.200</TableCell>
                        <TableCell>contacto.diffio@gmail.com</TableCell>
                        <TableCell className="text-right">***********</TableCell>
                    </TableRow><TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>diffio.com.ar</TableCell>
                        <TableCell>Donweb</TableCell>
                        <TableCell>08/07/2024</TableCell>
                        <TableCell>08/07/2025</TableCell>
                        <TableCell>$8900</TableCell>
                        <TableCell>$10.200</TableCell>
                        <TableCell>contacto.diffio@gmail.com</TableCell>
                        <TableCell className="text-right">***********</TableCell>
                    </TableRow><TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>diffio.com.ar</TableCell>
                        <TableCell>Donweb</TableCell>
                        <TableCell>08/07/2024</TableCell>
                        <TableCell>08/07/2025</TableCell>
                        <TableCell>$8900</TableCell>
                        <TableCell>$10.200</TableCell>
                        <TableCell>contacto.diffio@gmail.com</TableCell>
                        <TableCell className="text-right">***********</TableCell>
                    </TableRow><TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>diffio.com.ar</TableCell>
                        <TableCell>Donweb</TableCell>
                        <TableCell>08/07/2024</TableCell>
                        <TableCell>08/07/2025</TableCell>
                        <TableCell>$8900</TableCell>
                        <TableCell>$10.200</TableCell>
                        <TableCell>contacto.diffio@gmail.com</TableCell>
                        <TableCell className="text-right">***********</TableCell>
                    </TableRow><TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>diffio.com.ar</TableCell>
                        <TableCell>Donweb</TableCell>
                        <TableCell>08/07/2024</TableCell>
                        <TableCell>08/07/2025</TableCell>
                        <TableCell>$8900</TableCell>
                        <TableCell>$10.200</TableCell>
                        <TableCell>contacto.diffio@gmail.com</TableCell>
                        <TableCell className="text-right">***********</TableCell>
                    </TableRow><TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>diffio.com.ar</TableCell>
                        <TableCell>Donweb</TableCell>
                        <TableCell>08/07/2024</TableCell>
                        <TableCell>08/07/2025</TableCell>
                        <TableCell>$8900</TableCell>
                        <TableCell>$10.200</TableCell>
                        <TableCell>contacto.diffio@gmail.com</TableCell>
                        <TableCell className="text-right">***********</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}