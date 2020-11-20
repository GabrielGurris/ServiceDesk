import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './styles.css';

const ServiceDesk = () => {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row">
                    <Sidebar />
                    <main role="main" id="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div className="text-center">
                            <h1>O que deseja fazer?</h1>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-12 pt-5">
                                <Link to="#" className="text-dark text-decoration-none">
                                    <div id="bg" className="container text-center">
                                        <h1 className="pt-3 pb-2">Incidente<br /></h1>
                                        <h5 className="pb-3">Algo estava funcionando e parou.<br />Esse tipo de chamado é atendido mais rapidamente
                                            em comparação a uma demanda.
                                        </h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-sm-12 pt-5">
                                <Link to="#" className="text-dark text-decoration-none">
                                    <div id="bg" className="container text-center">
                                        <h1 className="pt-3 pb-2">Catalogo de chamados<br /></h1>
                                        <h5 className="pb-3">Catalogo com os chamados mais frequentes.<br />Ex: Solicitar programa X, solicitar acesso, troca
                                            de equipamentos de hardware.
                                        </h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-sm-12 pt-5">
                                <Link to="#" className="text-dark text-decoration-none">
                                    <div id="bg" className="container text-center">
                                        <h1 className="pt-3 pb-2">Demanda<br /></h1>
                                        <h5 className="pb-3">Realiza melhorias e automatizações em processos, as demandas exigem análise de viabilidade
                                        e criação de um projeto.
                                    </h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>


        </>
    );
};

export default ServiceDesk;