import styles from "./FormScheduleComponent.module.scss";   
import React, { useState  } from 'react';
import DateComponent from "../Basics/DateComponent"
import HourComponent from "../Basics/HourComponent"
 
export default function FormScheduleComponent(){   
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [regiao, setRegiao] = useState('');
  const [cidade, setCidade] = useState('');   
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showDiv, setShowDiv] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const regioes = ['Kanto', 'Johto', 'Sinnoh'];

  const cidades = {
    'Kanto': ['Pewter City', 'Pallet Town', 'Veridian City'],
    'Johto': ['New Bark Town', 'Cherrygrove City', 'Violet City'],
    'Sinnoh': ['Twinleaf Town', 'Sandgem Town', 'Jubilife City'],
  };
  const poke = ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle', 'Meowth', 'Magmar ', 'Hitmonchan', 'Drowzee'];
 
  //////////  
  const [pokemons, setPokemons] = useState(['']);
  const [selecionados, setSelecionados] = useState(0); 
  const limiteGeracoes = 6; 

  const adicionarDropdown = () => {
    if (pokemons.length < limiteGeracoes) {
      setPokemons([...pokemons, '']);
    }
  };

  const handleSelecaoPokemon = (e, index) => {
    const novosPokemons = [...pokemons];
    novosPokemons[index] = e.target.value;
    setPokemons(novosPokemons);
     
    const selecionadosCount = novosPokemons.filter((pokemon) => pokemon !== '').length;
    setSelecionados(selecionadosCount);
  };
  ////
  //
   const handleDateChange = (date) => {
        setSelectedDate(date); 
    };
    const handleHourChange = (hour) => {
      setSelectedHour(hour); 
  };
   //////////// 
   const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }); 

   const taxa = 0.03 ;
   const vlrUnit = 70.00;       
   
   const subtotal = formatter.format( vlrUnit * selecionados ); 
   const vlrTaxa  = formatter.format( ( vlrUnit * selecionados ) * taxa );
   const soma     = formatter.format( 70 * selecionados  );
   ////
   const handleSubmit = (e) => {
    e.preventDefault();    
    console.log('data:', selectedDate); 
    console.log('hora:', selectedHour); 
    console.log('Poke:', selecionados); 
    var Msg = (selectedDate === '' ) ? '\n Selecione uma data para agendamento ! \n' : '';
    Msg += (selectedHour === '' ) ? '\n Selecione uma Hora para agendamento ! \n' : '';
    setErrorMsg(Msg);
    if(Msg === '' ){
      setShowDiv(false);;
      setShowSuccess(true); 
      setShowError(false);
    }else{
      setShowDiv(false);
      setShowSuccess(false); 
      setShowError(true)
    }
   };

    const handleBackButtonClick = () => {
      window.location.reload()
    };
 
  return (
  
  <>
{showDiv && (
<div className={styles.center}> 
  <form onSubmit={handleSubmit}>
    <div className={styles.tabela}>
      <div className={styles.linha}>
        <div className={styles.celula}>
          <h1 className={styles.title}>Preencha o formulário abaixo para agendar sua consulta </h1>
        </div>
        
      </div>
      <div className={styles.linha}>
        <div className={styles.celula}>
          <div className={styles.formGroup}>
            <label htmlFor="nome" className={styles.label}>Nome:</label>
            <input
              className={styles.formInput}
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.celula}> 
            <div className={styles.formGroup}>
              <label htmlFor="sobrenome"  className={styles.label}>Sobrenome:</label> 
              <input
                className={styles.formInput}
                type="text"
                id="sobrenome"
                name="sobrenome"
                placeholder="Digite seu sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                required
              />
            </div> 
        </div>        
      </div>      
      <div className={styles.linha}>
        <div className={styles.celula}>
          <div className={styles.formGroup}>
            <label htmlFor="regiao" className={styles.label}>Região:</label>
              <select
                className={styles.formDrop}
                id="regiao"
                name="regiao"
                value={regiao}
                onChange={(e) => setRegiao(e.target.value)}
                required
              >
                <option value="">Selecione a Região</option>
                {regioes.map((regiaoOption) => (
                <option key={regiaoOption} value={regiaoOption}>
                {regiaoOption}
                </option>
                ))}
              </select>
          </div>
        </div>
        <div className={styles.celula}>
          <div className={styles.formGroup}>
              <label htmlFor="cidade" className={styles.label}>Cidade:</label>
              <select
                className={styles.formDrop}
                id="cidade"
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              >
              <option value="">Selecione a Cidade</option>
              {cidades[regiao] && cidades[regiao].map((cidadeOption) => (
                  <option key={cidadeOption} value={cidadeOption}>
                  {cidadeOption}
                  </option>
              ))}
              </select>
          </div>
        </div>
      </div>
      <div className={styles.linha}>
        <div className={styles.celula}>
          <span className={styles.spanCad}>Cadastre seu Time</span>
          <span className={styles.spanAtend}>Atendemos até 06 pokemons por vez</span>
        </div>
      </div>
        
      {pokemons.map((pokeOption, index) => (
        <div className={styles.linha} key={index}>
          <div className={styles.celula}>
            <div className={styles.formGroup}>
              <label htmlFor={`poke_${index}`} className={styles.label}>
                Pokemon 0{index + 1}:
              </label>
              <select
                className={styles.formDrop}
                id={`poke_${index}`}
                name={`poke_${index}`}
                value={pokeOption}
                onChange={(e) => handleSelecaoPokemon(e, index)}
                required
              >
                <option value="">Selecione seu Pokemon</option>
                {poke.map((pokeOption) => (
                  <option key={pokeOption} value={pokeOption}>
                    {pokeOption}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
      {pokemons.length < limiteGeracoes && (
        <div className={styles.linha}>
          <div>
            <button type="button" onClick={adicionarDropdown} className={styles.btnAdd} >
            Adicionar novo pokémon ao time ...    +
            </button>
          </div>           
        </div>
      )}
  
      <div className={styles.linha}>
        <div className={styles.celula}>
          <div className={styles.formGroup}>
            <label htmlFor="nome" className={styles.label}>Data para Atendimento:</label>
             <DateComponent  onDateChange={handleDateChange} />
          </div>
        </div>
        <div className={styles.celula}> 
            <div className={styles.formGroup}>
              <label htmlFor="sobrenome"  className={styles.label}>Horário de Atendimento:</label> 
              <HourComponent  onHourChange={handleHourChange} />
            </div> 
        </div>        
      </div>  
      <div className={styles.linha}>
        <div className={styles.celula}>
          <div className= {styles.results}>    
            <div className= {styles.alingDiv}>
              <div className= {styles.spanDesc}> Número de pokémon a serem atendidos:</div>
              <div className= {styles.spanResult}> {selecionados}</div>                      
            </div> 
            <div className= {styles.alingDiv}> 
              <div className= {styles.spanDesc}>Atendimento unitário por pokémon </div>
              <div className= {styles.spanResult}> R$ 70,00*</div>
            </div>
            <div className= {styles.alingDiv}> 
              <div className= {styles.spanDesc}>Subtotal:   </div>
              <div className= {styles.spanResult}> {subtotal}</div>
            </div>
            <div className= {styles.alingDiv}>  
              <div className= {styles.spanDesc}>Taxa gerencial*: </div>
              <div className= {styles.spanResult}>  {vlrTaxa}</div>
            </div>
            <div className= {styles.lastDiv}>
              *adicionamos uma taxa de 3%, multiplicado pelo número de geração mais alta do time, com limite de 30%
            </div>
          </div>          
        </div>
      </div>   
      <div className={styles.linha}> 
        <div   className={styles.pai}>
          <div  className={styles.esquerda} >
          <h1 className={styles.txtVlr}>Valor Total: {soma}</h1>                 
          </div>
          <div className={styles.direita} >
            <button    className={styles.btnConcAgen} >Concluir Agendamento</button>        
          </div>
        </div> 
      </div> 
    </div>
  </form>  
</div>
)}
{showSuccess && (
  <div className={styles.returnMessage}>
      <div className={styles.messageTitulo}>
        Consulta Agendada
      </div>
      <div  className={styles.messageIcon}>
        <img src='/check.svg' width='50px'  ></img>
      </div>
      <div className={styles.messageText}>
        Seu Agendamento para o dia {selectedDate}, às {selectedHour}, <br/>
        para 0{selecionados} pokémons foi realizada com sucesso!<br />            
      </div>
      <button  onClick={handleBackButtonClick} className={styles.btnConcAgen} >Fazer Novo Agendamento</button>    
  </div>
)}
 {showError && (
  <div className={styles.returnMessage}> 
    <div className={styles.messageTitulo}>
      Consulta Agendada
    </div>
    <div  className={styles.messageIcon}>
      <img src='/warning.svg' width='50px'  ></img>
    </div>
    <div className={styles.messageText}>
      {errorMsg}
    </div>
    <button  onClick={handleBackButtonClick} className={styles.btnConcAgen} >Fazer Novo Agendamento</button>  
        
  </div>
)}
 
  </>

  );
}