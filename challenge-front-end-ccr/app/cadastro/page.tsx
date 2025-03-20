import Image from "next/image";
import Link from "next/link";

export default function cadastro() {
    return (
        <div className="container">
            {/* Logo da CCR */}
            <div className="login-logo">
                <Image src="/imagens/logo-CCR.png" alt="Logo CCR" width={200} height={30} />
            </div>

            <section className="login">
                <div className="login-form">
                    <h2 className="text-2xl font-bold text-center mb-4">Cadastre-se</h2>

                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />

                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                    <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirme sua senha" required />

                    <button type="submit">Cadastrar</button>

                    <div className="cadastro">
                        <span>Já tem uma conta?</span>
                        <Link href="/">Login</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}