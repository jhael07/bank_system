import React from "react";
import "./Login.css";
import logo from "../../../assets/img/Login/login__icon.png";

const Login = () => {
    return (
        <div className="login__container">
            <div className="login ">
                <div>
                    <h1 className="text-center text-xl mt-1">Login</h1>
                    <img src={logo} alt="logo icono" className="logo__img" />
                    <form className="grid text-center mt-5">
                        <input
                            type="text"
                            className="w-3/4 m-auto mb-4 p-1 text-center"
                            placeholder="Username"
                        />

                        <input
                            type="text"
                            className="w-3/4 m-auto mb-4 p-1 text-center"
                            placeholder="Password"
                        />

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            className="bg-green-400 w-2/4 m-auto p-1 rounded mt-2"
                        >
                            Enviar
                        </button>

                        <a
                            href=""
                            className="mt-3 text-sm font-normal w-2/4 m-auto"
                        >
                            Create a new account
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
