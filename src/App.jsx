import Vegetais from "./assets/vegetais.webp";
import Geleias from "./assets/geleias.webp";
import Frutas from "./assets/frutas.webp";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div>
      <header className="w-full h-[550px] md:h-[500px] xl:h-[700px] bg-home bg-center bg-cover header">
        <div className="absolute inset-0 h-[550px] md:h-[500px] xl:h-[700px]  bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.3)] select-none transition-all duration-300 shadow">
          <div className=" text-white flex flex-col justify-center items-center h-full w-full ">
            <h1 className="text-[28px] md:text-[22px] xl:text-[28px] h1 ">
              Na fruteira das possibilidades, semeamos saúde e colhemos
              bem-estar
            </h1>
            <div className="flex justify-center items-center absolute bottom-16 gap-4 links">
              <a
                href="https://www.instagram.com/iasmindanyelly/?next=%2F"
                target="_blank"
              >
                <FaInstagram
                  size={25}
                  className="pointer hover:text-[rgba(0,0,0,0.5)] transition-all duration-500"
                />
              </a>
              <a href="#">
                <FaWhatsapp
                  size={25}
                  className="pointer hover:text-[rgba(0,0,0,0.5)] transition-all duration-500"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/iasmim-danyelly-785805236/"
                target="_blank"
              >
                <FaLinkedin
                  size={25}
                  className="pointer hover:text-[rgba(0,0,0,0.5)] transition-all duration-500 "
                />
              </a>
            </div>

            <span className="absolute bottom-5 flex items-center flex-row  select-text">
              iasmindanyelly@gmail.com
            </span>
          </div>
        </div>
      </header>

      <main>
      <h2 className="text-center text-2xl my-8 h2">Nossos produtos</h2>
        <section className="flex justify-center items-center ">
          
          <ul className="flex flex-row bg-cover mb-16 w-[60%] md:w-[75%] xl:w-[55%] gap-5 select-none cards">
            <li className="relative group ">
              <img src={Geleias} alt="Card de Geleias" className="w-full h-auto "/>
              <div className="absolute inset-0 bg-[rgba(0,0,0,.5)] opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 flex-col">
                <span className="text-white text-2xl">Geleias</span>
              </div>
            </li>

            <li className="relative group ">
              <img src={Frutas} alt="Card de Frutas" className="w-full h-auto"/>
              <div className="absolute inset-0 bg-[rgba(0,0,0,.5)] opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 ">
                <span className="text-white text-2xl">Frutas</span>
              </div>
            </li>

            <li className="relative group ">
              <img src={Vegetais} alt="Card de Vegetais" className="w-full h-auto"/>
              <div className="absolute inset-0 bg-[rgba(0,0,0,.5)] opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300 ">
                <span className="text-white text-2xl">Vegetais</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="background-img w-full h-[600px] bg-sementes bg-cover bg-center mt-8 fundo ">
          <div className="bg-[rgba(0,0,0,.5)] h-[600px] flex flex-row justify-center items-center gap-24 background-shadow">
          <div className="w-[500px] md:w-[320px] xl:w-[640px] xl:text-xl text-justify text-lg sm:text-base flex items-center text-alternative">
            <p className=" text-white">
              Na nossa fruteira, tudo começa com uma pequena semente. Essa pequena maravilha da natureza contém todo o potencial para se transformar em frutas deliciosas e nutritivas. Selecionamos as melhores sementes para garantir que cada planta cresça saudável e forte, utilizando práticas agrícolas sustentáveis que respeitam o meio ambiente.
              A partir do momento em que a semente é plantada, ela é cuidada com dedicação e carinho. A cada etapa do cultivo, desde a germinação até a colheita, nosso compromisso é com a qualidade e a sustentabilidade. O resultado é uma fruta que não só é saborosa, mas também repleta de nutrientes, pronta para enriquecer a sua alimentação e trazer mais saúde para sua vida.
            </p>
          </div>

          <div className="img-seeds h-[350px] w-[400px] md:h-[250px] md:w-[300px] xl:w-[400px] xl:h-[350px] xl:hover:w-[410px] xl:hover:h-[360px] bg-sementesAmostra bg-cover bg-center rounded-2xl hover:w-[410px] hover:h-[360px] transition-all duration-300"></div>
          </div>
        </section>
        
        <section className="flex flex-col items-center justify-center mt-8 ">
        <h1 className="text-2xl text-differences ">Diferenciais da nossa empresa: </h1>
          <ul className="">
            <li className="bg-[#32943f] text-white text-lg px-[6em] py-[8px] rounded-s-2xl m-2 hover:px[7em] hover:py-[12px] transition-all duration-200 select-none cursor-pointer differences">Variedade de Produtos Frescos</li>
            <li className="bg-[#32943f] text-white text-lg px-[6em] py-[8px] rounded-s-2xl m-2 hover:px[7em] hover:py-[12px] transition-all duration-200 select-none cursor-pointer differences">Orgânicos e Sustentáveis</li>
            <li className="bg-[#32943f] text-white text-lg px-[6em] py-[8px] rounded-s-2xl m-2 hover:px[7em] hover:py-[12px] transition-all duration-200 select-none cursor-pointer differences">Inovação e Tecnologia</li>
            <li className="bg-[#32943f] text-white text-lg px-[6em] py-[8px] rounded-s-2xl m-2 hover:px[7em] hover:py-[12px] transition-all duration-200 select-none cursor-pointer differences">Serviços Adicionais</li>


          </ul>
        </section>

      </main>
 

      <footer className="w-full flex justify-center py-4 mt-14 footer" >
        <p>&copy; 2024 Nossa Fruteira. Todos os direitos reservados</p>
      </footer>

    </div>
  );
}
