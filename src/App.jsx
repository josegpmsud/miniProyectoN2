import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import logo from './img/logo.png'


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  let [filterLocation, setFilterLocation] = useState('All')
  let [guest,setGuest]=useState(0)
  let [guestA,setGuestA]=useState(0)
  let [guestC,setGuestC]=useState(0)
  let [counter,setCounter]=useState(0)
  let [showF, setShowF] = useState(false);
  let [showG, setShowG] = useState(false);
  let [showNavIni, setShowNavIni] = useState(true);
  let [showNavModal, setShowNavModal] = useState(false); 
  let cont = 0
  
  function handleShowF(){    
    if (showF==false) {
      setShowF(!showF)
      if (showG) {
        setShowG(!showG)
      }
    }        
   }
    
  function handleShowG(){
    if (showG==false) {
      setShowG(!showG)
      if (showF) {
        setShowF(!showF)
      }
    }    
  }  

  function handleShow(){    
      setShowNavIni(!showNavIni)      
      setShowNavModal(!showNavModal)
  }

  function handleShowIni(){    
    setShowNavIni(!showNavIni)   
    setShowNavModal(!showNavModal)
    if (showF==false) {
      setShowF(!showF) 
    }
    if (showG) {
      setShowG(!showG)
    }
  }
  
  function handleShowIniGuest(){    
    setShowNavIni(!showNavIni)
    setShowNavModal(!showNavModal)
    if (showF) {
      setShowF(!showF) }
      if (showG==false) {
        setShowG(!showG)
      }
    
    
} 


  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  //lista de ciudades

  const cityFilter = {}

  data.forEach(object => {
    const city = object.city;
    if(!cityFilter[city]){
      cityFilter[city] = true;
    }

  });

  const cityU = Object.keys(cityFilter)

  console.log(cityU)
 

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
  <>
  {showNavIni &&
  <div className="navIni">      
      <div className='contImg'>
            <a href="#"><img className="logo" src={logo}/></a>
      </div>
      <div className="navIniCh">        
        <div>
            <input className="s1 select2" type="button" value={filterLocation != '' ? filterLocation+', Finland' :'Show All'} onClick={handleShowIni} />
        </div>
        <div>
            <input className="s2 select2" type="button" value={guest != 0 ? guest+ ' guests' :'add guests'} onClick={handleShowIniGuest}/>              
        </div> 
        <div>
          <button  className="btnSearch1 select2" onClick={handleShowIni}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </div> 
      </div>
  </div>

  }
  {showNavModal &&
      
      <section >
        <div className="modal"></div>
      <div className="nav">      
        
        <div className="navSearch">
          <div>
            <div className="containerButton" onClick={handleShowF}>
              <label htmlFor="imp1" className="label">LOCATION</label>
              <input id="imp1" className="s1M select" type="button" value={filterLocation != '' ? filterLocation+', Finland' :'Show All'} onClick={handleShowF} />
            
            </div>
              {(showF === true) && <>
              <div>
              {        
              cityU.map((el, i) => {
                return(
                <div className="btnFilterLocationCont">
                  <button className="btnFilterLocation" onClick={() => setFilterLocation(filterLocation = el)}>
                  <span class="material-symbols-outlined black">location_on</span><span className="muli" aria-hidden="true">
                    {el}, Finland</span> 
                  </button>                  
                </div>
                   ) 
                   })           
                }
              <div className="btnFilterLocationCont">
                  <button className="btnFilterLocation" onClick={() => setFilterLocation(filterLocation = 'All')}>
                  <span class="material-symbols-outlined black">location_on</span><span className="muli" aria-hidden="true">
                    All, Finland</span> 
                  </button>                  
                </div> 
            </div>
              
              </>          
              }
 
          </div>          
          <div>
            <div className="containerButton" onClick={handleShowG}>
              <label htmlFor="imp2" className="label">GUESTS</label>
              <input id="imp2" className="s1M select muli" type="button" value={guest != 0 ? guest+ ' guests' :'add guests'} onClick={handleShowG}/>
              
            </div>
            {
            
            (showG === true) && 
            <>
            
            <div>
              <div className="">
                <div className="">
                  <p className="muli guest">Adult</p>
                  <span className="muli guest2">Age 13 or above</span>
                  <div className="">
                    
                      <button  className="a" onClick={() => {setGuest(guest - 1); setGuestA(guestA - 1); if(guestA == 0){guestA +1 } }}> 
                        －
                      </button>
                      <span> {" "+guestA+" "} </span>
                      <button  className="" onClick={() => {setGuest(guest + 1); setGuestA(guestA + 1);}}>
                        ＋
                      </button>
                  </div>
                </div>
                <div className="">
                  <p className="muli guest">Children</p>
                  <span className="muli guest2">Age 2-12</span>
                  <div className="">
                    <button className="" onClick={() => {setGuest(guest - 1); setGuestC(guestC - 1); }}>
                      －
                    </button>
                    <span> {" "+guestC+ " "} </span>
                    <button className="" onClick={() => {setGuest(guest + 1); setGuestC(guestC + 1); }}>
                      ＋
                    </button>
                  </div>
                </div>
              </div>        
            </div>
            </>
            }


          </div>
          <div className="containerButton2 buttonS2 btnlup" >
              <button  className="btnSearch select BtnS2" onClick={handleShow}>
                <span className="material-symbols-outlined lup">Search</span>Search
              </button>
          </div>          
        </div>          
      </div></section>
    }

      {filterLocation=='All' && data.filter(d => (((d.beds*2) >= guest) || (d.beds == null))).map((el, i) => {
       cont ++
        return(
        <></>        
        ) 
      })      
      }

      {filterLocation!='All' && data.filter(d => ((d.city === filterLocation && (d.beds*2) >= guest) || (d.city === filterLocation && d.beds == null))).map((el, i) => {
       cont ++
        return(
        <></>        
        ) 
      })      
      }
    <section className="filterSearch"><h1 className="titleCards">Stays in Finland</h1><p>{cont <= 12?cont: '12+'} stays</p></section>
    <main className="cards">
    
    {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
   
      {filterLocation!='All' && data.filter(d => ((d.city === filterLocation && (d.beds*2) >= guest) || (d.city === filterLocation && d.beds == null))).map((el, i) => {
        cont ++
        return(
        <div >          
          <Card
            key={i} 
            city={el.city} 
            country={el.country}
            superHost={el.superHost}
            title={el.title}
            rating={el.rating}
            maxGuests={el.maxGuests}
            type={el.type}
            beds={el.beds}
            photo={el.photo}
          ></Card>  
                 
        </div>
        
          ) 
        })      
      }

      {filterLocation =='All' && data.filter(d => (((d.beds*2) >= guest) || (d.beds == null))).map((el, i) => {
        cont ++
        return(
        <div >          
          <Card
            key={i} 
            city={el.city} 
            country={el.country}
            superHost={el.superHost}
            title={el.title}
            rating={el.rating}
            maxGuests={el.maxGuests}
            type={el.type}
            beds={el.beds}
            photo={el.photo}
          ></Card>  
                 
        </div>
        
          ) 
        })      
      }
      
      </main>
      
      <Footer></Footer>


  </>
  );
}

export default App;

