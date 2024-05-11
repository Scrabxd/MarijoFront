import { Input, useDisclosure } from "@nextui-org/react";
import { Button, Chip } from "@nextui-org/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const invitadosPage = () => {
  let {onOpen} = useDisclosure();
  const [ip, setIp] = useState("")
  const [nombre1, setNombre1] = useState("")
  const [nombre2, setNombre2] = useState("")

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  onOpen = () => {
    axios.post('https://marijoback.onrender.com/asistencia',{
      ip,
      nombre1,
      nombre2
    })


    Swal.fire({
      title:"Gracias por confirmar.",
      text:"Gracias por confirmar tu asistencia. Ya puedes cerrar la pagina",
      icon:"success",
      confirmButtonText:"Cerrar"

    }).then(() =>{
      window.location.href = '/'
    } )
    
}
      

  return (
    <>
      <section className="bg-flowers bg-cover bg-no-repeat h-screen flex items-center">
        <div className="w-10/12 flex flex-col items-center mx-auto gap-5 ">
          <h2 className="text-2xl font-bold">Confirmar asistencia</h2>
          <Input label="Ingresa tu nombre" name="Nombre1" onChange={(e) => setNombre1(e.target.value)} />
          <Input label="Ingresa el nombre de tu acompañante" name="Nombre2" onChange={(e) => setNombre2(e.target.value)}/>

          {/* EN EL onPress(NO AGREGUE ONLICK PORQUE TA DEPRECADO) AGREGUE SU FUNCION AL BACKEND BUENAS NOCHES GUAPO MUAK */}
          <Button onPress={onOpen} className="font-sans w-full bg-[#3e75a9] font-bold mt-2 text-white">Confirmar</Button>

          <Chip color="danger">NO NIÑOS PORFAVOR</Chip>
        </div>
      </section>
    </>
  )
}

export default invitadosPage