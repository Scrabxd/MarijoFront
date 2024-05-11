import { Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Button, Chip } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const invitadoPage = () => {
  let {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [ip, setIp] = useState("")
  const [nombre1, setNombre1] = useState("")
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
        <div className="w-10/12 flex flex-col items-center mx-auto gap-5 animate-fade-in-up animate-duration-700">
          <h2 className="text-2xl font-bold">Confirmar asistencia</h2>
          <Input label="Ingresa tu nombre" name="Nombre1" onChange={(e) => setNombre1(e.target.value)}/>

          {/* EN EL onPress(NO AGREGUE ONLICK PORQUE TA DEPRECADO) AGREGUE SU FUNCION AL BACKEND BUENAS NOCHES GUAPO MUAK */}
          <Button onPress={onOpen} className="font-sans w-full bg-[#3e75a9] font-bold mt-2 text-white">Confirmar</Button>

          <Chip color="danger">NO NIÑOS PORFAVOR</Chip>
        </div>
      </section>
      <Modal hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">MARIJO XV'S</ModalHeader>
              <ModalBody>
                <p>GRACIAS POR TU CONFIRMACION</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" as={Link} href="/" onPress={onClose}>
                  CERRAR
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default invitadoPage;
