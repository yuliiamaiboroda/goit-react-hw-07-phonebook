import {Ul, Li, } from "./Contacts.styled"
import { fetchContacts } from "redux/operations/operations";
import { useDispatch, useSelector } from "react-redux";
import Filter from "components/Filter/Filter";
import Notification from "components/Notification/Notification";
import { getContacts , getStatusFilter } from "redux/selectors";
import { useEffect } from "react";
import ContactItem from "components/ContactItem/ContactItem";

export default function Contacts () {

const dispatch = useDispatch();
useEffect(()=>{ dispatch(fetchContacts()) }, [dispatch]);
const contacsList = useSelector(getContacts);
const filterByName = useSelector(getStatusFilter);

const filterContacts = ()=>{
    if(filterByName){return contacsList.filter(el=>el.name.toLowerCase().includes(filterByName))}
    else{return contacsList}
}


    return(<>  
     {contacsList.length===0?
        <Notification message="There is no contact yet"/>:(  <>  
      <Filter />
            <Ul>
                {filterContacts().map(el=>(
                    <Li key={el.id}>
                       <ContactItem item={el}/>
                    </Li>
                ))}
            </Ul>
        </>)}
            
        </>
        )

    
};
