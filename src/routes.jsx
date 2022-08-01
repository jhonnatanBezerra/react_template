import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { InputWithFloatingLabel } from "./components/Inputs/FloatingLabel";
import { Carousel } from "./components/Carousel";
import { Button } from "./components/Button";
import { CheckBox } from "./components/CheckBox";

export const AppRoutes = () => {

  const PrivateRoute = ({ children }) => {
    const { autenticated, loading } = useContext(AuthContext);


    if (loading) {
      return <div>Carregando...</div>
    }

    if (!autenticated) {
      return <Navigate to="/login" />
    }

    return children;


  }

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      </Routes>
    </AuthProvider>
  )
}


const InitialPage = () => {


  const [user, setUser] = React.useState({
    name: '',
    password: ''
  });

  const handleChangeText = (e) => {



    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <h1>Este template contem as seguintes dependencias</h1>
      <span>* axios versão {'-->'}  ^0.27.2</span>
      <span>* react-router-dom versão {'-->'}  ^6.3.0</span>
      <span>* styled-components versão {'-->'}  ^5.3.5</span>
      <span>* react-icons versão {'-->'}  ^4.4.0</span>
      <h2>Este template contem as seguintes configurações</h2>
      <span>* Por padrão a fonte deste template é Poppins</span>
      <span>* O reset de css já está configurado</span>
      <h2 style={{ margin: '25px 0' }}>Este template contem os seguintes componentes</h2>

      <InputWithFloatingLabel label='Usuário' />
      <Spacing />
      <Button message={'Entrar'} />
      <Spacing />
      <CheckBox label="Ativo" />


    </div>

  )
}

const Spacing = () => {
  return (
    <div style={{ margin: '20px 0' }}></div>
  )
}