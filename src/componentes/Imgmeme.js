import React, {useState} from "react";

const Imgmeme = () => {

    const [imgmemes, setImgmemes]= useState();
    const [ingresarTexto, setingresarTexto]= useState();


   const seleccionarImg = (e)=>{
          setImgmemes(e.target.value);
          console.log(e.target.value);
   }
  const escribirTexto = (e)=>{
    setingresarTexto(e.target.value);
            console.log(e.target.value);
   }

    return(
        <div>
             <h1 className="mt-3 text-center">Crea tu meme</h1>

             <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-25 m-auto" arial-label=".form-select-lg example">
                <option value={1}>Futurama</option>
                <option value={2}>Bob Esponja</option>
                <option value={3}>Señora</option>
                <option value={4}>Calamardo</option>
            </select>
            

            <figure>
            

            <p className="w-100 px-30 text-center position-absolute top-50 start-30 h1">{ingresarTexto}</p>

            <img src={`./Imgmemes/${imgmemes}.jpeg`} className="figure-img img-fluid mt-3 d-block m-auto"/>

           </figure>

             <h3 className="mt-3 mb-3 text-center">Ingresá tu texto</h3>
           <input onChange={escribirTexto} className="form-control w-50 m-auto m-50 d-block" type="text" placeholder="Escribí tu frase" arial-label="default input example"></input>

           
            

           <button type="button" className="btn btn-primary mt-4 mb-4 d-block mx-auto">Descargá tu meme</button>
            
        </div> 

    );
} 

export default Imgmeme