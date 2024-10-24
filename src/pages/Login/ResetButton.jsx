import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ResetButton = ({ email }) => {
    //şifre sıfırlama epostası gönder
    const handleReset = () =>{
    sendPasswordResetEmail(auth, email)
    .then(() => toast.info("Şifre sıfırlama epostası gönderildi. Lütfen mailinizi kontrol edin"))
    .catch((err) => toast.error("Mail gönderilemedi"))
    }; 
  return (
    <button onClick={handleReset} className="text-red-500">
      Şifrenizi mi unuttunuz?
    </button>
  )
}

export default ResetButton;
