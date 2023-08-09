import "./primium.scss"
import { NavLink as Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Toast } from 'primereact/toast';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

import form1 from "../../assets/imgs/form-data-cross.png"


function Primium() {

    const toast = useRef(null)

    const elData = useRef()

    const [name, setName] = useState()
    const [img, setImg] = useState()
    const [bg, setBg] = useState()
    const [time, setTime] = useState()
    const [year, setYear] = useState()
    const [quality, setQuality] = useState()
    const [rating, setRating] = useState()
    const [desc, setDesc] = useState()
    const [url, setUrl] = useState()
    const [gener, setGener] = useState()

    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
    }
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    const data = { 'name': name, 'img': img, 'bg': bg , 'time': time,'year': year,'quality':quality,'rating':rating,'desc':desc,'gener':gener,'url':url,}

    function onSubmit(evt) {
        evt.preventDefault()
        if (name == "" || img == "" || bg == ""|| time == ""|| year == ""|| quality == ""|| rating == ""|| desc == ""|| desc == ""|| gener == ""|| url == "") {
            console.log("error");
            showError()
        }
        else {
            fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then((res)=>{
                showSuccess()
                setName('')
                setImg('')
                setBg('')
                setYear('')
                setTime('')
                setGener('')
                setDesc('')
                setUrl('')
                setQuality('')
                setRating('')
            })
        }
    }


    return (
        <section className="section-primium">
            <div className="container">
                <div className="primium-box">
                <Toast ref={toast} />
                    <form className="primium-form">
                        <input type="number" placeholder="parol" className="primium-form-input" onChange={((evt) => {
                            const ev = evt.target.value
                            if (ev == 1234 || ev == 4321) {
                                elData.current.classList.add('data-open')
                            }
                        })} />
                    </form>
                    <div className="modal-data" ref={elData} onClick={((evt) => {
                        if (evt.target.matches(".close-data")||evt.target.matches(".close-data-img")) {
                            elData.current.classList.remove("data-open")
                        }
                    })} >
                        <div className="close-data"><img className="close-data-img" src={form1} alt="error" width={24}/></div>
                        <form className="form-data">
                            <input type="text" placeholder="name" className="form-data-input" value={name} onChange={((e) => { setName(e.target.value) })} />
                            <input type="text" placeholder="img" className="form-data-input" value={img} onChange={((e) => { setImg(e.target.value) })} />
                            <input type="text" placeholder="bg" className="form-data-input" value={bg} onChange={((e) => { setBg(e.target.value) })} />
                            <input type="text" placeholder="year" className="form-data-input" value={year} onChange={((e) => { setYear(e.target.value) })} />
                            <input type="text" placeholder="time" className="form-data-input" value={time} onChange={((e) => { setTime(e.target.value) })} />
                            <input type="text" placeholder="quality" className="form-data-input" value={quality} onChange={((e) => { setQuality(e.target.value) })} />
                            <input type="text" placeholder="rating" className="form-data-input" value={rating} onChange={((e) => { setRating(e.target.value) })} />
                            <input type="text" placeholder="gener" className="form-data-input" value={gener} onChange={((e) => { setGener(e.target.value) })} />
                            <input type="text" placeholder="desc" className="form-data-input" value={desc} onChange={((e) => { setDesc(e.target.value) })} />
                            <input type="text" placeholder="url" className="form-data-input" value={url} onChange={((e) => { setUrl(e.target.value) })} />
                            <button className="form-data-btn" onClick={onSubmit}>Click</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Primium