import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SpideyContext } from "../../Context/SpideyContentCtx";

const OneComic = () => {
  const { state } = useContext(SpideyContext);
  const { id } = useParams();

  return (
    <div>
      {id}: {state.title}
    </div>
  );
};

export default OneComic;
