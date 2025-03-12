import { Button } from "../Button/Button";
import styles from "./ContactUs.module.css";
import { MdMessage, MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState } from "react";

export const ContactUs = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [text,setText]= useState("")
  
  const handleSubmitButton = (e) => {
    e.preventDefault()
    console.log(name +" "+ email+" "+text)
  };

  return (
    <section className={` container ${styles.contact_header_section} `}>
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>

      <div className={`${styles.contact_form_section}`}>
        <div className={styles.contact_form}>
          <div className={styles.top_button}>
            <Button
              text="VIA CHAT SUPPORT"
              icon={<MdMessage fontSize="22px" />}
            />
            <Button text="VIA CALL" icon={<IoCall fontSize="22px" />} />
          </div>
          <Button
            isOutline="true"
            text="VIA EMAIL FORM"
            icon={<MdMail fontSize="22px" />}
          />

          <form onSubmit={handleSubmitButton} className={styles.form_section}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" onChange={(e)=>setName(e.target.value)} value={name} name="name" placeholder="Enter your name..." />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                placeholder="Enter your email..."
              />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="feedback">Feedback</label>
              <textarea
                rows="5"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                name="feedback"
                placeholder="Enter your feedback..."
              />
            </div>
            <div className={styles.form_submit_btn}>
              <Button text="Submit" />
            </div>
          </form>
        </div>
        <div className={styles.contact_image}></div>
      </div>
    </section>
  );
};
