import { Button,  Img } from "components/Contacts/Contacts.styled"
import { deleteContact  } from "redux/operations/operations";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';


export default function ContactItem ({item}){
    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(deleteContact(item.id))
    };
   return ( <>
    <Img src={item.avatar} alt={item.name} width="40px"/>
   {item.name}: {item.number}
    <Button type="button"  onClick={handleDelete}>Delete</Button>
</>) 
}

ContactItem.propTypes={
    item: PropTypes.shape({
        avatar:PropTypes.string,
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    }).isRequired
}