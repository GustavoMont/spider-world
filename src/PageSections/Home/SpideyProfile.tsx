import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import generateAuth from "../../utils/handleEndPoints"; // Função para gerar as credenciais da api
const baseUrl = "https://gateway.marvel.com/v1/public";
interface SpideyInfo {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
} // Informações do personagem, baseados na api
const SpideyProfile: React.FC = () => {
  const [spidey, setSpidey] = useState<SpideyInfo>();
  useEffect(() => {
    (async () => {
      const req = await fetch(`${baseUrl}/characters/1009610${generateAuth()}`);
      const SpideyInfo = await req.json();

      setSpidey(SpideyInfo.data.results[0]);
    })();
  }, []);

  if (!spidey) {
    // Enuqnato não tiver informações vai renderizar o Loader
    return <Loader />;
  }

  return (
    <section
      className="h-screen relative flex items-center"
      id="spidey-profile"
    >
      <div
        data-aos="fade-up"
        className="bg-black-80 w-[95vw] max-w-[400px] m-auto rounded-xl text-white p-4"
        data-barrier
      >
        <div
          id="profile-header"
          className="flex text-[1.2rem] text-center
      items-center justify-between lg:px-[4rem]"
        >
          <div
            id="avatar"
            className="w-[5rem] h-[5rem] rounded-full bg-white"
            style={{
              backgroundImage: `url(${spidey?.thumbnail.path}/portrait_xlarge.${spidey?.thumbnail.extension})`,
            }}
          ></div>
          <div id="nome">
            <h4>{spidey?.name}</h4>
          </div>
        </div>
        <hr className="my-5" />
        <div id="description">{spidey?.description}</div>
      </div>
    </section>
  );
};

export default SpideyProfile;
