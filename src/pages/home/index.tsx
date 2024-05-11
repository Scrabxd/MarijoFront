// import { Fondo } from "../../assets/fondo";
import { Button, Chip } from "@nextui-org/react";
import church from "../../assets/icons/building-church.svg";
import confetti from "../../assets/icons/confetti.svg";
import crown from "../../assets/icons/corona.svg"
import { Link } from "@nextui-org/react"

const homePage = () => {
  return (
    <>
      <section className="bg-flowers bg-cover bg-no-repeat h-screen">
        <div className="h-full flex flex-col items-center justify-center mx-auto gap-5 w-11/12 font-pinyon text-3xl text-center overflow-auto animate-fade-in-up animate-duration-700">
          {/* <Fondo /> */}
            <div className="flex flex-col font-pinyon text-5xl mt-[1600px] lg:text-7xl">
            <div className="flex items-center justify-center mb-6">
                <img className="w-32" src={crown} alt="" />
            </div>            
            <h1 className="font-bold mb-4 ">Marijo Ramos</h1>
            <h2 className="text-[#3e75a9] mb-4">Mis XV</h2>
            <h2 className="text-[#3e75a9] mb-2">25 Mayo 2024</h2>
          </div>
          <span className=" lg:text-5xl my-3">
            Celebra conmigo este dia tan especial
          </span>

          <span className="font-semibold text-[#3e75a9] lg:text-4xl mb-10">Me acompañan:</span>

          <div className="lg:text-4xl">
            <div className="flex flex-col items-center gap-2 mb-6">
              <span className="font-semibold">Mis padres</span>
              <span>Laura Denisse Molina Gallegos</span>
              <span>Emiliano Ramos Valenzuela</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold">Mis padrinos</span>
              <span>Gerardo Alonso Molina Gallegos</span>
              <span>Maria Guadalupe Moreno Olivas</span>
            </div>
          </div>

          <div className="flex flex-row gap-28 mt-6">
            <div className="flex flex-col items-center">
              <img className="w-16" src={church} alt="" />
              <p className="text-[#3e75a9] font-bold lg:text-4xl mb-4">Ceremonia</p>
              <p className=" font-bold mb-4">7:00 PM</p>
              <Button as={Link} href="https://maps.app.goo.gl/w5xHZeg8WXqJihzRA" className="font-sans bg-[#3e75a9] font-bold text-white">Ver Ubicacion</Button>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-16" src={confetti} alt="" />
              <p className="text-[#3e75a9] font-bold lg:text-4xl mb-4">Recepcion</p>
              <p className=" font-bold mb-4">9:00 PM</p>
              <Button as={Link} href="https://maps.app.goo.gl/qrTGU4sWhcJNxZeM9" className="font-sans bg-[#3e75a9] font-bold text-white">Ver Ubicacion</Button>
            </div>
          </div>
          <p className="my-10 lg:text-4xl lg:w-2/6">Tu presencia es mi mejor regalo, si deseas darme un obsequio puede ser en efectivo.
           La mesa de regalo se servira de guia para que conozcas mis cosas favoritas.</p>
        <div >
            <p className="font-bold lg:text-4xl">Mesa de regalos</p>
            <div className="flex flex-row justify-center gap-10 mt-5">
    <Button as={Link} href="https://www.amazon.com.mx/registries/gl/guest-view/2Z9LLNXA9VM6N" className="font-sans bg-[#3e75a9] text-white font-bold">
        Amazon
    </Button>
            </div>
        </div>
        <div className="font-sans mt-10 text-xl">
            <h3 className="font-bold text-[#3e75a9] mb-4">DressCode</h3>
            <p>Formal / Semiformal</p>
        </div>
        <div className="font-sans mt-10 text-xl ">
            <h3 className="font-bold text-[#3e75a9] mb-4">COLORES EXCLUSIVOS DE LA QUINCIAÑERA</h3>
            <p>Azul</p>
            <p>Dorado</p>
        </div>
        <div className="mt-10 font-sans text-xl mb-32 flex flex-col items-center gap-2">
            <h3 className="font-bold text-[#3e75a9]">Confirmación de asistencia</h3>
            <p className=" mb-4">Por favor confirma tu asistencia es muy importantes para nosotros</p>
            <Button as={Link} href="/invitado" className="font-sans w-full bg-[#3e75a9] font-bold mt-2 text-white">Confirmar 1 invitado</Button>
            <Button as={Link} href="/invitados" className="font-sans w-full bg-[#3e75a9] font-bold mt-2 text-white mb-4">Confirmar 2 invitados</Button>
            <Chip color="danger">NO NIÑOS</Chip>
        </div>

        </div>
      </section>
    </>
  );
};

export default homePage;
