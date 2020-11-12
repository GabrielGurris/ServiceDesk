import React from 'react';
import Navbar from '../../../../components/Navbar';
import Sidebar from '../../../../components/Sidebar';
import FileInput from '../../../../components/FileInput';

const Demand = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main role="main" id="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div className="text-center pt-2 pb-3">
                            <h1>Demanda</h1>
                        </div>
                        <form className="container">
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Resumo: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <input className="form-control" maxLength="144" placeholder="Max: 144 caracteres"></input>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Descrição: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <textarea className="form-control" maxLength="144" placeholder="144 caracteres"></textarea>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Categoria: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <select class="custom-select">
                                        <option selected>Escolher...</option>
                                        <option value="1">Um</option>
                                        <option value="2">Dois</option>
                                        <option value="3">Três</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">SubCategoria: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <select class="custom-select">
                                        <option selected>Escolher...</option>
                                        <option value="1">Um</option>
                                        <option value="2">Dois</option>
                                        <option value="3">Três</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Impacto: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <select class="custom-select">
                                        <option selected>Escolher...</option>
                                        <option value="1">Um</option>
                                        <option value="2">Dois</option>
                                        <option value="3">Três</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Urgencia: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <select class="custom-select">
                                        <option selected>Escolher...</option>
                                        <option value="1">Um</option>
                                        <option value="2">Dois</option>
                                        <option value="3">Três</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Contato: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <select class="custom-select">
                                        <option selected>Escolher...</option>
                                        <option value="1">Um</option>
                                        <option value="2">Dois</option>
                                        <option value="3">Três</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row align-items-center justify-content-center pt-4">
                                <label className="col-sm-2">Insira um anexo para agilizar o atendimento: </label>
                                <div class="col-sm-10 col-lg-6">
                                    <FileInput />
                                </div>
                            </div>
                            <div className="form-row justify-content-center pt-4 pb-5">
                                <a className="btn btn-primary" href="#">Enviar</a>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Demand;