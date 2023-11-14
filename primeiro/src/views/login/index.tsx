import './login.css'
export default function Login()
{
    return (
        <div className='container'>
            <form>  
                <h1>Tela de Login</h1>
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='********'/>

                <button>Entrar</button>
            </form>
        </div>
    )
}