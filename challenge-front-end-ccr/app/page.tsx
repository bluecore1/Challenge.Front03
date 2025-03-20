import Image from "next/image";
import Link from "next/link";


export default function Login() {
  return (
    <div className="container">
      
      <div className="login-logo">
        <Image src="/imagens/logo-CCR.png" alt="Logo CCR" width={200} height={30} />
      </div>

      <section className="login">
        <div className="login-form">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />
          <div className="entrar">
          <Link href="/historico-alertas">
          <button type="submit">Entrar</button>
          </Link>
          </div>

          <div className="cadastro">
            <span>Não tem uma conta?</span>
            <Link href="/cadastro">Cadastre-se</Link>
          </div>
        </div>
      </section>
    </div>
  );
} 