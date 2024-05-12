import { SetStateAction, useState } from "react";
import { BiPhone } from "react-icons/bi";
import Modal from "react-modal";
import styles from "./PhoneNumberInput.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const PhoneNumberInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("Введите номер");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    closeModal();
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div className={styles.container_phone_number_item}>
      <div className={styles.phone_number_input_item}>
        <div className={styles.phone_number_input_item_text}>
          <h3>{phoneNumber}</h3>
          <p>Номер телефона</p>
        </div>
        <button
          className={styles.phone_number_input_item_button}
          onClick={openModal}
        >
          <BiPhone />
        </button>
      </div>

      <Modal
        style={customStyles}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Редактировать телефон"
      >
        <h2>Редактировать телефон</h2>
        <input type="number" value={phoneNumber} onChange={handleChange} />
        <button onClick={handleSave}>Сохранить</button>
        <button onClick={closeModal}>Отмена</button>
      </Modal>
    </div>
  );
};
