import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Section from "./Section/Section";
import {useSelector } from "react-redux";
import { getIsLoading } from "redux/selectors";
import { RingLoader } from "react-spinners";

const override = {
  position:"fixed",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)", };

export function  App (){
  const isLoading = useSelector(getIsLoading);
    
    return(<div >
    
    <Section title="Phonebook">
      <Phonebook/>
    </Section>
      {isLoading&& 
    <RingLoader
    color="#C0B1EC"
    cssOverride={override}
/>}
    <Section title="Contacts">
    <Contacts />
    </Section></div>
    )
  
};
