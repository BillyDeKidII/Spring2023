import './login.css'
export default function Login()
{
    return (
        <div className='container'>
            <form>  
                <h1>Tela de Login</h1>

                    <input type="text" placeholder='Email'/>
                    <input type="password" placeholder='********'/>

                <div className="buttonGroup">
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </div>
                
            </form>
        </div>
    )
}