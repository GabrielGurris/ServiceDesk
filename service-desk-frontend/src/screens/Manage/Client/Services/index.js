import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';
import Sidebar from '../../../../components/Sidebar';

const ServiceDesk = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10">
                        <div className="text-center mt-3 mb-5">
                            <h1>Meus chamados</h1>
                        </div>
                        <table className="table mb-5">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome do cliente</th>
                                    <th scope="col">Serviço</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Informações</th>
                                    <th scope="col">Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">20775</th>
                                    <td>Joao Guilherme</td>
                                    <td>Incidente</td>
                                    <td>joaog@outlook.com</td>
                                    <td><a className="btn btn-success">Saiba mais</a></td>
                                    <td><a className="btn btn-danger">Remover</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">18876</th>
                                    <td>Cesar</td>
                                    <td>Demanda</td>
                                    <td>cesarnunes@hotmail.com</td>
                                    <td><a className="btn btn-success">Saiba mais</a></td>
                                    <td><a className="btn btn-danger">Remover</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">47877</th>
                                    <td>Carlos Araujo</td>
                                    <td>Catalogo</td>
                                    <td>caraujo@gmail.com</td>
                                    <td><a className="btn btn-success">Saiba mais</a></td>
                                    <td><a className="btn btn-danger">Remover</a></td>
                                </tr>
                            </tbody>
                        </table>

                    </main>
                </div>
            </div>


        </>
    );
};

export default ServiceDesk;