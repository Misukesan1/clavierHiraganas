import React from "react";

import LogoApp from "../componnent/LogoApp";
import SectionTexte from "../componnent/affichage_texte/SectionTexte";
import SectionSonsGroupe from "../componnent/affichage_groupes/SectionSonsGroupe";
import SectionAffichage from "../componnent/affichage_elements/SectionAffichage";

export default function Home() {
  return (
    <>
      <LogoApp />
      <SectionTexte />
      <SectionSonsGroupe />
      <SectionAffichage />
    </>
  );
}
