import React from "react";
import { useRef,useState,useEffect } from "react"
import "./modal.scss"



function Modal({setModalopen, modalopen,modaldata}) {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [bg, setBg] = useState('')
    const [time, setTime] = useState('')
    const [year, setYear] = useState('')
    const [quality, setQuality] = useState('')
    const [rating, setRating] = useState('')
    const [desc, setDesc] = useState('')
    const [url, setUrl] = useState('')
    const [gener, setGener] = useState('')

    useEffect(()=>{
        setName(modaldata?.name)
        setImg(modaldata?.img)
        setBg(modaldata?.bg)
        setYear(modaldata?.year)
        setTime(modaldata?.time)
        setQuality(modaldata?.quality)
        setGener(modaldata?.gener)
        setDesc(modaldata?.desc)
        setRating(modaldata?.rating)
        setUrl(modaldata?.url)
    },[modaldata])

    function onUpdata(){

        const data = {name,img,bg,year,time,quality,rating,desc,url,gener}

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
            setName('')
            setImg('')
            setBg('')
            setYear('')
            setTime('')
            setDesc('')
            setRating('')
            setGener('')
            setUrl('')
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
                <input className="modal-input" type="text"placeholder="bg" value={bg}  onChange={(e)=>{setBg(e.target.value)}}/>
                <input className="modal-input" type="text"placeholder="year" value={year}  onChange={(e)=>{setYear(e.target.value)}}/>
                <input className="modal-input" type="text"placeholder="time" value={time}  onChange={(e)=>{setTime(e.target.value)}}/>
                <input className="modal-input" type="text"placeholder="quality" value={quality}  onChange={(e)=>{setQuality(e.target.value)}}/>
                <input className="modal-input" type="text"placeholder="gener" value={gener}  onChange={(e)=>{setGener(e.target.value)}}/>
                <input className="modal-input" type="text"placeholder="desc" value={desc}  onChange={(e)=>{setDesc(e.target.value)}}/>
                <input className="modal-input" type="text"placeholder="rating" value={rating}  onChange={(e)=>{setRating(e.target.value)}}/>
                <input className="modal-input" type="text"placeholder="url" value={url}  onChange={(e)=>{setUrl(e.target.value)}}/>
                <button className="modal-update" onClick={onUpdata}>update</button>
            </div>
        </section>
    )
}

export default Modal