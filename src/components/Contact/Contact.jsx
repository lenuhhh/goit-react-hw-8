import css from "./Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.detailsWrap}>
        <p>
          <IoPerson />
          {` ${name}`}
        </p>
        <p>
          <BiSolidPhone />
          {` ${number}`}
        </p>
      </div>
      <div className={css.btnWrap}>
        <button
          className={css.deleteBtn}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
}; 
