import React from 'react';
import { fchmod } from "fs";
const Carouselhdr = () => {
    return ( 
        <>
            <div class="Wrapper_boxsignos">
                <div class="wrapper_ul">
                    <ul>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\BUEY.png" title="Horoscopochino" height="60" width="60"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Caballo.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Cabra.png" title="Candidatos" height="60" width="60"/>
                               
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Cerdo.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Conejo.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Dragon.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Gallo.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Mono.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Perro.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\RATA.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\serpiente.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <img alt="Horoscopochino" src=".\imgeneshorscopochino\Tigre.png" title="Candidatos" height="60" width="60"/>
                                
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx="true">{`
                .Wrapper_boxsignos .wrapper_ul {
                    padding: 20px 0;
                    overflow-x: hidden;
                    width: 100%;
                }
                .Wrapper_boxsignos .wrapper_ul ul {
                    list-style: none;
                    padding: 0;
                    margin: 0 auto;
                    overflow: hidden;
                    width: 79rem;
                    position: relative;
                }
                .Wrapper_boxsignos .wrapper_ul li {
                    float: left;
                    width: calc((100% / 12));
                    position: relative;
                    min-height: 60px;
                }
                .Wrapper_boxsignos .wrapper_ul li a {
                    display: block;
                }
                .Wrapper_boxsignos .wrapper_ul li img {
                    border-radius: 3px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            `}
        </style>
        </>
     );
}
 
export default Carouselhdr;