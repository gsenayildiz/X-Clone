import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";

const Protected = () => {
  //yetkisi var mı yok mu
  const [isAuth, setIsAuth] = useState();

  // kullanıcının oturum verilerini al
  useEffect(() => {
    // bu metod kullanıcı oturumunu izler
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  if (isAuth === false) {
    // eğer kullanıcının oturumu kapalıysa logine yönlendir
    return <Navigate to="/" replace />;
  }

  // Oturum açıksa alt route un bileşenini ekrana bas
  return <Outlet />;
};

export default Protected;

// Nvigate bileşenı
//bir bileşeni return satırında yönlendirme yapmamız gerekiyorsa usenavigate kullanıldığında hata verdiği için
// bu tarz return yönlendirilmelerinde Navigate bileşenı kullanılır 
