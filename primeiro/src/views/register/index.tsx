import css from './register.module.css'

export default function Register(){
    return(
        <div className={css.container}>

            <form>
                <h1>Cadastro </h1>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Senha'/>
                <input type="password" placeholder='Confirmar Senha'/>
                <div className={css.buttonGroup}>
                    <button>Cadastrar</button>
                    <button>Cancelar</button>
                </div>
            </form>
        </div>
    )
}