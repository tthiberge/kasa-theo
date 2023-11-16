import { useState } from 'react'
import about_bg from '../data/about_bg.png'
import Banner from '../components/Banner'
import FoldCard from '../components/FoldCard'




function About() {

  const about = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },

  ]
  const [unfoldFiabilite, setUnfoldFiabilite] = useState(false)
  const [unfoldRespect, setUnfoldRespect] = useState(false)
  const [unfoldService, setUnfoldService] = useState(false)
  const [unfoldSecurite, setUnfoldSecurite] = useState(false)

  const isMobile = window.innerWidth < 640
  console.log(isMobile)

  return (
    <div className='about-container'>
      <Banner
      height="223px"
      src={about_bg}
      marginBottom="38px"
      />

      <div className='unfold-items'>
      <FoldCard
          title="Fiabilité"
          item={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}
          unfoldItem={unfoldFiabilite}
          setUnfoldItem={setUnfoldFiabilite}
          itemType="about"
        />
        <FoldCard
          title="Respect"
          item={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
          unfoldItem={unfoldRespect}
          setUnfoldItem={setUnfoldRespect}
          itemType="about"
        />
        <FoldCard
          title="Service"
          item={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
          unfoldItem={unfoldService}
          setUnfoldItem={setUnfoldService}
          itemType="about"
        />
        <FoldCard
          title="Sécurité"
          item={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
          unfoldItem={unfoldSecurite}
          setUnfoldItem={setUnfoldSecurite}
          itemType="about"
        />


      </div>
    </div>
  );

}

export default About
