import React from "react";

import LogoApp from "../componnent/LogoApp";
import SectionTexte from "../componnent/affichage_texte/SectionTexte";
import SectionSonsGroupe from "../componnent/affichage_groupes/SectionSonsGroupe";
import SectionAffichage from "../componnent/affichage_elements/SectionAffichage";
import SectionActions from "../componnent/barre_action/SectionActions";


export default function Home() {
  return (
    <>
      <LogoApp />
      <SectionActions />
      <SectionTexte />
      <SectionSonsGroupe />
      <SectionAffichage />
    </>
  );
}
