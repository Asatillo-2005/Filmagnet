import axios from "axios"
import "./admin.scss"
import { useState, useEffect, useRef } from "react"
import { Toast } from 'primereact/toast';
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import ReactPlayer from 'react-player'

function Admin() {

    const toast = useRef(null);
    const elModal11 = useRef()
    const elModal12 = useRef()
    const elDot = useRef()
    const elDot1 = useRef()

    const [takeData, setTakedat] = useState([])
    const [name, setName] = useState()
    const [year, setYear] = useState()
    const [time, setTime] = useState()
    const [img, setImg] = useState()
    const [bg, setBg] = useState()
    const [quality, setQuality] = useState()
    const [gener, setGener] = useState()
    const [desc, setDesc] = useState()
    const [rating, setRating] = useState()
    const [url, setUrl] = useState()
    const [id, setId] = useState()
    const [reflesh, setReflesh] = useState()
    const [loading, setLoading] = useState()
    const [play, setPlay] = useState()
     const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    }
    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
    }


    useEffect(() => {
        setName(id?.name)
        setImg(id?.img)
        setBg(id?.bg)
        setYear(id?.year)
        setTime(id?.time)
        setQuality(id?.quality)
        setGener(id?.gener)
        setDesc(id?.desc)
        setRating(id?.rating)
        setUrl(id?.url)
    }, [id])


    function Fetch(){
        fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie")
            .then((res) => res.json())
            .then((data) => setTakedat(data))
    }

    useEffect(() => {
        Fetch()
    }, [loading])

    function onUpdate(id) {

        if (name == "" || img == "" || bg == "" || year == "" || time == "" || quality == "" || rating == "" || desc == "" || url == "" || gener == "") {
            console.log("error");
            showError()
        }
        else {
            setLoading(true)
            axios.put(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie/${id}`, {
                name, year, time, img, bg, quality, gener, desc, rating
            }).then((res) => {
                console.log(res.data)
                showSuccess()
                elModal11.current.classList.remove('about-open')
                setLoading(false)
            })
        }
    }

    function onDelte(id){
        setLoading(true)
        axios.delete(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie/${id}`).then((res) => {
            console.log(res.data)
            showSuccess()
            elModal11.current.classList.remove('about-open')
            setLoading(false)
        })
    }

    return (
        <section className="section-admin">
            <Toast ref={toast} />   
            <div className="container">
                <div className="admin-box">
                    <ul className="admin-link">
                        {
                            takeData.map((item, index) => {
                                return (
                                    <li className="admin-link-links1">
                                        <img src={item.img} alt="error" width={'294px'} height={'391px'} onClick={() => {
                                            elModal11.current.classList.add('about-open')
                                            // elModal12.current.classList.add('about-open2')
                                            elModal12.current.style.position = "static"
                                            setId(item)

                                        }} />
                                        <div className="admin-link-links1-about">
                                            <div className="admin-name">{item.name}</div>
                                            <div className="admin-year">{item.year}</div>
                                        </div>

                                    </li>
                                )
                            })
                        }
                        <div className="about-modal" ref={elModal11} onClick={(evt) => {
                            if (evt.target.matches('.about-modal')) {
                                elModal11.current.classList.remove('about-open')
                                setPlay(false)
                                console.log("is");
                            }
                        }}>
                            <div className="about-modal-inner" ref={elModal12}  style={{ backgroundImage: `url(${id?.bg})`} }>
                                <div className="inner-delet" onClick={()=>{onDelte(id?.id)}}>DELETE</div>

                                <Accordion activeIndex={false} className="accordin" >
                                    <AccordionTab header="EDIT" className="accordin2">
                                        <div className="m-0">
                                            <input className="about-modal-inner-input" type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="year" value={year} onChange={(e) => { setYear(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="time" value={time} onChange={(e) => { setTime(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="img" value={img} onChange={(e) => { setImg(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="bg" value={bg} onChange={(e) => { setBg(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="gener" value={gener} onChange={(e) => { setGener(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="quality" value={quality} onChange={(e) => { setQuality(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="rating" value={rating} onChange={(e) => { setRating(e.target.value) }} />
                                            <input className="about-modal-inner-input" type="text" placeholder="url" value={url} onChange={(e) => { setUrl(e.target.value) }} />
                                            <button className="about-modal-inner-btn" onClick={() => {
                                                onUpdate(id?.id)
                                                
                                            }}>UPDATE</button>
                                        </div>
                                    </AccordionTab>
                                </Accordion>

                                <div className="about-movie12">
                                    <p className="about-movie-1">{id?.name}</p>
                                    <span className="about-movie-1">{id?.year}</span>
                                    <span className="about-movie-1">{id?.time}</span>
                                    <span className="about-movie-1">{id?.gener}</span>
                                    <span className="about-movie-1">{id?.quality}</span>
                                    <span className="about-movie-1">{id?.rating}</span>
                                    <span className="about-movie-img"><img src={id?.img} alt="error" /></span>
                                    <span className="about-movie-url"><ReactPlayer url={id?.url} width={"300px"} height={"200px"} playing={play} /></span>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Admin