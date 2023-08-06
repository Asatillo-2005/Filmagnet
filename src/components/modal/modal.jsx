import React from "react";
import { useRef,useState,useEffect } from "react"
import "./modal.scss"



function Modal({setModalopen, modalopen,modaldata}) {

    const [name, setName]= useState('')
    const [img, setImg]= useState('')

    useEffect(()=>{
        setName(modaldata?.name)
        setImg(modaldata?.img)
    },[modaldata])

    function onUpdata(){

        const data = {name,img}

        fetch(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie/3`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json' 
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
          .then(data=>{
            setModalopen(false)
            console.log(data)
          })
    }

    return (
        <section className={`section-modal1 ${modalopen ? "open" : ''}`} onClick={(evt) => {
            if (evt.target.matches('.section-modal1')) {
               setModalopen(false)
            }
        }} >
            <div className="inner-modal1">
                <input className="modal-input" type="text"placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input className="modal-input" type="text"placeholder="img" value={img}  onChange={(e)=>{setImg(e.target.value)}}/>
                <button className="modal-update" onClick={onUpdata}>update</button>
            </div>
        </section>
    )
}

export default Modal