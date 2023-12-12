import css from './register.module.css'
import { useState } from 'react';

export default function Register()
{
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");

    return(
        <div className={css.container}>
            <form>
                <h1>Cadastro </h1>

                <input 
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder='Nome'
                />
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <input 
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder='Senha'
                />
                <input 
                    type="password"
                    value={confirmar}
                    onChange={(e) => setConfirmar(e.target.value)}
                    placeholder='Confirmar Senha'
                />

                <div className={css.buttonGroup}>
                    <button>Cadastrar</button>
                    <button>Cancelar</button>
                </div>
                <p>Nome: { nome }</p>
                <p>E-mail: { email }</p>
                <p>Senha: { senha }</p>
                <p>Confirmação de Senha: { confirmar }</p>
            </form>
        </div>
    )
}