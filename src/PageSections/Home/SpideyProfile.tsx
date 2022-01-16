import React, { useEffect, useState } from "react";
import generateAuth from "../../utils/handleEndPoints";
const baseUrl = "https://gateway.marvel.com/v1/public";
interface SpideyInfo {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
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
    return (
      <h1 data-aos="fade-in" className="m-auto text-white text-[3rem]">
        Carregando
      </h1>
    );
  }

  return (
    <div
      data-aos="fade-up"
      className="bg-black-80 w-[95vw] m-auto text-white p-4"
    >
      <div
        id="profile-header"
        className="flex text-[1.2rem] text-center
      items-center justify-between"
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
  );
};

export default SpideyProfile;
