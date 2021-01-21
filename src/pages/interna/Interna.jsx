import React from 'react';
import Carouselhdr from '../../components/carousel-header/Carouselhdr';
import { SearchForm } from '../PageZodiac/SearchForm'


const Interna = () => {
    return ( 
        <div className="container">
            <div className="Content-header">
                <div className="background-article"></div>
                <div className="Box-content-grey Container-center">
                    <div className="Content-img">
                        <img src=".\imgeneshorscopochino\RATA.png"/>
                    </div>
                    <div className="Content-text">
                        <h1 className="Title">Rata</h1>
                        <span>Misteriosa, secreta, agresiva</span>
                        <p>Descubre las carácteristicas de las más mágnetica del horóscopo chino</p>
                    </div>
                </div>
                <div className="Content-List-img">
                    <Carouselhdr/>
                </div>
            </div>
            <div className="Content-body">
                <div class="body-text Container-center">
                    <h2 class="case">
                        <strong>Características de la rata en el horóscopo chino</strong>
                    </h2>
                    <p class="text">La rata se infiltra en el corazón y el pensamiento: es el signo que más capacidad tiene para «hacerte el bocho» desde el primer instante que se cruza contigo. No hay escapatoria.</p> 
                    <p class="text">Una rata que nace con amor, cuidado y educación podrá destacarse en la sociedad.</p> 
                    <p class="text">La rata tiene un sex appeal que es marca registrada. Su caudal emocional, creativo y humano la convierte en un ser único e irremplazable.</p> 
                    <p class="text"> Es solitaria, sabe atravesar las pruebas que se le presentan, administrando con precisión su porvenir y condimentándolo con sentido del humor, creatividad y solvencia.</p> <p class="text"> La rata es ciclotímica: desde muy joven deberá tener contención, amigos, y especialistas que puedan decodificar su psiquis para no estancarse y evolucionar en su vocación. Se reinventará en la vida mil veces; tanto como quiera y pueda.</p> 
                    <p class="text"> Hogareña, cariñosa con hijos, nietos, hermanos y amigos, es una persona necesaria para pedirle consejos, ayuda, o su tiempo.</p> 
                    <p class="text"> En ambos sexos, la roedora crea dependencia emocional con su estilo de convivencia.</p> 
                    <p class="text"> Cuando está enamorada es abrumadora. Sabe tocar el punto G física y anímicamente, y seduce sin tregua. Es una gran compañera de la vida cotidiana y de viajes al exterior.</p> <p class="text"> Su memoria asombra; detallista, diseca situaciones y personas con agudeza y sentido del humor. Conoce las leyes y los códigos del barrio y del país y siempre se adelanta para sacar tajada en lo que pueda.</p>
                </div>
            </div>      
            <SearchForm />
            <style jsx="true">{`
                .text{
                    margin-bottom: .5rem;
                    line-height: 20px;
                }
                .Content-header{
                    background: #f1f1f1;
                    text-align: center;
                    margin-top: 4.5%;
                }
                .Content-header .Box-content-grey{
                    position:relative;
                    top:-50px;
                }
                .Content-header .Box-content-grey .Title{
                    font-size:24px;
                    font-family: 'Roboto', sans-serif;
                }
                .Content-header .Box-content-grey span,.Content-header .Box-content-grey p{
                    font-family: 'Roboto';
                    font-size: 16px;
                }
                .Content-header .Box-content-grey .Content-img{
                    width: 110px;
                    height: 105px;
                    margin: 0 auto;
                    border-radius: 200px;
                    background: white;
                }
                .Content-body .body-text .case{
                    text-transform: uppercase;
                    text-align: center;
                    font-size:30px;
                    font-family: 'Roboto', sans-serif;
                    padding: 0 72px;
                }
                .Content-body .body-text p{
                    font-family: 'Roboto';
                    font-size: 16px;
                }
                .Container-center{
                    width: 624px;
                    margin: auto;
                    clear: both;
                }
            `}
        </style>
        </div>

     );
}
 
export default Interna;