import ContactForm from "@/components/ContactForm";
import Menu from "@/components/Menu";

export default function Contact() {
  return (
    <div
      className=" flex flex-col  bg-gradient-to-b from-[#fef3c7] to-[#fcd34d] bg-opacity-90
  bg-cover bg-center text-black"
    >
      <Menu />
      <ContactForm/>
    </div>
  );
}
